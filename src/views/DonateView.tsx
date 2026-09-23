"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, type FormEvent } from "react";
import { motion } from "motion/react";
import {
  Heart,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Sparkles,
  ArrowLeft,
  Download,
  FileText,
  Lock,
  HelpCircle,
  ExternalLink,
  ChevronDown,
  Check,
  Repeat,
  CalendarCheck,
} from "lucide-react";
import confetti from "canvas-confetti";
import {
  DONATION_BANK,
  DONATION_CAUSES,
  DONATION_FAQS,
  DONATION_UPI,
  FOUNDATION_INFO,
  LEGAL_DOCS,
  PAYMENT_METHODS,
} from "@/data";
import { useLanguage } from "@/context/LanguageContext";
import { Icon } from "@/lib/icons";
import { ROUTES } from "@/lib/routes";

/**
 * Client Component for /donate — the whole checkout is interactive.
 * The preselected cause comes from the URL (?cause=education) via useSearchParams,
 * so any page can simply <Link href={donateHref('education')}>.
 */
export function DonateView() {
  const { isHindi, t } = useLanguage();
  const preselectedCause = useSearchParams().get("cause") ?? undefined;

  const [selectedAmount, setSelectedAmount] = useState<number>(1100);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [paymentMethod, setPaymentMethod] = useState<"upi" | "bank" | "card">(
    "upi",
  );

  // Donor details
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [donorPan, setDonorPan] = useState("");
  const [donorPhone, setDonorPhone] = useState("");
  const [donorAddress, setDonorAddress] = useState("");
  const [selectedCause, setSelectedCause] = useState(
    preselectedCause || DONATION_CAUSES[0].id,
  );

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedBank, setCopiedBank] = useState(false);
  const [copiedUpi, setCopiedUpi] = useState(false);
  const [receiptNumber, setReceiptNumber] = useState("");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Active cause configuration & associated tiers
  const activeCause =
    DONATION_CAUSES.find((c) => c.id === selectedCause) || DONATION_CAUSES[0];
  const activeTiers =
    frequency === "monthly" ? activeCause.monthlyTiers : activeCause.tiers;

  const currentAmount = customAmount
    ? parseInt(customAmount) || 0
    : selectedAmount;

  // React to ?cause= changing while the page is open
  useEffect(() => {
    if (preselectedCause) {
      setSelectedCause(preselectedCause);
      const targetCause = DONATION_CAUSES.find(
        (c) => c.id === preselectedCause,
      );
      if (targetCause) {
        const tiers =
          frequency === "monthly"
            ? targetCause.monthlyTiers
            : targetCause.tiers;
        const popular = tiers.find((t) => t.popular) || tiers[1] || tiers[0];
        if (popular) setSelectedAmount(popular.amount);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preselectedCause]);

  const handleCauseChange = (newCauseId: string) => {
    setSelectedCause(newCauseId);
    setCustomAmount("");
    const targetCause =
      DONATION_CAUSES.find((c) => c.id === newCauseId) || DONATION_CAUSES[0];
    const tiers =
      frequency === "monthly" ? targetCause.monthlyTiers : targetCause.tiers;
    const popularTier = tiers.find((t) => t.popular) || tiers[1] || tiers[0];
    if (popularTier) {
      setSelectedAmount(popularTier.amount);
    }
  };

  const handleFrequencyChange = (newFreq: "once" | "monthly") => {
    setFrequency(newFreq);
    setCustomAmount("");
    const tiers =
      newFreq === "monthly" ? activeCause.monthlyTiers : activeCause.tiers;
    const popularTier = tiers.find((t) => t.popular) || tiers[1] || tiers[0];
    if (popularTier) {
      setSelectedAmount(popularTier.amount);
    }
  };

  // Find exact impact description of currently selected tier
  const matchedTier = activeTiers.find((t) => t.amount === currentAmount);
  const activeImpactDesc = matchedTier
    ? matchedTier.impact
    : `Directly funds on-ground operations of ${isHindi ? activeCause.hindiName : activeCause.name}`;

  // 80G calculations for One-Time
  const taxDeductionAmount = Math.round(currentAmount * 0.5);
  // Assuming standard 30% tax bracket + 4% cess (~31.2%)
  const estimatedTaxSaved = Math.round(taxDeductionAmount * 0.312);
  const effectiveCost = Math.max(0, currentAmount - estimatedTaxSaved);

  // 80G calculations for Monthly (Annualized 12-Month Impact & Tax Exemption)
  const annualAmount = currentAmount * 12;
  const annualTaxDeductionAmount = Math.round(annualAmount * 0.5);
  const annualEstimatedTaxSaved = Math.round(annualTaxDeductionAmount * 0.312);
  const annualEffectiveCost = Math.max(
    0,
    annualAmount - annualEstimatedTaxSaved,
  );
  const monthlyEffectiveCost = Math.round(annualEffectiveCost / 12);

  const handleDonateSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!currentAmount || currentAmount <= 0) return;

    // Generate unique provisional receipt number
    const generatedReceipt = `JPF-80G-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
    setReceiptNumber(generatedReceipt);

    // Celebratory confetti burst
    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.5 },
      colors: ["#d4af37", "#ffd700", "#c29b38", "#0a2540", "#ffffff"],
    });

    setIsSubmitted(true);
    window.scrollTo({ top: 120, behavior: "smooth" });
  };

  const copyBankDetails = () => {
    const details = [
      ...DONATION_BANK.fields.map(
        (field) => `${field.copyLabel}: ${field.value}`,
      ),
      `Purpose: ${DONATION_BANK.purpose}`,
    ].join("\n");
    navigator.clipboard.writeText(details);
    setCopiedBank(true);
    setTimeout(() => setCopiedBank(false), 2500);
  };

  const copyUpiId = () => {
    navigator.clipboard.writeText(DONATION_UPI.vpa);
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 2500);
  };

  const upiIntentUrl = `upi://pay?pa=${DONATION_UPI.vpa}&pn=${encodeURIComponent(DONATION_UPI.payeeName)}&am=${currentAmount}&cu=INR&tn=${DONATION_UPI.note}`;

  return (
    <div className="w-full bg-[#fbf9f4] dark:bg-[#071324] transition-colors duration-300 min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Breadcrumb / Back Link */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            href={ROUTES.home}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-[#a47b1e] dark:hover:text-amber-400 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t("Back to Home", "होम पेज पर वापस जाएं")}</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 dark:bg-amber-400/10 text-amber-800 dark:text-amber-300 border border-amber-300/30">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>Section 80G Tax Exempted (50% Benefit)</span>
          </div>
        </div>

        {/* Hero Banner Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-amber-500/15 via-yellow-500/20 to-amber-500/15 text-[#8d6916] dark:text-amber-300 border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>
              {isHindi
                ? "प्रत्यक्ष सहयोग एवं दान"
                : "Direct Grassroots Contribution"}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            {isHindi ? (
              <>
                छोटे कदम,{" "}
                <span className="text-[#a47b1e] dark:text-amber-400">
                  बड़ा बदलाव।
                </span>
              </>
            ) : (
              <>
                Empower Lives with{" "}
                <span className="text-[#a47b1e] dark:text-amber-400">
                  Direct Impact
                </span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            {isHindi
              ? "आपकी छोटी सी सहायता किसी होनहार बालिका को डिजिटल लैपटॉप दिला सकती है या किसी जरूरतमंद परिवार को निःशुल्क प्राथमिक चिकित्सा। 100% पारदर्शी, 80G कर-मुक्त व सीधा जमीनी प्रभाव।"
              : "Every contribution fuels on-ground change without middlemen. Sponsor digital laptops, free medical screening camps, or women self-reliance kits with verified Section 80G tax benefits."}
          </p>
        </div>

        {/* If submitted, show the official 80G receipt screen */}
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-3xl mx-auto bg-white dark:bg-[#0c2242] border border-amber-300/60 dark:border-amber-400/30 rounded-3xl p-6 sm:p-10 shadow-xl space-y-8"
          >
            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-600 dark:text-emerald-400 shadow-md">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                {isHindi
                  ? "हार्दिक धन्यवाद एवं आभार!"
                  : `Dhanyawaad, ${donorName || "Generous Supporter"}!`}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
                {isHindi
                  ? `आपकी ₹${currentAmount.toLocaleString("en-IN")} की सहयोग राशि सफलतापूर्वक दर्ज कर ली गई है। आपका यह योगदान जरूरतमंदों के जीवन में सीधा बदलाव लाएगा।`
                  : `Your contribution of ₹${currentAmount.toLocaleString("en-IN")} has been registered. An official copy of your 80G receipt has been dispatched to ${donorEmail || "your email"}.`}
              </p>
            </div>

            {/* Official Provisional 80G Certificate Preview Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#fdfbf7] dark:bg-[#08182e] border-2 border-dashed border-amber-300 dark:border-amber-400/40 font-mono text-xs sm:text-sm text-slate-800 dark:text-slate-200 space-y-4 shadow-sm relative overflow-hidden">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-amber-200 dark:border-slate-700 pb-4 gap-2">
                <div>
                  <span className="font-bold text-base text-slate-900 dark:text-white tracking-wide block">
                    JANSEVA PRATISHTHAN FOUNDATION
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    Public Charitable Trust • Reg: DEL/TRUST/2026/0809-SSF
                  </span>
                </div>
                <div className="text-left sm:text-right">
                  <span className="inline-block px-2.5 py-1 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 font-bold text-xs uppercase tracking-wider">
                    80G Receipt Confirmed
                  </span>
                  <span className="block text-xs text-slate-500 dark:text-slate-400 mt-1">
                    No: {receiptNumber}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-xs">
                    DONOR NAME:
                  </span>
                  <span className="font-bold text-slate-900 dark:text-white">
                    {donorName || "Supporter"}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-xs">
                    PAN NUMBER:
                  </span>
                  <span className="font-bold text-slate-900 dark:text-white">
                    {donorPan || "PAN ON FILE"}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-xs">
                    CONTRIBUTION FREQUENCY:
                  </span>
                  <span className="font-bold text-amber-700 dark:text-amber-300">
                    {frequency === "monthly"
                      ? "MONTHLY RECURRING SUPPORTER"
                      : "ONE-TIME CONTRIBUTION"}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-xs">
                    {frequency === "monthly"
                      ? "MONTHLY PLEDGE AMOUNT:"
                      : "AMOUNT CONTRIBUTED:"}
                  </span>
                  <span className="font-bold text-emerald-700 dark:text-emerald-400 text-base">
                    ₹{currentAmount.toLocaleString("en-IN")}{" "}
                    {frequency === "monthly" && (
                      <span className="text-xs font-normal">
                        / month (Annual: ₹{annualAmount.toLocaleString("en-IN")}
                        )
                      </span>
                    )}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-xs">
                    {frequency === "monthly"
                      ? "ANNUAL 80G DEDUCTION (12 MOS):"
                      : "80G DEDUCTION ELIGIBLE:"}
                  </span>
                  <span className="font-bold text-slate-900 dark:text-white">
                    ₹
                    {(frequency === "monthly"
                      ? annualTaxDeductionAmount
                      : taxDeductionAmount
                    ).toLocaleString("en-IN")}{" "}
                    (50%)
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-xs">
                    DATE OF ISSUE:
                  </span>
                  <span className="font-bold text-slate-900 dark:text-white">
                    {new Date().toLocaleDateString("en-IN")}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-xs">
                    80G UNIQUE REG ORDER:
                  </span>
                  <span className="font-bold text-slate-900 dark:text-white">
                    AAATS1234PF20262
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-xs">
                    SECTION 12A REG NO:
                  </span>
                  <span className="font-bold text-slate-900 dark:text-white">
                    AAATS1234PE20261
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-xs">
                    ALLOCATED MISSION:
                  </span>
                  <span className="font-bold text-slate-900 dark:text-white">
                    {isHindi ? activeCause.hindiName : activeCause.name}
                  </span>
                </div>
                <div className="sm:col-span-2">
                  <span className="text-slate-500 dark:text-slate-400 block text-xs">
                    COMMITTED TANGIBLE IMPACT:
                  </span>
                  <span className="font-bold text-amber-800 dark:text-amber-300">
                    "{activeImpactDesc}"
                  </span>
                </div>
              </div>

              <div className="border-t border-amber-200 dark:border-slate-700 pt-3 text-[11px] text-slate-500 dark:text-slate-400">
                * This document serves as provisional verification of your
                contribution under Section 80G of the Income Tax Act, 1961. The
                final CBDT Form 10BE filing certificate will be dispatched to{" "}
                {donorEmail || "your registered email"} prior to annual
                statutory deadlines.
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => window.print()}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:bg-slate-800 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Print / Save 80G Receipt</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setDonorName("");
                  setDonorEmail("");
                  setDonorPan("");
                  setDonorPhone("");
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm bg-amber-100 text-amber-950 dark:bg-amber-400/20 dark:text-amber-200 hover:bg-amber-200 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4" />
                <span>Make Another Contribution</span>
              </button>
            </div>
          </motion.div>
        ) : (
          /* Main 2-Column Donation Console Layout */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Left Column: Interactive Donation Form (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-white dark:bg-[#0c2242] border border-slate-200/90 dark:border-amber-400/25 rounded-3xl p-6 sm:p-8 shadow-sm">
                {/* Frequency Toggle */}
                <div className="mb-4 flex items-center p-1.5 bg-slate-100 dark:bg-[#08182e] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-inner">
                  <button
                    type="button"
                    onClick={() => handleFrequencyChange("once")}
                    className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                      frequency === "once"
                        ? "bg-white dark:bg-amber-400 text-slate-950 dark:text-slate-950 shadow-md transform scale-[1.01]"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    <span>
                      {isHindi ? "एक बार सहयोग करें" : "One-Time Contribution"}
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleFrequencyChange("monthly")}
                    className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                      frequency === "monthly"
                        ? "bg-white dark:bg-amber-400 text-slate-950 dark:text-slate-950 shadow-md transform scale-[1.01]"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    <Repeat
                      className={`w-3.5 h-3.5 ${frequency === "monthly" ? "text-amber-800 dark:text-slate-950" : "text-slate-500"}`}
                    />
                    <span>
                      {isHindi ? "मासिक समर्थक" : "Monthly Supporter"}
                    </span>
                    <span
                      className={`text-[10px] uppercase font-extrabold px-1.5 py-0.5 rounded-full ${
                        frequency === "monthly"
                          ? "bg-amber-200 text-amber-950 dark:bg-slate-900 dark:text-amber-300"
                          : "bg-amber-200/60 text-amber-900 dark:bg-slate-800 dark:text-amber-300"
                      }`}
                    >
                      5x Impact
                    </span>
                  </button>
                </div>

                {/* Monthly Changemaker Callout Banner (Appears dynamically when Monthly is selected) */}
                {frequency === "monthly" ? (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-amber-500/15 via-amber-400/10 to-emerald-500/10 border border-amber-300/80 dark:border-amber-400/30 flex items-start gap-3.5"
                  >
                    <div className="p-2 rounded-xl bg-amber-400/25 text-amber-950 dark:text-amber-300 shrink-0 mt-0.5">
                      <Repeat className="w-4 h-4" />
                    </div>
                    <div className="text-xs space-y-1">
                      <div className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <span>
                          {isHindi
                            ? "जनसेवा चेंजमेकर सर्कल"
                            : "Janseva Changemaker Circle"}
                        </span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30">
                          Sustained Impact
                        </span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        {isHindi
                          ? "मासिक सहयोग से जरूरतमंद बच्चों की निरंतर पढ़ाई और वृद्धजनों की दवाइयों की आपूर्ति कभी नहीं रुकती। आप इसे कभी भी 1-क्लिक में रोक या बदल सकते हैं।"
                          : "Monthly support ensures our field teachers, student uniforms, and senior citizen medicine supplies run continuously without interruption. You receive quarterly field impact photos and a consolidated annual Form 10BE tax certificate."}
                      </p>
                      <div className="text-[11px] text-emerald-700 dark:text-emerald-400 font-semibold flex items-center gap-1.5 pt-0.5">
                        <Check className="w-3.5 h-3.5" />
                        <span>
                          {isHindi
                            ? "कोई बाध्यता नहीं • कभी भी रोकें या बदलें"
                            : "Zero lock-in • Pause or cancel anytime • 100% Tax Deductible (80G)"}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="mb-6 p-3 rounded-xl bg-slate-50 dark:bg-[#08182e] border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400"
                  >
                    <span className="flex items-center gap-1.5 font-medium">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      {isHindi
                        ? "तत्काल एकमुश्त सहयोग — तुरंत 80G रसीद प्राप्त करें"
                        : "One-time grassroots contribution — Instant 80G tax receipt generated upon payment"}
                    </span>
                    <span className="text-[11px] text-amber-800 dark:text-amber-300 font-semibold hidden sm:inline">
                      Sec 80G Verified
                    </span>
                  </motion.div>
                )}

                <form onSubmit={handleDonateSubmit} className="space-y-6">
                  {/* Step 1: Choose Impact Mission (Focus Area) */}
                  <div id="cause-selection-section" className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-amber-300 flex items-center gap-1.5">
                        <span>
                          1.{" "}
                          {isHindi
                            ? "सहयोग का उद्देश्य चुनें"
                            : "Choose Your Impact Mission"}
                        </span>
                        <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30">
                          Direct Impact
                        </span>
                      </label>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        {DONATION_CAUSES.length}{" "}
                        {isHindi ? "कार्यक्षेत्र" : "Focus Areas"}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-3.5">
                      {DONATION_CAUSES.map((cause) => {
                        const isSelected = selectedCause === cause.id;
                        return (
                          <button
                            key={cause.id}
                            type="button"
                            onClick={() => handleCauseChange(cause.id)}
                            className={`p-3.5 sm:p-4 rounded-2xl text-left border transition-all cursor-pointer relative flex flex-col justify-between group ${
                              isSelected
                                ? "bg-amber-50/90 dark:bg-amber-400/10 border-amber-500 dark:border-amber-400 shadow-sm ring-2 ring-amber-400/30"
                                : "bg-slate-50/80 dark:bg-[#08182e] border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-100/70 dark:hover:bg-slate-800/50"
                            }`}
                          >
                            <div>
                              <div className="flex items-center justify-between gap-2 mb-2.5">
                                <div
                                  className={`p-2 rounded-xl shrink-0 transition-colors ${
                                    isSelected
                                      ? "bg-amber-400 text-slate-950 shadow-sm"
                                      : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 group-hover:text-amber-600"
                                  }`}
                                >
                                  <Icon
                                    name={cause.iconName}
                                    className="w-4 h-4"
                                  />
                                </div>
                                {cause.badge && (
                                  <span
                                    className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shrink-0 whitespace-nowrap ${
                                      isSelected
                                        ? "bg-amber-200 text-amber-950 dark:bg-amber-300/30 dark:text-amber-200"
                                        : "bg-slate-200/80 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                                    }`}
                                  >
                                    {cause.badge}
                                  </span>
                                )}
                              </div>

                              <div className="font-bold text-sm text-slate-900 dark:text-white leading-snug">
                                {isHindi ? cause.hindiName : cause.name}
                              </div>
                            </div>

                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                              {isHindi ? cause.hindiTagline : cause.tagline}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 2: Select Amount (Cause-Tailored Tiers) */}
                  <div className="space-y-3 pt-1">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-amber-300">
                        2.{" "}
                        {frequency === "monthly"
                          ? isHindi
                            ? "मासिक सहयोग राशि चुनें (प्रति माह)"
                            : "Select Monthly Pledge Amount"
                          : isHindi
                            ? "सहयोग राशि चुनें (एकमुश्त)"
                            : "Select Contribution Amount"}
                      </label>
                      <span className="text-xs text-amber-700 dark:text-amber-300 font-semibold flex items-center gap-1.5">
                        <Icon
                          name={activeCause.iconName}
                          className="w-3.5 h-3.5"
                        />
                        <span>
                          {isHindi ? activeCause.hindiName : activeCause.name}
                        </span>
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {activeTiers.map((tier) => {
                        const isSelected =
                          !customAmount && selectedAmount === tier.amount;
                        return (
                          <button
                            type="button"
                            key={tier.amount}
                            onClick={() => {
                              setSelectedAmount(tier.amount);
                              setCustomAmount("");
                            }}
                            className={`p-3.5 rounded-2xl text-left border transition-all relative cursor-pointer flex flex-col justify-between ${
                              isSelected
                                ? "bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-300 text-slate-950 border-amber-400 shadow-md transform -translate-y-0.5"
                                : "bg-slate-50 dark:bg-[#08182e] text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-800 hover:border-amber-300/80 dark:hover:border-amber-400/40"
                            }`}
                          >
                            {tier.popular && (
                              <span className="absolute -top-2 right-2 text-[10px] font-extrabold uppercase tracking-wider bg-rose-600 text-white px-2 py-0.5 rounded-full shadow-sm">
                                {frequency === "monthly"
                                  ? "Most Sustained"
                                  : "Popular"}
                              </span>
                            )}
                            <div className="font-display text-xl font-bold">
                              {tier.label}
                            </div>
                            <div
                              className={`text-xs mt-1.5 line-clamp-2 leading-snug ${
                                isSelected
                                  ? "text-slate-900 font-medium"
                                  : "text-slate-600 dark:text-slate-400"
                              }`}
                            >
                              {tier.impact}
                            </div>
                          </button>
                        );
                      })}

                      {/* Custom Amount Field */}
                      <div className="p-3 rounded-2xl bg-slate-50 dark:bg-[#08182e] border border-slate-200 dark:border-slate-800 flex flex-col justify-center">
                        <span className="text-xs font-semibold text-slate-600 dark:text-amber-300 uppercase tracking-wider">
                          {frequency === "monthly"
                            ? "Custom / mo (₹)"
                            : "Custom (₹)"}
                        </span>
                        <div className="flex items-center mt-1">
                          <span className="font-bold text-slate-900 dark:text-white mr-1 text-base">
                            ₹
                          </span>
                          <input
                            type="number"
                            min={frequency === "monthly" ? 100 : 100}
                            placeholder={
                              frequency === "monthly"
                                ? "e.g. 1500 / mo"
                                : "e.g. 5000"
                            }
                            value={customAmount}
                            onChange={(e) => setCustomAmount(e.target.value)}
                            className="w-full bg-transparent font-bold text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none text-base"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Active Outcome Callout */}
                    <div className="p-3 rounded-xl bg-amber-50/80 dark:bg-amber-400/5 border border-amber-200/80 dark:border-amber-400/20 flex items-start gap-2.5 text-xs">
                      <div className="p-1 rounded bg-amber-400/20 text-amber-800 dark:text-amber-300 shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 dark:text-white">
                          {isHindi
                            ? "इस सहयोग का प्रत्यक्ष परिणाम:"
                            : "Your Tangible Impact Outcome:"}
                        </span>{" "}
                        <span className="text-amber-900 dark:text-amber-200 font-medium">
                          {activeImpactDesc}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Payment Method */}
                  <div className="space-y-3 pt-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-amber-300 block">
                      3.{" "}
                      {isHindi ? "भुगतान विधि चुनें" : "Select Payment Method"}
                    </label>

                    <div className="grid grid-cols-3 gap-2 sm:gap-3">
                      {PAYMENT_METHODS.map((method) => (
                        <button
                          key={method.id}
                          type="button"
                          onClick={() => setPaymentMethod(method.id)}
                          className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                            paymentMethod === method.id
                              ? "bg-amber-400 text-slate-950 border-amber-500 shadow-sm"
                              : "bg-slate-50 dark:bg-[#08182e] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:text-slate-950 dark:hover:text-white"
                          }`}
                        >
                          <Icon name={method.icon} className="w-4 h-4" />
                          <span>{method.label}</span>
                        </button>
                      ))}
                    </div>

                    {/* Method Details Card */}
                    {paymentMethod === "upi" && (
                      <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 dark:bg-[#08182e] border border-amber-200 dark:border-amber-400/20 flex flex-col sm:flex-row items-center gap-5">
                        {/* High Res QR Frame */}
                        <div className="shrink-0 p-3 bg-white rounded-2xl shadow-md border border-slate-200 text-center">
                          <svg
                            viewBox="0 0 100 100"
                            className="w-28 h-28 text-slate-950"
                            fill="currentColor"
                          >
                            <rect x="6" y="6" width="28" height="28" rx="3" />
                            <rect
                              x="11"
                              y="11"
                              width="18"
                              height="18"
                              rx="2"
                              fill="white"
                            />
                            <rect
                              x="15"
                              y="15"
                              width="10"
                              height="10"
                              fill="currentColor"
                            />

                            <rect x="66" y="6" width="28" height="28" rx="3" />
                            <rect
                              x="71"
                              y="11"
                              width="18"
                              height="18"
                              rx="2"
                              fill="white"
                            />
                            <rect
                              x="75"
                              y="15"
                              width="10"
                              height="10"
                              fill="currentColor"
                            />

                            <rect x="6" y="66" width="28" height="28" rx="3" />
                            <rect
                              x="11"
                              y="71"
                              width="18"
                              height="18"
                              rx="2"
                              fill="white"
                            />
                            <rect
                              x="15"
                              y="75"
                              width="10"
                              height="10"
                              fill="currentColor"
                            />

                            <rect x="42" y="12" width="6" height="6" />
                            <rect x="52" y="18" width="6" height="6" />
                            <rect x="42" y="42" width="8" height="8" />
                            <rect x="54" y="42" width="6" height="6" />
                            <rect x="65" y="42" width="6" height="6" />
                            <rect x="76" y="54" width="6" height="6" />
                            <rect x="42" y="65" width="6" height="6" />
                            <rect x="54" y="75" width="6" height="6" />
                            <rect x="65" y="68" width="8" height="8" />
                            <rect x="80" y="80" width="8" height="8" />
                          </svg>
                          <span className="text-[10px] font-bold text-slate-700 uppercase block mt-1 tracking-wider">
                            Scan with Any UPI
                          </span>
                        </div>

                        <div className="space-y-2 flex-1 text-center sm:text-left">
                          <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                            Foundation Verified VPA / UPI ID:
                          </div>
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-mono text-sm font-bold text-slate-900 dark:text-amber-300">
                            <span>{DONATION_UPI.vpa}</span>
                            <button
                              type="button"
                              onClick={copyUpiId}
                              className="p-1 text-xs rounded text-amber-700 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-400/10 transition-colors cursor-pointer"
                              title="Copy UPI ID"
                            >
                              {copiedUpi ? (
                                <Check className="w-3.5 h-3.5 text-emerald-600" />
                              ) : (
                                <Copy className="w-3.5 h-3.5" />
                              )}
                            </button>
                          </div>

                          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            Works with Google Pay, PhonePe, Paytm, BHIM, Cred &
                            bank apps.
                          </p>

                          <div className="pt-1">
                            <a
                              href={upiIntentUrl}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-400 text-slate-950 hover:bg-amber-300 transition-colors shadow-sm"
                            >
                              <span>
                                Open In UPI App (₹
                                {currentAmount.toLocaleString("en-IN")})
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    )}

                    {paymentMethod === "bank" && (
                      <div className="p-5 rounded-2xl bg-amber-50/70 dark:bg-[#08182e] border border-amber-200 dark:border-amber-400/20 space-y-3 text-xs sm:text-sm">
                        <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800 pb-2.5">
                          <span className="font-bold text-slate-900 dark:text-white">
                            {DONATION_BANK.title}
                          </span>
                          <button
                            type="button"
                            onClick={copyBankDetails}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold bg-amber-400 text-slate-950 hover:bg-amber-300 transition-colors cursor-pointer shadow-sm"
                          >
                            <Copy className="w-3 h-3" />
                            <span>
                              {copiedBank
                                ? "Copied Details!"
                                : "Copy Bank Details"}
                            </span>
                          </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono">
                          {DONATION_BANK.fields
                            .filter((field) => !field.hidden)
                            .map((field) => (
                              <div key={field.label}>
                                <span className="text-slate-500 dark:text-slate-400 block text-[11px]">
                                  {field.label}:
                                </span>
                                <span className="font-bold text-slate-900 dark:text-white">
                                  {field.value}
                                </span>
                              </div>
                            ))}
                        </div>
                      </div>
                    )}

                    {paymentMethod === "card" && (
                      <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 dark:bg-[#08182e] border border-amber-200 dark:border-amber-400/20 space-y-2 text-xs text-slate-600 dark:text-slate-400">
                        <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-sm">
                          <Lock className="w-4 h-4 text-emerald-600" />
                          <span>Direct Card / NetBanking Payment Gateway</span>
                        </div>
                        <p className="leading-relaxed">
                          Secure 256-bit encrypted gateway supporting Visa,
                          MasterCard, RuPay, Maestro, and all major Indian
                          NetBanking institutions.
                        </p>
                        <div className="text-[11px] text-emerald-700 dark:text-emerald-400 font-medium pt-1">
                          ✓ Zero transaction fees charged on charitable
                          contributions.
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Step 4: Donor Details for 80G Certificate */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-amber-300">
                        4.{" "}
                        {isHindi
                          ? "दानदाता विवरण (80G रसीद हेतु)"
                          : "Donor Details (For 80G Tax Exemption)"}
                      </label>
                      <span className="text-xs text-rose-600 dark:text-amber-400 font-semibold">
                        * PAN required for 80G
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">
                          Full Name (as per PAN Card) *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Ramesh Chandra Sharma"
                          value={donorName}
                          onChange={(e) => setDonorName(e.target.value)}
                          className="w-full bg-slate-50 dark:bg-[#08182e] text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-2.5 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">
                          Email Address (for instant receipt) *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. ramesh@example.com"
                          value={donorEmail}
                          onChange={(e) => setDonorEmail(e.target.value)}
                          className="w-full bg-slate-50 dark:bg-[#08182e] text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-2.5 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">
                          PAN Card Number *
                        </label>
                        <input
                          type="text"
                          required
                          maxLength={10}
                          placeholder="e.g. ABCDE1234F"
                          value={donorPan}
                          onChange={(e) =>
                            setDonorPan(e.target.value.toUpperCase())
                          }
                          className="w-full bg-slate-50 dark:bg-[#08182e] text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-2.5 text-sm uppercase placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 font-mono"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">
                          Mobile / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={donorPhone}
                          onChange={(e) => setDonorPhone(e.target.value)}
                          className="w-full bg-slate-50 dark:bg-[#08182e] text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-2.5 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                      </div>

                      {/* Allocated Mission Confirmation & Change Trigger */}
                      <div className="sm:col-span-2 p-3.5 rounded-2xl bg-amber-500/10 border border-amber-300/70 dark:border-amber-400/25 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2.5 text-xs">
                          <div className="p-1.5 rounded-lg bg-amber-400/25 text-amber-900 dark:text-amber-300 shrink-0">
                            <Icon
                              name={activeCause.iconName}
                              className="w-4 h-4"
                            />
                          </div>
                          <div>
                            <span className="text-slate-500 dark:text-slate-400 text-[11px] block leading-none mb-0.5">
                              {isHindi
                                ? "सहयोग का चयनित उद्देश्य:"
                                : "Allocated Impact Mission:"}
                            </span>
                            <span className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                              {isHindi
                                ? activeCause.hindiName
                                : activeCause.name}
                            </span>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            const el = document.getElementById(
                              "cause-selection-section",
                            );
                            if (el) el.scrollIntoView({ behavior: "smooth" });
                          }}
                          className="text-xs font-bold text-amber-800 dark:text-amber-300 hover:text-amber-900 dark:hover:text-amber-200 underline cursor-pointer shrink-0"
                        >
                          {isHindi ? "बदलें ↑" : "Change ↑"}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Submit CTA Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-2xl font-bold uppercase tracking-wider text-stone-950 bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-400 hover:from-amber-200 hover:to-yellow-300 shadow-[0_4px_25px_rgba(212,175,55,0.45)] border-none transition-all cursor-pointer flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <Heart className="w-5 h-5 fill-stone-950 text-stone-950" />
                      <span>
                        {frequency === "monthly"
                          ? isHindi
                            ? `प्रति माह ₹${currentAmount.toLocaleString("en-IN")} का सहयोग शुरू करें (${activeCause.hindiName})`
                            : `Start Monthly Pledge of ₹${currentAmount.toLocaleString("en-IN")} / mo • ${activeCause.name}`
                          : isHindi
                            ? `₹${currentAmount.toLocaleString("en-IN")} का सहयोग पूरा करें (${activeCause.hindiName})`
                            : `Complete Contribution of ₹${currentAmount.toLocaleString("en-IN")} • ${activeCause.name}`}
                      </span>
                    </button>
                    <p className="text-center text-xs text-slate-500 dark:text-slate-400 mt-2.5 flex items-center justify-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-emerald-600" />
                      <span>
                        {frequency === "monthly"
                          ? "Recurring Monthly Pledge • Cancel Anytime • Consolidated Annual 80G Certificate"
                          : "256-Bit SSL Encrypted • Direct Bank Transfer • Instant 80G Receipt"}
                      </span>
                    </p>
                  </div>
                </form>
              </div>
            </div>

            {/* Right Column: 80G Tax Savings & Statutory Trust Transparency (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Live 80G Tax Savings Calculator Card */}
              <div className="bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent dark:from-[#0a182c] dark:via-[#0c2242] dark:to-[#0a182c] border border-amber-300/80 dark:border-amber-400/30 rounded-3xl p-6 sm:p-7 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-amber-800 dark:text-amber-300">
                    <ShieldCheck className="w-5 h-5" />
                    <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                      80G Tax Benefit Summary
                    </h3>
                  </div>
                  {frequency === "monthly" && (
                    <span className="text-[10px] font-extrabold uppercase tracking-wide bg-amber-400/20 text-amber-900 dark:text-amber-300 border border-amber-400/30 px-2 py-0.5 rounded-full">
                      12-Month Projection
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {frequency === "monthly"
                    ? "As a Monthly Supporter, your contributions compound over the year. Under Section 80G, 50% of your total donations are deductible from taxable income."
                    : "As per Section 80G of the Indian Income Tax Act 1961, 50% of your donation is deductible from your taxable income."}
                </p>

                {frequency === "monthly" ? (
                  <div className="space-y-2.5 pt-2 border-t border-amber-200/80 dark:border-slate-800 text-xs sm:text-sm">
                    <div className="flex justify-between items-center text-slate-600 dark:text-slate-300">
                      <span>Monthly Pledge:</span>
                      <span className="font-bold text-slate-900 dark:text-white font-mono text-base">
                        ₹{currentAmount.toLocaleString("en-IN")}{" "}
                        <span className="text-xs font-normal text-slate-500">
                          / month
                        </span>
                      </span>
                    </div>

                    <div className="flex justify-between items-center text-slate-600 dark:text-slate-300">
                      <span className="font-semibold text-slate-800 dark:text-slate-200">
                        12-Month Annual Contribution:
                      </span>
                      <span className="font-bold text-slate-900 dark:text-white font-mono">
                        ₹{annualAmount.toLocaleString("en-IN")}{" "}
                        <span className="text-xs font-normal text-slate-500">
                          / year
                        </span>
                      </span>
                    </div>

                    <div className="flex justify-between items-center text-slate-600 dark:text-slate-300">
                      <span>Annual 50% 80G Deduction:</span>
                      <span className="font-bold text-amber-700 dark:text-amber-300 font-mono">
                        ₹{annualTaxDeductionAmount.toLocaleString("en-IN")}
                      </span>
                    </div>

                    <div className="flex justify-between items-center text-slate-600 dark:text-slate-300">
                      <span>Estimated Annual Tax Saved (30% slab):</span>
                      <span className="font-bold text-emerald-700 dark:text-emerald-400 font-mono">
                        ~ ₹{annualEstimatedTaxSaved.toLocaleString("en-IN")}
                      </span>
                    </div>

                    <div className="flex justify-between items-center pt-2 border-t border-amber-200/80 dark:border-slate-800 font-bold text-slate-900 dark:text-white">
                      <span>Net Effective Annual Cost:</span>
                      <div className="text-right">
                        <span className="font-mono text-base text-amber-800 dark:text-amber-300 block">
                          ~ ₹{annualEffectiveCost.toLocaleString("en-IN")}{" "}
                          <span className="text-xs font-normal text-slate-500">
                            / year
                          </span>
                        </span>
                        <span className="text-[11px] font-normal text-emerald-600 dark:text-emerald-400">
                          (Only ~₹{monthlyEffectiveCost.toLocaleString("en-IN")}{" "}
                          / month after 80G benefit)
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2.5 pt-2 border-t border-amber-200/80 dark:border-slate-800 text-xs sm:text-sm">
                    <div className="flex justify-between items-center text-slate-600 dark:text-slate-300">
                      <span>Your Total Contribution:</span>
                      <span className="font-bold text-slate-900 dark:text-white font-mono text-base">
                        ₹{currentAmount.toLocaleString("en-IN")}
                      </span>
                    </div>

                    <div className="flex justify-between items-center text-slate-600 dark:text-slate-300">
                      <span>Eligible 50% Deduction:</span>
                      <span className="font-bold text-amber-700 dark:text-amber-300 font-mono">
                        ₹{taxDeductionAmount.toLocaleString("en-IN")}
                      </span>
                    </div>

                    <div className="flex justify-between items-center text-slate-600 dark:text-slate-300">
                      <span>Estimated Tax Saved (30% slab):</span>
                      <span className="font-bold text-emerald-700 dark:text-emerald-400 font-mono">
                        ~ ₹{estimatedTaxSaved.toLocaleString("en-IN")}
                      </span>
                    </div>

                    <div className="flex justify-between items-center pt-2 border-t border-amber-200/80 dark:border-slate-800 font-bold text-slate-900 dark:text-white">
                      <span>Net Effective Cost to You:</span>
                      <span className="font-mono text-base text-amber-800 dark:text-amber-300">
                        ~ ₹{effectiveCost.toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>
                )}

                {/* Tangible On-Ground Impact Preview */}
                <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-300/80 dark:border-amber-400/25 space-y-1.5">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-extrabold uppercase tracking-wider text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
                      <Icon
                        name={activeCause.iconName}
                        className="w-3.5 h-3.5"
                      />
                      <span>
                        Target Mission:{" "}
                        {isHindi ? activeCause.hindiName : activeCause.name}
                      </span>
                    </span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-400/25 text-amber-950 dark:text-amber-200">
                      Direct Deployment
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-slate-900 dark:text-amber-100 leading-snug">
                    "{activeImpactDesc}"
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white/60 dark:bg-slate-900/60 text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                  {frequency === "monthly" ? (
                    <span>
                      💡 At the close of each financial year, all 12 monthly
                      contributions are compiled into a single consolidated CBDT
                      Form 10BE certificate dispatched to your email for
                      stress-free ITR filing.
                    </span>
                  ) : (
                    <span>
                      💡 Tax benefits are available to all Indian residents,
                      NRIs, and corporate entities paying taxes in India under
                      the Old Tax Regime.
                    </span>
                  )}
                </div>
              </div>

              {/* Statutory Legal Certifications Card */}
              <div className="bg-white dark:bg-[#0c2242] border border-slate-200/90 dark:border-amber-400/25 rounded-3xl p-6 sm:p-7 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-display text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#a47b1e] dark:text-amber-400" />
                    <span>Statutory Trust Registration</span>
                  </h4>
                  <Link
                    href={ROUTES.registration}
                    className="text-xs text-[#a47b1e] dark:text-amber-400 font-bold hover:underline inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Legal Docs</span>
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>

                <div className="space-y-3 text-xs">
                  {LEGAL_DOCS.slice(0, 4).map((doc, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#08182e] border border-slate-100 dark:border-slate-800/80"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-900 dark:text-white">
                          {doc.title}
                        </span>
                        <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-amber-400/15 text-amber-800 dark:text-amber-300">
                          {doc.registrationNumber}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                        {doc.issuingAuthority}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fund Utilization Transparency */}
              <div className="bg-white dark:bg-[#0c2242] border border-slate-200/90 dark:border-amber-400/25 rounded-3xl p-6 sm:p-7 shadow-sm space-y-3">
                <h4 className="font-display text-base font-bold text-slate-900 dark:text-white">
                  {isHindi
                    ? "पारदर्शिता एवं निधि आवंटन"
                    : "Where Your Money Goes"}
                </h4>

                <div className="space-y-2 text-xs">
                  <div>
                    <div className="flex justify-between font-semibold mb-1 text-slate-700 dark:text-slate-300">
                      <span>Direct Grassroots Field Programs</span>
                      <span className="font-bold text-amber-700 dark:text-amber-400">
                        88%
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-amber-500 to-amber-400 h-full w-[88%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between font-semibold mb-1 text-slate-700 dark:text-slate-300">
                      <span>Volunteer Mobilization & Logistics</span>
                      <span className="font-bold text-slate-700 dark:text-slate-300">
                        8%
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-slate-400 h-full w-[8%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between font-semibold mb-1 text-slate-700 dark:text-slate-300">
                      <span>Governance, Audits & Statutory Compliance</span>
                      <span className="font-bold text-slate-700 dark:text-slate-300">
                        4%
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-slate-300 dark:bg-slate-700 h-full w-[4%]" />
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-slate-500 dark:text-slate-400 italic">
                  * Accounts audited annually by independent chartered
                  accountants; reports submitted to the Income Tax Department &
                  Ministry of Corporate Affairs.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FAQs Accordion Section */}
        <div className="mt-16 pt-12 border-t border-slate-200 dark:border-slate-800 max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              {isHindi
                ? "दान एवं कर छूट संबंधित प्रश्न"
                : "Frequently Asked Questions About Donations"}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {isHindi
                ? "80G कर छूट, रसीद और पारदर्शी संचालन से जुड़े आपके मुख्य सवाल"
                : "Everything you need to know about tax exemptions, receipts, and trust governance"}
            </p>
          </div>

          <div className="space-y-3 pt-4">
            {DONATION_FAQS.map((item, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={item.question}
                  className="bg-white dark:bg-[#0c2242] border border-slate-200/90 dark:border-amber-400/20 rounded-2xl overflow-hidden shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-slate-900 dark:text-white cursor-pointer hover:text-[#a47b1e] dark:hover:text-amber-300 transition-colors"
                  >
                    <span>{t(item.question, item.questionHindi)}</span>
                    <ChevronDown
                      className={`w-4 h-4 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-amber-500" : "text-slate-400"}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 pt-3">
                      {t(item.answer, item.answerHindi)}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Need Assistance Card */}
          <div className="p-6 rounded-2xl bg-amber-500/10 dark:bg-slate-900/60 border border-amber-300/40 dark:border-amber-400/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <div className="font-bold text-sm text-slate-900 dark:text-white">
                Have specific queries regarding CSR or large donations?
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                Contact our Donor Relations Desk:{" "}
                {FOUNDATION_INFO.contact.supportEmail} |{" "}
                {FOUNDATION_INFO.contact.phone}
              </div>
            </div>
            <Link
              href={ROUTES.contact}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 text-white dark:bg-amber-400 dark:text-slate-950 hover:opacity-90 transition-opacity cursor-pointer shrink-0"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
