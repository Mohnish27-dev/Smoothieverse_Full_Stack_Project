import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex flex-col items-center justify-center text-white px-2 sm:px-4 py-8 sm:py-16">
            <div className="w-full max-w-lg sm:max-w-2xl bg-black bg-opacity-60 rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-10 border border-purple-700">
                <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 sm:mb-6 text-center text-purple-300 drop-shadow-lg">About SmoothieVerse</h1>
                <p className="text-base sm:text-lg mb-4 sm:mb-6 text-gray-200 text-center">
                    Welcome to <span className="font-bold text-purple-400">SmoothieVerse</span> – the platform where your dreams get the boost they deserve! Whether you’re raising funds for a creative project, a personal cause, or a community initiative, we make it easy, secure, and fun.
                </p>
                <div className="flex justify-center mb-4 sm:mb-6">
                    <Image
                        src="/icons/smoothie_icon.png"
                        alt="Smoothie Icon"
                        width={96}
                        height={96}
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-purple-400 shadow-lg"
                    />
                </div>
                <ul className="list-disc list-inside text-left text-gray-300 mb-4 sm:mb-6 space-y-2 text-sm sm:text-base">
                    <li><span className="font-semibold text-purple-300">Simple & Fast:</span> Launch your campaign in minutes and start receiving support instantly.</li>
                    <li><span className="font-semibold text-purple-300">Secure Payments:</span> Powered by Razorpay, your transactions are safe and seamless.</li>
                    <li><span className="font-semibold text-purple-300">Personal Profiles:</span> Showcase your story, connect with supporters, and track your progress.</li>
                    <li><span className="font-semibold text-purple-300">Community Driven:</span> Join a vibrant community of changemakers and backers.</li>
                </ul>
                <div className="text-center">
                    <Link href="/" >
                        <a className="inline-block px-4 py-2 sm:px-6 sm:py-3 bg-purple-600 hover:bg-purple-800 text-white font-bold rounded-full shadow-lg transition-all duration-200 text-sm sm:text-base">
                            Back to Home
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export async function generateMetadata() {
    return {
        title: "About | SmoothieVerse Platform"
    };
}
