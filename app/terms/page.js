"use client";
import React from "react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex flex-col items-center justify-center px-2 py-10 text-white">
      <div className="w-full max-w-2xl bg-black bg-opacity-70 rounded-3xl shadow-2xl p-8 border border-purple-700">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-center text-purple-300 drop-shadow-lg">Terms & Conditions</h1>
        <p className="mb-6 text-gray-200 text-center text-lg">Welcome to <span className="font-bold text-purple-400">Smoothieverse</span>. By using our platform, you agree to the following terms and conditions:</p>
        <ul className="list-decimal list-inside text-gray-300 mb-6 space-y-2 text-base">
          <li>All users must provide accurate information during registration and payment.</li>
          <li>Funds raised are for the stated purpose only. Misuse may result in account suspension.</li>
          <li>Payments are processed securely via trusted third-party providers.</li>
          <li>We reserve the right to update these terms at any time. Continued use of the platform means you accept the changes.</li>
          <li>Users are responsible for complying with all applicable laws and regulations.</li>
        </ul>
        <p className="text-gray-400 text-sm text-center">For questions about these terms, contact <a href="mailto:mohnishpamnani08@gmail.com" className="text-purple-300 underline">support@smoothiverse.com</a>.</p>
      </div>
    </div>
  );
}
