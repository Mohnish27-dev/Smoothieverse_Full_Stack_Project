import React from 'react'
import PaymentPage from '../components/PaymentPage';
import { notFound } from "next/navigation";
import connectDb from '@/utils/connectDb';
import User from '@/models/User';
const Username = async ({ params }) => {
  const checkUser = async (params) => {

    //if the username is not found in the database, you can return a 404 page
    await connectDb();
    const username = await User.findOne({ username: params.username });
    if (!username) {
      return notFound();
    }
  }


  await checkUser(params)
  return (
    <>
      <PaymentPage username={params.username} />
    </>
  )

}


export default Username
export async function generateMetadata({ params }) {
  return {
    title: `Support ${params.username} | Support with a Smoothie!`
  };
}

