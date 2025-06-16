"use client";
import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex flex-col items-center justify-center px-2 py-10 text-white">
      <div className="w-full max-w-2xl bg-black bg-opacity-70 rounded-3xl shadow-2xl p-8 border border-purple-700">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-center text-purple-300 drop-shadow-lg">Privacy Policy</h1>
        <p className="mb-6 text-gray-200 text-center text-lg">Your privacy is important to us at <span className="font-bold text-purple-400">Smoothieverse</span>. This policy explains how we collect, use, and protect your information.</p>
        <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2 text-base">
          <li><span className="font-semibold text-purple-300">Information Collection:</span> We collect only the information you provide when you sign up, make a payment, or contact us.</li>
          <li><span className="font-semibold text-purple-300">Usage:</span> Your data is used solely to provide and improve our services. We never sell your information.</li>
          <li><span className="font-semibold text-purple-300">Security:</span> We use industry-standard security measures to protect your data.</li>
          <li><span className="font-semibold text-purple-300">Third Parties:</span> We do not share your personal information with third parties except as required by law or to process payments securely.</li>
          <li><span className="font-semibold text-purple-300">Cookies:</span> We use cookies to enhance your experience. You can disable cookies in your browser settings.</li>
        </ul>
        <p className="text-gray-400 text-sm text-center">By using Smoothieverse, you agree to this Privacy Policy. For questions, contact <a href="mailto:mohnishpamnani08@gmail.com" className="text-purple-300 underline">support@smoothiverse.com</a>.</p>
      </div>
    </div>
  );
}
