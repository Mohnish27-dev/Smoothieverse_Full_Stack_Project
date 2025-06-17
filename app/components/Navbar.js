"use client"
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"


const Navbar = () => {
    const [showdropdown, setshowdropdown] = useState(false)
    const { data: session } = useSession();

    return (
        <nav className='bg-slate-950 text-white flex justify-between items-center '>
            <div className="logo font-bold text-xl py-4 px-2">
                <Link href={"/"} className='max-[385px]:flex'><span>🥤</span>SmoothieVerse</Link>

            </div>
            <div className='relative'>
                {session &&
                    <>

                        <button onClick={() => setshowdropdown(!showdropdown)} id="dropdownDefaultButton" onBlur={() => setTimeout(() => { setshowdropdown(false) }, 300)} data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg mx-4 text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Welcome {session.user.name}<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                        </button>


                        <div id="dropdown" className={`${showdropdown ? "" : "hidden"} z-10 absolute left-[60px] bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700`} >
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                <li>
                                    <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                                </li>

                                <li>
                                    <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
                                </li>
                                <li>
                                    <Link href={`/contact`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Contact</Link>
                                </li>
                                <li>
                                    <Link onClick={() => signOut()} href="/login" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
                                </li>
                            </ul>
                        </div>
                    </>
                }

                {session && <button className='cursor-pointer hidden sm:inline text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={() => signOut()}>Logout</button>}
                {!session && <Link href={"/login"}>
                    <button className='cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Login</button>
                </Link>}
                {!session &&
                    <Link href={"/contact"}>

                        <button className='cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 max-[385px]:py-[2px] py-2.5 text-center me-2 mb-2'>Contact Us</button>
                    </Link>
                }

            </div>
        </nav>
    );
}

export default Navbar
