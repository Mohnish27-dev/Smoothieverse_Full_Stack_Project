"use client";
import React, { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex flex-col items-center justify-center px-2 py-10 text-white">
      <div className="w-full max-w-xl bg-black bg-opacity-70 rounded-3xl shadow-2xl p-8 border border-purple-700">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-center text-purple-300 drop-shadow-lg">Contact Us</h1>
        <p className="text-lg mb-8 text-center text-gray-200">We'd love to hear from you! Whether you have a question, feedback, or just want to say hi, fill out the form below and we'll get back to you soon.</p>
        {submitted ? (
          <div className="text-center text-green-400 font-bold text-xl py-8">
            Thank you for reaching out! We'll get back to you soon.
          </div>
        ) : (
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="rounded-lg px-4 py-3 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 text-base"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="rounded-lg px-4 py-3 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 text-base"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="rounded-lg px-4 py-3 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 text-base min-h-[120px]"
              value={form.message}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl text-white font-bold py-3 rounded-lg shadow-lg transition-all duration-200 text-lg"
            >
              Send Message
            </button>
          </form>
        )}
        <div className="mt-10 text-center text-gray-400 text-sm">
          Or email us directly at <a href="mailto:mohnishpamnani08@gmail.com" className="text-purple-300 underline">support@smoothiverse.com</a>
        </div>
      </div>
    </div>
  );
}
