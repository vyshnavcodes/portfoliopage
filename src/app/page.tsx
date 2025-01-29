'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
  };

  return (
    <main className="min-h-screen bg-black">
      {/* Header Section */}
      <header className="section-padding flex flex-col items-center justify-center min-h-screen relative overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        </div>

        {/* Spotlight Effect */}
        <svg className="animate-spotlight pointer-events-none absolute z-[1] h-[169%] w-[138%] lg:w-[84%] opacity-0 -top-40 left-0 md:left-60 md:-top-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3787 2842" fill="none">
          <g filter="url(#filter)">
            <ellipse cx="1924.71" cy="273.501" rx="1924.71" ry="273.501" transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)" fill="white" fillOpacity="0.21"></ellipse>
          </g>
          <defs>
            <filter id="filter" x="0.860352" y="0.838989" width="3785.16" height="2840.26" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
              <feGaussianBlur stdDeviation="151" result="effect1_foregroundBlur_1065_8"></feGaussianBlur>
            </filter>
          </defs>
        </svg>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center relative z-10"
        >
          <div className="w-40 h-40 rounded-full mx-auto mb-8 overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 p-1">
            <div className="w-full h-full rounded-full overflow-hidden">
              <Image 
                src="/1734946926837.jpg"
                alt="Profile"
                width={160}
                height={160}
                priority
                unoptimized
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">Vyshnav</h1>
          <p className="text-xl text-gray-300 mb-12">Product Marketer</p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-2xl mx-auto space-y-4"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-blue-600">
              Quality Content.
            </h2>
            <h2 className="text-3xl md:text-5xl font-bold text-blue-600">
              Sustainable Results.
            </h2>
            <p className="text-lg text-gray-300 mt-6">
              I produce editorial content that gets brands ranked on Google.
              <br />
              <span className="text-gray-400 text-base">
                I&apos;m a full-time product marketer who takes freelance gigs for the love of writing 😊
              </span>
            </p>
          </motion.div>
        </motion.div>
      </header>

      {/* Work Samples Section */}
      <section className="section-padding pt-0 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12 gradient-text"
          >
            Work Samples
          </motion.h2>
          
          {/* Blog Posts Row */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* TOFU Blog */}
            <motion.a
              href="https://www.selectsoftwarereviews.com/blog/measure-employee-engagement"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden flex flex-col rounded-2xl bg-zinc-900/50 border border-zinc-800 p-8 hover:bg-zinc-900/70 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700">TOFU Blog</h3>
              <p className="text-gray-300 mb-4 flex-grow">Guide on measuring employee engagement effectively.</p>
              <span className="text-blue-400 group-hover:text-blue-300 flex items-center gap-2">
                Read More →
              </span>
            </motion.a>

            {/* MOFU Blog */}
            <motion.a
              href="https://www.bindbee.dev/blog/bamboohr-api"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative overflow-hidden flex flex-col rounded-2xl bg-zinc-900/50 border border-zinc-800 p-8 hover:bg-zinc-900/70 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700">MOFU Blog</h3>
              <p className="text-gray-300 mb-4 flex-grow">Technical deep-dive into BambooHR API integration.</p>
              <span className="text-blue-400 group-hover:text-blue-300 flex items-center gap-2">
                Read More →
              </span>
            </motion.a>

            {/* BOFU Blog */}
            <motion.a
              href="https://vocalvideo.com/resources/videoask-alternative/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative overflow-hidden flex flex-col rounded-2xl bg-zinc-900/50 border border-zinc-800 p-8 hover:bg-zinc-900/70 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700">BOFU Blog</h3>
              <p className="text-gray-300 mb-4 flex-grow">Comparison of video messaging solutions for businesses.</p>
              <span className="text-blue-400 group-hover:text-blue-300 flex items-center gap-2">
                Read More →
              </span>
            </motion.a>
          </div>

          {/* Content Types Row */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Landing Page */}
            <motion.a
              href="https://senja.io/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden flex flex-col rounded-2xl bg-zinc-900/50 border border-zinc-800 p-8 hover:bg-zinc-900/70 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700">Landing Page</h3>
              <p className="text-gray-300 mb-4 flex-grow">Strategic messaging for SaaS testimonial platform.</p>
              <span className="text-blue-400 group-hover:text-blue-300 flex items-center gap-2">
                View Project →
              </span>
            </motion.a>

            {/* Video Content */}
            <motion.a
              href="https://help.vocalvideo.com/article/16-product-tour"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative overflow-hidden flex flex-col rounded-2xl bg-zinc-900/50 border border-zinc-800 p-8 hover:bg-zinc-900/70 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700">Video Content</h3>
              <p className="text-gray-300 mb-4 flex-grow">Product tour content for video testimonial platform.</p>
              <span className="text-blue-400 group-hover:text-blue-300 flex items-center gap-2">
                View Project →
              </span>
            </motion.a>

            {/* Product Copy */}
            <motion.a
              href="https://convin.ai/why-convin"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative overflow-hidden flex flex-col rounded-2xl bg-zinc-900/50 border border-zinc-800 p-8 hover:bg-zinc-900/70 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700">Product Copy</h3>
              <p className="text-gray-300 mb-4 flex-grow">Product positioning for AI-powered sales enablement.</p>
              <span className="text-blue-400 group-hover:text-blue-300 flex items-center gap-2">
                View Project →
              </span>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-black/30">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 gradient-text">Get in Touch</h2>
          <p className="text-center text-gray-400 mb-12">drop in your requirements briefly, i&apos;ll get back to you as soon as i can 😊</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg bg-zinc-800/50 border border-zinc-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg bg-zinc-800/50 border border-zinc-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-zinc-800/50 border border-zinc-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>

            <a
              href="mailto:vyshnavprakash415@gmail.com"
              className="w-full button flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-700 hover:from-blue-600 hover:to-purple-800"
            >
              <EnvelopeIcon className="w-5 h-5" />
              Send Message
            </a>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-padding text-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center gap-4">
            <a 
              href="https://www.linkedin.com/in/vyshnav-prakash-013749231/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              Connect with me on LinkedIn
            </a>
            <span className="text-gray-600">•</span>
            <a 
              href="/vyshnavresume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              View my Resume
            </a>
          </div>
          <p className="text-gray-400">© {new Date().getFullYear()} Vyshnav. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
