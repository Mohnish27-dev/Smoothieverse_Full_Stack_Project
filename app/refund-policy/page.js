"use client";
import React from "react";

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex flex-col items-center justify-center px-2 py-10 text-white">
      <div className="w-full max-w-2xl bg-black bg-opacity-70 rounded-3xl shadow-2xl p-8 border border-purple-700">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-center text-purple-300 drop-shadow-lg">Cancellation & Refund Policy</h1>
        <p className="mb-6 text-gray-200 text-center text-lg">At <span className="font-bold text-purple-400">Smoothieverse</span>, we value your trust. Please read our cancellation and refund policy below:</p>
        <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2 text-base">
          <li>All payments are final and non-refundable once processed, except in cases of proven fraud or duplicate transactions.</li>
          <li>If you believe a payment was made in error, contact us within 24 hours at <a href="mailto:mohnishpamnani08@gmail.com" className="text-purple-300 underline">support@smoothiverse.com</a>.</li>
          <li>Refunds, if approved, will be processed to the original payment method within 7-10 business days.</li>
          <li>Campaign creators are responsible for fulfilling their promises. Smoothieverse is not liable for campaign outcomes.</li>
        </ul>
        <p className="text-gray-400 text-sm text-center">For any questions or concerns, please contact <a href="mailto:mohnishpamnani08@gmail.com" className="text-purple-300 underline">support@smoothiverse.com</a>.</p>
      </div>
    </div>
  );
}
