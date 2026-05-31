"use client";

import React, { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        // Simulate API call - Replace with your backend route action
        setTimeout(() => {
            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
        }, 1200);
    };

    return (
        <main className="min-h-screen bg-black text-white p-6 md:p-12 flex flex-col justify-center items-center font-mono">
            <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 border border-white p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] bg-black">

                {/* Left Column: Context & Direct Reach */}
                <div className="flex flex-col justify-between space-y-8">
                    <div>
            <span className="text-xs font-bold tracking-widest uppercase bg-white text-black px-2 py-0.5">
              // Availability: Open for Work
            </span>
                        <h1 className="text-4xl md:text-5xl font-black uppercase mt-4 tracking-tight text-white">
                            Get In Touch.
                        </h1>
                        <p className="text-sm text-neutral-400 mt-4 leading-relaxed max-w-sm">
                            Have a project in mind, looking for a collaborator, or just want to discuss your web application architecture? Drop a message.
                        </p>
                    </div>

                    {/* Quick Info Block */}
                    <div className="space-y-4 border-t border-white pt-6 text-xs uppercase tracking-wider font-bold">
                        <div>
                            <span className="text-neutral-500 block mb-1">Direct Email</span>
                            <a href="mailto:your.email@domain.com" className="text-sm underline hover:bg-white hover:text-black p-0.5 transition-colors text-white">

                            </a>
                        </div>
                        <div>
                            <span className="text-neutral-500 block mb-1">Current Location</span>
                            <p className="text-sm font-black text-white">Delhi, India</p>
                        </div>
                    </div>

                    {/* Social Directory */}
                    <div className="flex flex-wrap gap-3 text-xs uppercase font-bold tracking-tight pt-4">
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="border border-white px-3 py-1.5 hover:bg-white hover:text-black transition-colors text-white">
                            GitHub ↗
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="border border-white px-3 py-1.5 hover:bg-white hover:text-black transition-colors text-white">
                            LinkedIn ↗
                        </a>
                        <a href="https://x.com" target="_blank" rel="noreferrer" className="border border-white px-3 py-1.5 hover:bg-white hover:text-black transition-colors text-white">
                            X / Twitter ↗
                        </a>
                    </div>
                </div>

                {/* Right Column: Interaction Form */}
                <div className="border border-white p-6 bg-neutral-950 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] flex flex-col justify-between">
                    <form onSubmit={handleSubmit} className="space-y-5 text-xs font-bold uppercase tracking-wider">

                        {/* Name Input */}
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="name" className="text-white">Your Name</label>
                            <input
                                id="name"
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="John Doe"
                                className="w-full border border-white rounded-none p-3 text-sm font-sans font-normal placeholder-neutral-600 focus:outline-none focus:bg-black focus:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] transition-all bg-black text-white"
                            />
                        </div>

                        {/* Email Input */}
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="email" className="text-white">Email Address</label>
                            <input
                                id="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="john@example.com"
                                className="w-full border border-white rounded-none p-3 text-sm font-sans font-normal placeholder-neutral-600 focus:outline-none focus:bg-black focus:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] transition-all bg-black text-white"
                            />
                        </div>

                        {/* Message Input */}
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="message" className="text-white">Your Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                required
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                placeholder="Briefly describe your project details..."
                                className="w-full border border-white rounded-none p-3 text-sm font-sans font-normal placeholder-neutral-600 resize-none focus:outline-none focus:bg-black focus:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] transition-all bg-black text-white"
                            />
                        </div>

                        {/* Submit Action Block */}
                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="w-full py-3.5 bg-white text-black text-center hover:bg-neutral-200 disabled:bg-neutral-700 transition-colors cursor-pointer border border-white font-black uppercase text-xs tracking-widest mt-2"
                        >
                            {status === "loading" ? "TRANSMITTING..." : "SEND MESSAGE ↗"}
                        </button>
                    </form>

                    {/* Feedback Toast States */}
                    {status === "success" && (
                        <div className="mt-4 p-3 border border-white bg-black text-white font-bold text-center text-xs uppercase animate-pulse">
                            ✓ Message delivered successfully.
                        </div>
                    )}
                    {status === "error" && (
                        <div className="mt-4 p-3 border border-white bg-red-950 text-red-400 font-bold text-center text-xs uppercase">
                            ⚠ Dispatch failed. Try again.
                        </div>
                    )}
                </div>

            </div>
        </main>
    );
}

