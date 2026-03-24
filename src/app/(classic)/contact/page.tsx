"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-10 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="heading-xxxl text-[var(--zoom-midnight)] mb-4">Contact our sales team</h1>
          <p className="body-lg text-[var(--zoom-gray-500)]">Let us help you find the right Zoom solution for your organization.</p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="pb-20">
        <div className="max-w-[1100px] mx-auto px-6 flex flex-col lg:flex-row gap-16">
          {/* Form */}
          <div className="flex-1">
            {submitted ? (
              <div className="bg-[var(--zoom-blue-light)] border border-[var(--zoom-border)] rounded-2xl p-12 text-center">
                <p className="text-4xl mb-4">✅</p>
                <h3 className="heading-lg text-[var(--zoom-midnight)] mb-2">Thank you!</h3>
                <p className="body-md text-[var(--zoom-gray-500)]">Our sales team will be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block body-sm font-semibold text-[var(--zoom-midnight)] mb-1.5">First Name *</label>
                    <input type="text" required placeholder="John" className="w-full px-4 py-3 border-2 border-[var(--zoom-gray-300)] rounded-xl body-sm focus:outline-none focus:border-[var(--zoom-blue)] transition-colors" />
                  </div>
                  <div>
                    <label className="block body-sm font-semibold text-[var(--zoom-midnight)] mb-1.5">Last Name *</label>
                    <input type="text" required placeholder="Smith" className="w-full px-4 py-3 border-2 border-[var(--zoom-gray-300)] rounded-xl body-sm focus:outline-none focus:border-[var(--zoom-blue)] transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block body-sm font-semibold text-[var(--zoom-midnight)] mb-1.5">Work Email *</label>
                  <input type="email" required placeholder="john@company.com" className="w-full px-4 py-3 border-2 border-[var(--zoom-gray-300)] rounded-xl body-sm focus:outline-none focus:border-[var(--zoom-blue)] transition-colors" />
                </div>
                <div>
                  <label className="block body-sm font-semibold text-[var(--zoom-midnight)] mb-1.5">Phone</label>
                  <input type="tel" placeholder="+1 (555) 123-4567" className="w-full px-4 py-3 border-2 border-[var(--zoom-gray-300)] rounded-xl body-sm focus:outline-none focus:border-[var(--zoom-blue)] transition-colors" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block body-sm font-semibold text-[var(--zoom-midnight)] mb-1.5">Company *</label>
                    <input type="text" required placeholder="Acme Corp" className="w-full px-4 py-3 border-2 border-[var(--zoom-gray-300)] rounded-xl body-sm focus:outline-none focus:border-[var(--zoom-blue)] transition-colors" />
                  </div>
                  <div>
                    <label className="block body-sm font-semibold text-[var(--zoom-midnight)] mb-1.5">Company Size *</label>
                    <select required className="w-full px-4 py-3 border-2 border-[var(--zoom-gray-300)] rounded-xl body-sm focus:outline-none focus:border-[var(--zoom-blue)] transition-colors bg-white">
                      <option value="">Select...</option>
                      <option>1–50</option>
                      <option>51–200</option>
                      <option>201–1,000</option>
                      <option>1,001–5,000</option>
                      <option>5,001+</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block body-sm font-semibold text-[var(--zoom-midnight)] mb-1.5">What are you interested in? *</label>
                  <select required className="w-full px-4 py-3 border-2 border-[var(--zoom-gray-300)] rounded-xl body-sm focus:outline-none focus:border-[var(--zoom-blue)] transition-colors bg-white">
                    <option value="">Select...</option>
                    <option>Zoom Workplace</option>
                    <option>Zoom Phone</option>
                    <option>Zoom Contact Center</option>
                    <option>Zoom Events</option>
                    <option>Full Platform</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block body-sm font-semibold text-[var(--zoom-midnight)] mb-1.5">Tell us more</label>
                  <textarea rows={4} placeholder="What challenges are you looking to solve?" className="w-full px-4 py-3 border-2 border-[var(--zoom-gray-300)] rounded-xl body-sm focus:outline-none focus:border-[var(--zoom-blue)] transition-colors resize-none" />
                </div>
                <button type="submit" className="btn-primary w-full py-3.5 text-base">
                  Submit
                </button>
                <p className="body-xs text-[var(--zoom-gray-500)]">
                  By submitting, you agree to our Privacy Policy and Terms of Service.
                </p>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-[340px] shrink-0">
            <div className="space-y-6">
              {[
                { icon: "📞", title: "Call us", desc: "1-888-ZOOM-US (1-888-366-6487)\nMon–Fri 6AM–6PM PT" },
                { icon: "💬", title: "Live chat", desc: "Chat with sales during business hours." },
                { icon: "✉️", title: "Email", desc: "sales@zoom.us\nResponse within 24 hours." },
                { icon: "🌐", title: "Offices", desc: "San Jose • London • Sydney\nSingapore • Tokyo • Bangalore" },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--zoom-blue-light)] flex items-center justify-center text-lg shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="body-sm font-semibold text-[var(--zoom-midnight)]">{item.title}</h4>
                    <p className="body-xs text-[var(--zoom-gray-500)] whitespace-pre-line">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[var(--zoom-gray-100)] rounded-2xl p-6 mt-8">
              <h4 className="body-sm font-semibold text-[var(--zoom-midnight)] mb-2">Looking for support?</h4>
              <p className="body-xs text-[var(--zoom-gray-500)] mb-3">If you&apos;re an existing customer, visit our help center.</p>
              <Link href="/" className="body-sm font-semibold text-[var(--zoom-blue)] hover:underline">
                Go to Help Center →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
