"use client";
import React from 'react'
import Image from 'next/image';
import Aos from 'aos';
import "aos/dist/aos.css";
import { toast } from "react-toastify";
import { useEffect, useState } from 'react';


export default function Support() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      toast.success("Message sent successfully ✅");

      // ✅ Clear form
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message ❌");
    } finally {
      // 🔥 ALWAYS runs (success or error)
      setLoading(false);
    }
  };






  useEffect(() => {
    Aos.init();
  }, []);
  return (

    <main>
      <section id='support' className='w-full bg-blue-500  p-3 overflow-hidden scroll-mt-60 pb-5'>
        <h1 className='text-center text-3xl text-white font-bold' data-aos="fade-up">Get In Touch</h1>

        <div className='max-w-3xl mx-auto mt-9 '>

          {loading && (
            <div className="w-full h-1 bg-gray-200 rounded overflow-hidden">
              <div className="h-full bg-blue-600 animate-pulse w-full"></div>
            </div>
          )}

          <form className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-lg" onSubmit={handleSubmit} data-aos="flip-left">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 outline-blue-500" placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 outline-blue-500" placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>

            <div>
              <label htmlFor="number" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input type="tel" id="number" name="phone" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 outline-blue-500" placeholder="Your Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows={4} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 outline-blue-500" placeholder="Your Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`${loading
                  ? "bg-blue-300 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
                } text-white font-medium py-2 px-4 rounded-md`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>


          </form>
        </div>
      </section>
    </main>
  )

}
