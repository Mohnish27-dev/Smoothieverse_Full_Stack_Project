

"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import { fetchuser, updateProfile } from '@/actions/useractions';
const Dashboard = () => {
  const { data: session, status, update } = useSession()
  const [formData, setFormData] = useState({ name: '', email: '', username: '', razorpayKey: '', razorpaySecret: '', profilePic: '', coverPic: '' })
  const router = useRouter()

  const getdata = async () => {
    if (!session || !session.user || !session.user.name) return;
    let u = await fetchuser(session.user.name);
    setFormData({
      name: u?.name || '',
      email: u?.email || '',
      username: u?.username || '',
      razorpayKey: u?.razorpayKey || '',
      razorpaySecret: u?.razorpaySecret || '',
      profilePic: u?.profilePic || '',
      coverPic: u?.coverPic || ''
    });
  }
  useEffect(() => {
    if (!session && status !== 'loading') {
      router.push('/login')
    }
    else {
      getdata()
    }
  }, [session, status, router])



  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }


  const handleSubmit = async (e) => {

    update()
    const updatedFormData = {
      ...formData,
      razorpayKey: formData.razorpayKey || process.env.NEXT_PUBLIC_KEY_ID || "",
      razorpaySecret: formData.razorpaySecret || process.env.NEXT_PUBLIC_KEY_SECRET || "",
    };
    let a = await updateProfile(formData, session.user.name)
    toast.success('Profile updated successfully!');
  }

  if (!session) return null

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
      <div className="p-6 max-w-3xl mx-auto text-white">

        <h1 className="text-3xl font-bold mb-6">Dashboard Settings</h1>

        <form action={handleSubmit} className="space-y-4 bg-gray-800 p-6 rounded-xl">
          <div>
            <label className="block mb-1">Full Name *</label>
            <input
              type="text"
              name="name"
              className="w-full p-2 rounded bg-gray-700 text-white"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block mb-1">Email *</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 rounded bg-gray-700 text-white"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block mb-1">Username *</label>
            <input
              type="text"
              name="username"
              className="w-full p-2 rounded bg-gray-700 text-white"
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block mb-1">Profile Picture URL</label>
            <input
              type="text"
              name="profilePic"
              className="w-full p-2 rounded bg-gray-700 text-white"
              value={formData.profilePic}
              onChange={handleChange}
              placeholder="https://example.com/profile.jpg"
            />
          </div>

          <div>
            <label className="block mb-1">Cover Picture URL</label>
            <input
              type="text"
              name="coverPic"
              className="w-full p-2 rounded bg-gray-700 text-white"
              value={formData.coverPic}
              onChange={handleChange}
              placeholder="https://example.com/cover.jpg"
            />
          </div>

          <div>
            <label className="block mb-1">Razorpay Key ID (optional)<span className='text-sm text-red-600 mx-1'>Default credentials are of developer</span></label>
            <input
              type="text"
              name="razorpayKey"
              className="w-full p-2 rounded bg-gray-700 text-white"
              value={formData.razorpayKey}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block mb-1">Razorpay Secret (optional)<span className='text-sm text-red-600 mx-1'>Default credentials are of developer</span></label>
            <input
              type="password"
              name="razorpaySecret"
              className="w-full p-2 rounded bg-gray-700 text-white"
              value={formData.razorpaySecret}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </form>
      </div>
    </>
  )
}

export default Dashboard