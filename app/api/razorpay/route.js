import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/Payment";
import Razorpay from "razorpay";
import connectDb from "@/utils/connectDb";
import User from "@/models/User";
export const POST = async (req) => {
    await connectDb();
    let body = await req.formData();
    body = Object.fromEntries(body);


    //check if razorpay id is present on the server
    let p =await Payment.findOne({ oid: body.razorpay_order_id })
    if (!p) {
        return NextResponse.json({ message: "Payment not found" }, { status: 404 });
    }
    

    //fetch the secret of the user from the database who is getting payment
    const user = await User.findOne({ username: p.to_user });
    const secret = user.razorpaySecret
    //verify the payment
    const isValid = validatePaymentVerification(
        {
            'order_id': body.razorpay_order_id,
            'payment_id': body.razorpay_payment_id
        },
        body.razorpay_signature,
        secret 
    );

    if (isValid) {
        //update the payment status
        const updatedPayment = await Payment.findOneAndUpdate(
            { oid: body.razorpay_order_id },
            { done: true },
            { new: true }
        );
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_user}?paymentDone=true`);
    }

}