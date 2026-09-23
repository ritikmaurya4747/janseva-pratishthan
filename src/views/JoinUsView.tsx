"use client";

import { useState, type FormEvent } from "react";
import { Briefcase, CheckCircle2, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { FoundationLogo } from "@/components/FoundationLogo";
import { JOIN_US } from "@/data";
import { Icon } from "@/lib/icons";

type TabId = "volunteer" | "csr" | "ambassador";

/** Client Component for /volunteer: three tabs with their own forms (all options come from joinUs.json). */
export function JoinUsView() {
  const [activeTab, setActiveTab] = useState<TabId>("volunteer");

  // Form State
  const [volName, setVolName] = useState("");
  const [volEmail, setVolEmail] = useState("");
  const [volPhone, setVolPhone] = useState("");
  const [volCity, setVolCity] = useState("");
  const [volArea, setVolArea] = useState(JOIN_US.volunteerAreas[0]);
  const [volAvailability, setVolAvailability] = useState(
    JOIN_US.availabilityOptions[0],
  );
  const [volMessage, setVolMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // CSR Form State
  const [csrCompany, setCsrCompany] = useState("");
  const [csrContact, setCsrContact] = useState("");
  const [csrEmail, setCsrEmail] = useState("");
  const [csrPillar, setCsrPillar] = useState(JOIN_US.csrPillars[0]);
  const [csrBudget, setCsrBudget] = useState(JOIN_US.csrBudgets[1]);
  const [csrSubmitted, setCsrSubmitted] = useState(false);

  const handleVolunteerSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!volName || !volEmail) return;

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });

    setIsSubmitted(true);
  };

  const handleCsrSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!csrCompany || !csrEmail) return;

    confetti({
      particleCount: 60,
      spread: 50,
      origin: { y: 0.6 },
    });

    setCsrSubmitted(true);
  };

  return (
    <div
      id="join-us-page"
      className="min-h-screen dark:bg-[#050e1c] dark:text-slate-100 bg-[#fbf9f4] text-slate-900 py-10 sm:py-12 lg:py-16 w-full max-w-full overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Header Intro */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full dark:bg-linear-to-r dark:from-blue-950 dark:to-[#2c0812] bg-amber-100 text-amber-900 border border-transparent hover:border-amber-300/60 text-xs sm:text-sm font-semibold uppercase tracking-widest shadow-sm">
            <FoundationLogo size="xs" showLabel={false} />
            <span>Join Our Mission</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white text-slate-900 tracking-tight wrap-break-word">
            Stand With Us. Create Grassroots Impact.
          </h1>
          <p className="text-sm sm:text-base dark:text-slate-300 text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Whether you offer your time, professional expertise, or corporate
            CSR allocation, you become an essential branch of our Tree of Life.
          </p>
        </div>

        {/* Pathway Tabs - Fully Responsive & Mobile-Contained */}
        <div className="w-full max-w-full flex justify-center px-1 sm:px-4">
          <div className="w-full max-w-2xl p-1 rounded-2xl dark:bg-[#08182e] bg-slate-200/80 border border-slate-300/60 dark:border-slate-800 shadow-md">
            <div className="grid grid-cols-3 gap-1">
              {JOIN_US.tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as TabId)}
                  className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-1.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer border-none text-center ${
                    activeTab === tab.id
                      ? "bg-linear-to-r from-amber-300 via-yellow-200 to-amber-400 text-slate-950 shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                      : "dark:text-slate-300 text-slate-700 hover:dark:text-white hover:text-slate-950"
                  }`}
                >
                  <Icon
                    name={tab.icon}
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0"
                  />
                  <span className="truncate">
                    <span className="inline sm:hidden">{tab.shortLabel}</span>
                    <span className="hidden sm:inline">{tab.label}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab 1: Volunteer Application */}
        {activeTab === "volunteer" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-2xl dark:bg-linear-to-br dark:from-[#0c2242] dark:to-[#1e0710] bg-white border border-transparent hover:border-amber-300/60 shadow-xl space-y-4">
                <span className="text-sm font-bold uppercase tracking-widest dark:text-amber-300 text-amber-800">
                  Why Volunteer With Us?
                </span>
                <h3 className="font-display text-2xl font-bold dark:text-white text-slate-900">
                  Direct Field Engagement
                </h3>
                <p className="text-sm dark:text-slate-300 text-slate-600 leading-relaxed">
                  We don't keep volunteers behind desks. You will be on the
                  ground distributing laptops, conducting reading circles for
                  young girls, planting urban mini-forests, or assisting doctors
                  during mobile health clinics.
                </p>

                <div className="space-y-2 pt-2 text-sm dark:text-slate-300 text-slate-700">
                  {JOIN_US.volunteerBenefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Volunteer Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl dark:bg-linear-to-br dark:from-[#0c2242] dark:via-[#210810] dark:to-[#0c2242] bg-white border border-slate-200/80 p-6 sm:p-8 shadow-xl">
                {!isSubmitted ? (
                  <form onSubmit={handleVolunteerSubmit} className="space-y-4">
                    <h3 className="font-display text-xl font-bold dark:text-white text-slate-900">
                      Volunteer Application Form
                    </h3>
                    <p className="text-sm dark:text-slate-300 text-slate-600">
                      Fill out this quick form. Our volunteer coordinator will
                      reach out to schedule an orientation.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-bold uppercase dark:text-amber-300 text-amber-800 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={volName}
                          onChange={(e) => setVolName(e.target.value)}
                          placeholder="e.g. Ananya Verma"
                          className="w-full dark:bg-[#08182e] dark:text-white bg-slate-50 text-slate-900 border border-slate-300 rounded-lg px-3 py-2 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-inner"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold uppercase dark:text-amber-300 text-amber-800 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={volEmail}
                          onChange={(e) => setVolEmail(e.target.value)}
                          placeholder="ananya@example.com"
                          className="w-full dark:bg-[#08182e] dark:text-white bg-slate-50 text-slate-900 border border-slate-300 rounded-lg px-3 py-2 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-inner"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold uppercase dark:text-amber-300 text-amber-800 mb-1">
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={volPhone}
                          onChange={(e) => setVolPhone(e.target.value)}
                          placeholder="+91 98765 43210"
                          className="w-full dark:bg-[#08182e] dark:text-white bg-slate-50 text-slate-900 border border-slate-300 rounded-lg px-3 py-2 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-inner"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold uppercase dark:text-amber-300 text-amber-800 mb-1">
                          City / District *
                        </label>
                        <input
                          type="text"
                          required
                          value={volCity}
                          onChange={(e) => setVolCity(e.target.value)}
                          placeholder="e.g. New Delhi / Noida / Gurgaon"
                          className="w-full dark:bg-[#08182e] dark:text-white bg-slate-50 text-slate-900 border border-slate-300 rounded-lg px-3 py-2 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-inner"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-bold uppercase dark:text-amber-300 text-amber-800 mb-1">
                          Primary Area of Interest
                        </label>
                        <select
                          value={volArea}
                          onChange={(e) => setVolArea(e.target.value)}
                          className="w-full dark:bg-[#08182e] dark:text-white bg-slate-50 text-slate-900 border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-inner cursor-pointer"
                        >
                          {JOIN_US.volunteerAreas.map((option) => (
                            <option key={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-bold uppercase dark:text-amber-300 text-amber-800 mb-1">
                          Availability
                        </label>
                        <select
                          value={volAvailability}
                          onChange={(e) => setVolAvailability(e.target.value)}
                          className="w-full dark:bg-[#08182e] dark:text-white bg-slate-50 text-slate-900 border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-inner cursor-pointer"
                        >
                          {JOIN_US.availabilityOptions.map((option) => (
                            <option key={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold uppercase dark:text-amber-300 text-amber-800 mb-1">
                        Tell us briefly about yourself & motivation
                      </label>
                      <textarea
                        rows={3}
                        value={volMessage}
                        onChange={(e) => setVolMessage(e.target.value)}
                        placeholder="Share your skills, previous volunteer experience, or why you wish to join..."
                        className="w-full dark:bg-[#08182e] dark:text-white bg-slate-50 text-slate-900 border border-slate-300 rounded-lg px-3 py-2 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-inner resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider text-stone-950 bg-linear-to-r from-amber-300 via-yellow-200 to-amber-400 hover:from-amber-200 hover:to-yellow-100 shadow-[0_0_20px_rgba(212,175,55,0.4)] border-none transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Submit Volunteer Application</span>
                    </button>
                  </form>
                ) : (
                  <div className="text-center space-y-4 py-8">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-none flex items-center justify-center mx-auto text-emerald-500 shadow-md">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-display text-2xl font-bold dark:text-white text-slate-900">
                      Welcome to the Family, {volName}!
                    </h4>
                    <p className="text-sm dark:text-amber-200 text-amber-800 max-w-md mx-auto">
                      Your volunteer registration for{" "}
                      <span className="dark:text-white text-slate-900 font-semibold">
                        {volArea}
                      </span>{" "}
                      has been received. Our team will contact you via WhatsApp
                      / Email for your orientation.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2 rounded-xl dark:bg-amber-400/20 dark:text-amber-200 bg-amber-100 text-amber-900 border border-transparent hover:border-amber-300/60 text-sm font-semibold hover:bg-amber-200 cursor-pointer"
                    >
                      Submit Another Response
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Corporate CSR */}
        {activeTab === "csr" && (
          <div className="rounded-2xl dark:bg-linear-to-br dark:from-[#0c2242] dark:via-[#210810] dark:to-[#0c2242] bg-white border border-slate-200/80 p-5 sm:p-8 shadow-xl max-w-4xl mx-auto space-y-6">
            <div className="space-y-2 border-none pb-4">
              <span className="text-sm font-bold uppercase tracking-widest dark:text-amber-300 text-amber-800">
                Corporate Social Responsibility
              </span>
              <h3 className="font-display text-2xl font-bold dark:text-white text-slate-900">
                Partner with an MCA CSR-1 Registered Trust
              </h3>
              <p className="text-sm dark:text-slate-300 text-slate-600 leading-relaxed">
                The Janseva Pratishthan Foundation executes high-integrity,
                measurable CSR programs aligned with Schedule VII of the Indian
                Companies Act, 2013. We provide audited utilization
                certificates, baseline/endline impact surveys, and employee
                engagement drives.
              </p>
            </div>

            {!csrSubmitted ? (
              <form onSubmit={handleCsrSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold uppercase dark:text-amber-300 text-amber-800 mb-1">
                      Company / Organization Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={csrCompany}
                      onChange={(e) => setCsrCompany(e.target.value)}
                      placeholder="e.g. Tata Consultancy / InfoTech Ltd"
                      className="w-full dark:bg-[#08182e] dark:text-white bg-slate-50 text-slate-900 border border-slate-300 rounded-lg px-3 py-2 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-inner"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold uppercase dark:text-amber-300 text-amber-800 mb-1">
                      Contact Person & Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={csrContact}
                      onChange={(e) => setCsrContact(e.target.value)}
                      placeholder="e.g. Rajesh Kumar (Head of CSR)"
                      className="w-full dark:bg-[#08182e] dark:text-white bg-slate-50 text-slate-900 border border-slate-300 rounded-lg px-3 py-2 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-inner"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold uppercase dark:text-amber-300 text-amber-800 mb-1">
                      Official Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={csrEmail}
                      onChange={(e) => setCsrEmail(e.target.value)}
                      placeholder="csr@company.com"
                      className="w-full dark:bg-[#08182e] dark:text-white bg-slate-50 text-slate-900 border border-slate-300 rounded-lg px-3 py-2 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-inner"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold uppercase dark:text-amber-300 text-amber-800 mb-1">
                      Proposed CSR Budget Band
                    </label>
                    <select
                      value={csrBudget}
                      onChange={(e) => setCsrBudget(e.target.value)}
                      className="w-full dark:bg-[#08182e] dark:text-white bg-slate-50 text-slate-900 border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-inner cursor-pointer"
                    >
                      {JOIN_US.csrBudgets.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold uppercase dark:text-amber-300 text-amber-800 mb-1">
                    Preferred Focus Pillar
                  </label>
                  <select
                    value={csrPillar}
                    onChange={(e) => setCsrPillar(e.target.value)}
                    className="w-full dark:bg-[#08182e] dark:text-white bg-slate-50 text-slate-900 border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-inner cursor-pointer"
                  >
                    {JOIN_US.csrPillars.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider text-stone-950 bg-linear-to-r from-amber-300 via-yellow-200 to-amber-400 hover:from-amber-200 hover:to-yellow-100 shadow-[0_0_20px_rgba(212,175,55,0.4)] border-none transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Briefcase className="w-4 h-4" />
                  <span>Request CSR Partnership Proposal & Kit</span>
                </button>
              </form>
            ) : (
              <div className="text-center space-y-3 py-6">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                <h4 className="font-display text-xl font-bold dark:text-white text-slate-900">
                  CSR Partnership Request Received
                </h4>
                <p className="text-sm dark:text-amber-200 text-amber-800">
                  Our Trustee & CSR secretariat will connect with {csrContact}{" "}
                  at {csrEmail} within 24 hours.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Youth Ambassadors */}
        {activeTab === "ambassador" && (
          <div className="rounded-2xl dark:bg-linear-to-br dark:from-[#0c2242] dark:via-[#210810] dark:to-[#0c2242] bg-white border border-slate-200/80 p-5 sm:p-8 shadow-xl max-w-4xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <span className="text-sm font-bold uppercase tracking-widest dark:text-amber-300 text-amber-800">
                Next-Gen Leadership
              </span>
              <h3 className="font-display text-2xl font-bold dark:text-white text-slate-900">
                Janseva Pratishthan Youth Ambassador Fellowship
              </h3>
              <p className="text-sm dark:text-slate-300 text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Calling college students, school leaders, and young
                professionals. As a Youth Ambassador, you represent the
                foundation across your campus, host book & stationery drives,
                and lead community awareness campaigns.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {JOIN_US.ambassadorPerks.map((perk) => (
                <div
                  key={perk.title}
                  className="p-4 rounded-xl dark:bg-[#08182e] bg-amber-50/70 border border-transparent hover:border-amber-300/60 text-center space-y-2 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-amber-400/20 text-amber-500 flex items-center justify-center mx-auto">
                    <Icon name={perk.icon} className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm dark:text-white text-slate-900">
                    {perk.title}
                  </h4>
                  <p className="text-sm dark:text-slate-400 text-slate-600">
                    {perk.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center pt-2">
              <button
                onClick={() => setActiveTab("volunteer")}
                className="px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider text-stone-950 bg-linear-to-r from-amber-300 via-yellow-200 to-amber-400 hover:from-amber-200 hover:to-yellow-100 shadow-[0_0_15px_rgba(212,175,55,0.4)] border-none transition-all cursor-pointer"
              >
                Apply for Youth Fellowship (via Volunteer Form)
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
