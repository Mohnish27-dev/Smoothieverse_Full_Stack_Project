"use client"
import React from 'react'
import Script from 'next/script'
import { initiate } from '@/actions/useractions'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { ToastContainer, toast } from 'react-toastify';
import { fetchuser, fetchpayments, } from '@/actions/useractions'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

const PaymentPage = ({ username }) => {
    const router = useRouter()

    const [paymentform, setPaymentform] = useState({ name: '', message: '', amount: '' })
    const [currentuser, setcurrentuser] = useState({})
    const [payments, setpayments] = useState([])
    const searchParams = useSearchParams();
    useEffect(() => {
        if (searchParams.get('paymentDone') === 'true') {
            toast.success('Thanks for your Donation', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        router.push(`/${username}`)


        getdata(username)
    }
        , [])

    const handlechange = (e) => {
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }

    const getdata = async () => {

        let u = await fetchuser(username)
        setcurrentuser(u)
        let dbpayments = await fetchpayments(username)
        setpayments(dbpayments)
    }




    const pay = async (amount) => {
        let a = await initiate(amount, username, paymentform)
        let orderId = a.payment.id;
        var options = {
            "key": currentuser.razorpayKey, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "SmoothieVerse", //business name(Smoothiverse)
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1 = new Razorpay(options);
        rzp1.open();

    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"

            />

            <div className='cover w-full relative bg-red-50 '>
                <img className='object-cover w-full h-[350px]' src={currentuser.coverPic} alt="" />
                <div className="profile absolute -bottom-16 right-[45%] w-32 border-4 border-white rounded-full ">
                    <img className='rounded-full object-cover ' src={currentuser.profilePic} alt="" />
                </div>
            </div>
            <div className='flex flex-col text-white justify-center my-18 items-center '>
                <div className='   font-bold text-xl'>

                    {username}
                </div>
                <div>
                    Lets help {username} to get a smoothie
                </div>
                <div className='text-sm text-gray-400'>
                    {payments.length} supporters  ● Total Earnings ₹{payments.reduce((acc, payment) => acc + payment.amount, 0) / 100}
                </div>

                <div className="payment flex flex-col md:flex-row justify-center items-center gap-8 md:gap-3 mt-10">
                    <div className="supporters bg-slate-800 mx-4  md:mx-0 md:w-1/2 px-16 md:px-6 py-3 md:min-h-[320px] min-w-[350px] rounded-lg ">
                        {/* show list of all supporters as a leaderboard */}
                        <h2 className='text-2xl font-bold py-3'>Top 5 Supporters</h2>
                        {payments.length == 0 && <p className='text-gray-400'>No supporters yet</p>}
                        {payments.map((payment, index) => {
                            return <div key={index} className='flex items-center gap-4 py-2 w-auto'>
                                <img src="/icons/avtar.gif" width={33} height={33} alt="" />
                                <p className='text-sm sm:text-base'>
                                    {payment.name} donated <span className='font-bold'>₹{payment.amount / 100}</span> with a message &quot;{payment.message}&quot;
                                </p>
                            </div>
                        })}
                    </div>
                    <div className="makePayment bg-slate-800 px-10 mx-4 md:mx-0  py-4 rounded-lg ">
                        {/* make payment button */}
                        <h2 className='font-bold text-2xl'>Make a Payment</h2>
                        <input name='name' value={paymentform.name || ''} onChange={handlechange} className='w-full border border-gray-300 mt-2 p-2 rounded-2xl' type="text" placeholder='Enter Name' />
                        <input name='message' value={paymentform.message || ''} onChange={handlechange} className='w-full border border-gray-300 mt-2 p-2 rounded-2xl' type="text" placeholder='Enter Message' />
                        <input name='amount' value={paymentform.amount || ''} onChange={handlechange} className='w-full border border-gray-300 mt-2 p-2 rounded-2xl' type="number" placeholder='Enter Amount' />
                        <button disabled={paymentform.name.length < 3 || paymentform.message.length < 3 || paymentform.amount.length < 1} onClick={() => { pay(paymentform.amount * 100) }} id="rzp-button1" type="button" className="w-auto mt-2 disabled:cursor-not-allowed disabled:bg-blue-50 text-gray-900 bg-[#4ab3fc] hover:bg-[#008ef2]/90 focus:ring-4 focus:outline-none focus:ring-[#008ef2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#008ef2]/50 me-2 mb-2">
                            <svg className="w-4 h-4 me-2 -ms-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="paypal" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"></path></svg>
                            Check out with RazorPay
                        </button>
                        <div className="instantpayments flex justify-center flex-col md:flex-row  gap-2 md:gap-24">
                            <button onClick={() => pay(1000)} disabled={paymentform.name.length < 3 || paymentform.message.length < 3} className='bg-slate-900 rounded-4xl p-3 mt-1.5 cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-700'>Pay ₹10</button>
                            <button onClick={() => pay(2000)} disabled={paymentform.name.length < 3 || paymentform.message.length < 3} className='bg-slate-900 rounded-4xl p-3 mt-1.5 cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-700'>Pay ₹20</button>
                            <button onClick={() => pay(5000)} disabled={paymentform.name.length < 3 || paymentform.message.length < 3} className='bg-slate-900 rounded-4xl p-3 mt-1.5 cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-700'>Pay ₹50</button>
                        </div>

                    </div>
                </div>
            </div>
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

        </>
    )
}


export default PaymentPage


