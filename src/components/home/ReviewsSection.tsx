"use client";

import { useRef, useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Quote,
  Edit3,
  X,
  Sparkles,
  HeartHandshake,
  Award,
} from "lucide-react";
import { REVIEWS } from "@/data";
import type { ReviewItem } from "@/types";

/** Client Component: carousel scroll, review modal and local form state. */
export function ReviewsSection() {
  const [reviews, setReviews] = useState<ReviewItem[]>(REVIEWS.items);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedToast, setSubmittedToast] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Form state
  const [formName, setFormName] = useState("");
  const [formRole, setFormRole] = useState(REVIEWS.roleOptions[0]);
  const [formRating, setFormRating] = useState(5);
  const [formHoverRating, setFormHoverRating] = useState(0);
  const [formTitle, setFormTitle] = useState("");
  const [formComment, setFormComment] = useState("");

  const totalReviews = reviews.length;
  const averageRating = (
    reviews.reduce((acc, r) => acc + r.rating, 0) / totalReviews
  ).toFixed(2);

  const handlePrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -340, behavior: "smooth" });
    }
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 340, behavior: "smooth" });
    }
    setCurrentIndex((prev) => Math.min(reviews.length - 1, prev + 1));
  };

  const handleSubmitReview = (e: FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formComment.trim()) return;

    const newRev: ReviewItem = {
      id: `rev-${Date.now()}`,
      name: formName.trim(),
      role: formRole,
      rating: formRating,
      title: formTitle.trim() || "Remarkable Community Initiative",
      comment: formComment.trim(),
      date: "Just now",
      isVerified: true,
      initiativeTag: "Community Voice",
      avatarColor: "from-amber-500 to-yellow-300",
    };

    setReviews([newRev, ...reviews]);
    setIsModalOpen(false);
    setFormName("");
    setFormTitle("");
    setFormComment("");
    setFormRating(5);
    setSubmittedToast(true);
    setTimeout(() => setSubmittedToast(false), 4000);

    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  return (
    <section
      id="reviews-section"
      className="relative w-full py-20 sm:py-28 bg-[#fbf9f4] dark:bg-[#050e1c] transition-colors duration-300 overflow-hidden"
    >
      {/* Subtle Background Glows matching Foundation Theme */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-amber-400/5 dark:bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-600/5 dark:bg-blue-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-[#996515] dark:text-amber-300 text-sm font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            Voices of Impact
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0c2242] dark:text-amber-100 tracking-tight">
            Reviews & Testimonials
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans">
            Hear firsthand from our students, families, volunteers, and
            grassroots partners whose lives were touched by the Foundation.
          </p>

          {/* Rating Summary Bar */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-slate-700 dark:text-slate-200">
            <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white dark:bg-[#0c2242] shadow-sm border border-slate-200/80 dark:border-amber-400/20">
              <span className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                {averageRating}
              </span>
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-sm text-slate-500 dark:text-slate-400 border-l border-slate-200 dark:border-white/10 pl-2 ml-1 font-medium">
                {totalReviews} Reviews
              </span>
            </div>

            <div className="hidden sm:inline-flex items-center gap-1.5 text-sm text-emerald-700 dark:text-emerald-400 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>100% Verified Community Feedback</span>
            </div>
          </div>
        </div>

        {/* Carousel Navigation Bar (Arrows & Counter) */}
        <div className="flex items-center justify-between mb-6 px-1">
          <span className="text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
            Recent Feedback ({reviews.length})
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous Reviews"
              className="p-2.5 rounded-full bg-white dark:bg-[#0c2242] border border-slate-200/90 dark:border-amber-400/20 shadow-sm hover:shadow-md text-slate-700 dark:text-amber-200 hover:text-amber-600 dark:hover:text-amber-400 hover:border-amber-400/50 transition-all cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Reviews"
              className="p-2.5 rounded-full bg-white dark:bg-[#0c2242] border border-slate-200/90 dark:border-amber-400/20 shadow-sm hover:shadow-md text-slate-700 dark:text-amber-200 hover:text-amber-600 dark:hover:text-amber-400 hover:border-amber-400/50 transition-all cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Track */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scrollbar-none scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {reviews.map((rev) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="min-w-72.5 sm:min-w-85 max-w-85 snap-start flex flex-col justify-between bg-white dark:bg-linear-to-b dark:from-[#0c2242] dark:to-[#081528] rounded-2xl p-6 sm:p-7 border border-slate-200/90 dark:border-amber-400/20 shadow-md hover:shadow-xl dark:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 relative group"
            >
              {/* Background decorative quote watermark */}
              <div className="absolute top-4 right-5 text-slate-100 dark:text-white/4 pointer-events-none group-hover:text-amber-500/10 transition-colors">
                <Quote className="w-12 h-12" />
              </div>

              <div className="space-y-3 relative z-10">
                {/* Category / Initiative Tag & Date Header */}
                <div className="flex items-center justify-between gap-2 min-h-6.5">
                  {rev.initiativeTag && (
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-amber-400/10 border border-amber-400/25 text-[#996515] dark:text-amber-300">
                      {rev.initiativeTag}
                    </span>
                  )}
                  <span className="text-xs text-slate-400 dark:text-slate-500 font-medium ml-auto">
                    {rev.date}
                  </span>
                </div>

                {/* Star Rating - Consistent uniform position and spacing across all cards */}
                <div className="flex items-center gap-1 text-amber-400 drop-shadow-[0_1px_2px_rgba(245,158,11,0.3)]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < rev.rating
                          ? "fill-amber-400 text-amber-400"
                          : "text-slate-300 dark:text-slate-600"
                      }`}
                    />
                  ))}
                </div>

                {/* Review Title */}
                <h3 className="font-sans font-bold text-base text-slate-900 dark:text-white leading-snug line-clamp-2">
                  {rev.title}
                </h3>

                {/* Review Comment Text */}
                <p className="text-sm sm:text-[0.82rem] text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-4">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              {/* Reviewer Profile Footer */}
              <div className="pt-4 mt-5 border-t border-slate-100 dark:border-white/10 flex items-center justify-between relative z-10">
                <div className="flex items-center gap-3">
                  {/* Initials Avatar */}
                  <div
                    className={`w-10 h-8.5 rounded-full bg-linear-to-tr ${rev.avatarColor || "from-amber-400 to-yellow-200"} p-0.5 shadow-sm`}
                  >
                    <div className="w-full h-full rounded-full bg-[#0c2242] text-amber-200 font-bold text-sm flex items-center justify-center">
                      {rev.name.charAt(0)}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="text-sm font-bold text-slate-900 dark:text-white">
                        {rev.name}
                      </p>
                      {rev.isVerified && (
                        <span title="Verified Review">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-tight">
                      {rev.role}
                    </p>
                  </div>
                </div>

                <span className="text-sm text-slate-400 dark:text-slate-500 shrink-0">
                  {rev.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom "Write A Review" Action Button */}
        <div className="text-center pt-8 sm:pt-10">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-[0.14em] text-slate-950 bg-linear-to-r from-amber-400 via-yellow-300 to-amber-500 hover:from-amber-300 hover:to-yellow-200 transition-all cursor-pointer shadow-[0_4px_20px_rgba(212,175,55,0.3)] hover:shadow-[0_6px_25px_rgba(212,175,55,0.5)] hover:-translate-y-0.5 border-none active:scale-95"
          >
            <Edit3 className="w-4 h-4 text-slate-950" />
            <span>Write A Review</span>
          </button>

          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2.5">
            Join 150+ beneficiaries & patrons sharing their experience with
            Janseva Pratishthan Foundation
          </p>
        </div>
      </div>

      {/* Success Toast Notification */}
      <AnimatePresence>
        {submittedToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 right-6 z-50 bg-[#0c2242] text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-amber-400/40 flex items-center gap-3"
          >
            <div className="p-1.5 rounded-full bg-emerald-500/20 text-emerald-400">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-amber-300">
                Thank you for your feedback!
              </p>
              <p className="text-sm text-slate-300">
                Your review has been successfully submitted and added.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Write A Review Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-white dark:bg-[#0c2242] rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-amber-400/30 overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/20 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-1 mb-5">
                <div className="inline-flex items-center gap-1 text-sm font-bold text-[#996515] dark:text-amber-400 uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5" />
                  Your Experience Matters
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                  Write A Review
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-300">
                  Share how Janseva Pratishthan Foundation inspired, helped, or
                  partnered with you.
                </p>
              </div>

              <form onSubmit={handleSubmitReview} className="space-y-4">
                {/* Rating Selection */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-200 mb-1.5">
                    Your Rating *
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormRating(star)}
                        onMouseEnter={() => setFormHoverRating(star)}
                        onMouseLeave={() => setFormHoverRating(0)}
                        className="p-1 cursor-pointer transition-transform hover:scale-110"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= (formHoverRating || formRating)
                              ? "fill-amber-400 text-amber-400"
                              : "text-slate-300 dark:text-slate-600"
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-sm font-bold text-amber-500 ml-2">
                      {formRating}.0 / 5.0
                    </span>
                  </div>
                </div>

                {/* Name & Role */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-200 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="e.g. Varun Patil"
                      className="w-full px-3.5 py-2 rounded-xl text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-200 mb-1">
                      Your Relation / Role
                    </label>
                    <select
                      value={formRole}
                      onChange={(e) => setFormRole(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-amber-400 cursor-pointer"
                    >
                      {REVIEWS.roleOptions.map((role) => (
                        <option key={role} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Review Headline */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-200 mb-1">
                    Review Title / Headline
                  </label>
                  <input
                    type="text"
                    value={formTitle}
                    onChange={(e) => setFormTitle(e.target.value)}
                    placeholder="e.g. Inspiring laptop distribution & youth drive"
                    className="w-full px-3.5 py-2 rounded-xl text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                {/* Review Body */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-200 mb-1">
                    Your Review *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formComment}
                    onChange={(e) => setFormComment(e.target.value)}
                    placeholder="Describe your experience with Janseva Pratishthan Foundation..."
                    className="w-full px-3.5 py-2 rounded-xl text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-amber-400 resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-5 py-2.5 rounded-xl text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl text-sm font-bold uppercase tracking-wider text-slate-950 bg-linear-to-r from-amber-400 to-yellow-300 hover:from-amber-300 hover:to-yellow-200 transition-all cursor-pointer shadow-md"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
