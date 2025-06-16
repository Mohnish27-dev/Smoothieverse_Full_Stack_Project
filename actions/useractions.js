"use server"

import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import User from "@/models/User"
import connectDb from "../utils/connectDb";

export const initiate = async (amount, user_name, paymentform) => {
    await connectDb();
    const user = await User.findOne({ username: user_name });
    const secret = user.razorpaySecret
    const key= user.razorpayKey

    var instance = new Razorpay({ key_id: key, key_secret: secret});
    let options = {
        "amount": Number.parseInt(amount),
        "currency": "INR",

    };

    const payment = await instance.orders.create(options);


    const newPayment = await Payment.create({
        name: paymentform.name,
        to_user: user_name,
        oid: payment.id,
        message: paymentform.message,
        amount: Number.parseInt(amount)
    });

    return { payment };



}
export const fetchuser = async (username) => {
    await connectDb();
    const user = await User.findOne({ username: username });
    let u = user.toObject({ flattenObjectIds: true });
    return JSON.parse(JSON.stringify(u));
}

export const fetchpayments = async (username) => {
    await connectDb();
    // find top 5 payments sorted by decreasing order of amount and flatten object Id
    const payments = await Payment.find({ to_user: username, done: true })
        .sort({ amount: -1 })
        .limit(5)
        .lean();
    
    return JSON.parse(JSON.stringify(payments));
}

export const updateProfile = async (data, oldusername) => {
    await connectDb();
    let ndata = data;

    if (oldusername !== ndata.username) {  
        // check if username already exists
        const existingUser = await User.findOne({ username: ndata.username });
        if (existingUser) {
            throw new Error("Username already exists");
        }
        // if username is changed, update the username in all payments
        await Payment.updateMany(
            { to_user: oldusername },
            { to_user: ndata.username }
        );
    }
    await User.updateOne(
        { email: ndata.email }, ndata)
}