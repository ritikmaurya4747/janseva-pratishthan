"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { TREE_BRANCHES, TREE_GEOMETRY } from "@/data";
import { pillarHref } from "@/lib/routes";

/**
 * Client Component: clicking a ribbon highlights that branch and opens its callout.
 * All geometry (roots, arches, leaves, gems) and all six ribbons are mapped from JSON.
 */
export function TreeOfLife() {
  const [activeBranch, setActiveBranch] = useState<string | null>(
    TREE_BRANCHES[0]?.id ?? null,
  );

  return (
    <div
      id="tree-of-life-showcase"
      className="relative w-full max-w-[620px] mx-auto select-none"
    >
      {/* Background Amber, Royal Blue & Gold Radial Atmosphere Glow */}
      <div className="absolute inset-0 dark:bg-radial dark:from-amber-500/20 dark:via-[#4a0a14]/20 dark:to-transparent bg-radial from-amber-200/40 via-amber-100/20 to-transparent blur-3xl -z-10 pointer-events-none transform scale-110" />

      {/* Floating Constellation Stars */}
      <div className="absolute -top-6 right-6 flex space-x-1.5 opacity-70 pointer-events-none">
        <span className="w-1 h-1 rounded-full bg-amber-300 animate-ping" />
        <span className="w-1.5 h-1.5 rounded-full bg-yellow-200" />
        <span className="w-1 h-1 rounded-full bg-rose-400" />
      </div>

      <svg
        viewBox="0 0 800 680"
        className="w-full h-auto dark:drop-shadow-[0_15px_35px_rgba(0,0,0,0.5)] drop-shadow-[0_8px_20px_rgba(212,175,55,0.12)] filter"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Royal 24k Gold & Platinum Linear Gradient */}
          <linearGradient id="silverTrunk" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="20%" stopColor="#fef08a" />
            <stop offset="50%" stopColor="#eab308" />
            <stop offset="80%" stopColor="#ca8a04" />
            <stop offset="100%" stopColor="#fffbeb" />
          </linearGradient>

          {/* Root Radiant Gold Glow */}
          <linearGradient id="rootGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#d4af37" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ca8a04" stopOpacity="0.35" />
          </linearGradient>

          {/* Sapphire Jewel Gradient */}
          <radialGradient id="sapphireGem" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#bae6fd" />
            <stop offset="40%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#0c4a6e" />
          </radialGradient>

          {/* Emerald Jewel Gradient */}
          <radialGradient id="emeraldGem" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#a7f3d0" />
            <stop offset="40%" stopColor="#059669" />
            <stop offset="100%" stopColor="#064e3b" />
          </radialGradient>

          {/* Amber Gold Jewel Gradient */}
          <radialGradient id="goldGem" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="40%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#78350f" />
          </radialGradient>

          {/* Ruby Jewel Gradient */}
          <radialGradient id="rubyGem" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#fecdd3" />
            <stop offset="40%" stopColor="#e11d48" />
            <stop offset="100%" stopColor="#881337" />
          </radialGradient>

          {/* Soft Drop Glow */}
          <filter
            id="luminousGlow"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter
            id="ambientBackdrop"
            x="-30%"
            y="-30%"
            width="160%"
            height="160%"
          >
            <feGaussianBlur stdDeviation="12" result="blur" />
          </filter>
        </defs>

        {/* ================= ROOTS (COMPASSION) ================= */}
        <g id="roots-system" className="transition-opacity duration-300">
          {TREE_GEOMETRY.roots.map((root) => (
            <path
              key={root.d}
              d={root.d}
              stroke={root.stroke ?? undefined}
              strokeWidth={root.strokeWidth}
              opacity={"opacity" in root ? root.opacity : undefined}
              fill="none"
              strokeLinecap={root.round ? "round" : undefined}
            />
          ))}
        </g>

        {/* Base Label: "COMPASSION" */}
        <g id="label-compassion">
          <rect
            x="345"
            y="642"
            width="170"
            height="26"
            rx="13"
            fill="#071b30"
            stroke="#d4af37"
            strokeWidth="1.5"
            className="filter drop-shadow"
          />
          <text
            x="430"
            y="659"
            textAnchor="middle"
            fill="#fef08a"
            fontSize="12"
            letterSpacing="3"
            fontFamily="var(--font-sans), sans-serif"
            fontWeight="700"
            className="tracking-widest"
          >
            COMPASSION
          </text>
        </g>

        {/* ================= TRUNK (SERVICE) ================= */}
        <g id="trunk-service">
          <path
            d="M 405 470 C 412 430, 412 370, 395 310 C 390 290, 375 270, 350 250
               C 380 260, 410 275, 430 300
               C 450 275, 480 260, 510 250
               C 485 270, 470 290, 465 310
               C 448 370, 448 430, 455 470
               C 440 480, 420 480, 405 470 Z"
            fill="url(#silverTrunk)"
            filter="url(#luminousGlow)"
          />

          <path
            d="M 420 460 C 424 410, 424 350, 416 320"
            stroke="#ffffff"
            strokeWidth="2"
            opacity="0.8"
            fill="none"
          />
          <path
            d="M 440 460 C 436 410, 436 350, 444 320"
            stroke="#ffffff"
            strokeWidth="2"
            opacity="0.8"
            fill="none"
          />
          <path
            d="M 430 465 C 430 415, 430 355, 430 315"
            stroke="#e2e8f0"
            strokeWidth="1.5"
            opacity="0.9"
            fill="none"
          />

          {/* Vertical Label on Trunk: "SERVICE" */}
          <g transform="translate(430, 395)">
            <text
              textAnchor="middle"
              fill="#06222c"
              fontSize="11"
              fontWeight="700"
              letterSpacing="3"
              transform="rotate(-90)"
              className="font-semibold"
            >
              SERVICE
            </text>
          </g>
        </g>

        {/* ================= CANOPY BRANCHES ================= */}
        <g
          id="branches-foliage"
          stroke="url(#silverTrunk)"
          fill="none"
          strokeLinecap="round"
        >
          {TREE_GEOMETRY.branches.map((branch) => (
            <path
              key={branch.d}
              d={branch.d}
              strokeWidth={branch.strokeWidth}
              opacity={"opacity" in branch ? branch.opacity : undefined}
            />
          ))}
        </g>

        {/* ================= SILVER LEAVES ================= */}
        <g id="leaves" fill="#e2e8f0" opacity="0.85">
          {TREE_GEOMETRY.leaves.map((leaf) => (
            <ellipse
              key={`${leaf.cx}-${leaf.cy}`}
              cx={leaf.cx}
              cy={leaf.cy}
              rx={leaf.rx}
              ry={leaf.ry}
              transform={"transform" in leaf ? leaf.transform : undefined}
            />
          ))}
        </g>

        {/* ================= LUMINOUS GEMSTONES ================= */}
        <g id="gemstones">
          {TREE_GEOMETRY.gems.map((gem) => (
            <g key={`${gem.cx}-${gem.cy}`}>
              <circle
                cx={gem.cx}
                cy={gem.cy}
                r={gem.r}
                fill={`url(#${gem.fill})`}
                filter="url(#luminousGlow)"
              />
              {"highlight" in gem && gem.highlight && (
                <circle
                  cx={gem.cx}
                  cy={gem.cy}
                  r={gem.highlight.r}
                  fill="#ffffff"
                  opacity={gem.highlight.opacity}
                />
              )}
            </g>
          ))}
        </g>

        {/* ================= INTERACTIVE BRANCH RIBBONS (6 OFFICIAL FIELDS) ================= */}
        {TREE_BRANCHES.map(({ id, label, color, ribbon }) => (
          <g
            key={id}
            id={ribbon.ribbonId}
            className="cursor-pointer transition-all duration-300 hover:opacity-100 group"
            onClick={() => setActiveBranch(id)}
          >
            <rect
              x={ribbon.x}
              y={ribbon.y}
              width={ribbon.width}
              height="32"
              rx="16"
              fill={activeBranch === id ? "#182b46" : "#071b30"}
              className="filter drop-shadow transition-colors"
            />
            <circle
              cx={ribbon.x + 18}
              cy={ribbon.y + 16}
              r="4.5"
              fill={color}
            />
            <text
              x={ribbon.textX}
              y={ribbon.y + 21}
              textAnchor="middle"
              fill={ribbon.textColor}
              fontSize={ribbon.fontSize}
              fontWeight="700"
              letterSpacing={ribbon.letterSpacing}
              fontFamily="var(--font-sans), sans-serif"
            >
              {label}
            </text>
          </g>
        ))}
      </svg>

      {/* Interactive Cause Callout / Mini Modal when user clicks a branch */}
      {activeBranch && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10 }}
          className="mt-3 p-4 rounded-xl dark:bg-gradient-to-r dark:from-[#0c2242]/95 dark:via-[#230810]/95 dark:to-[#0c2242]/95 dark:text-slate-100 bg-white text-slate-800 border border-transparent hover:border-amber-300/60 backdrop-blur-md shadow-xl text-left"
        >
          {TREE_BRANCHES.filter((b) => b.id === activeBranch).map((b) => (
            <div key={b.id} className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: b.gem }}
                  />
                  <h4 className="text-sm font-bold uppercase tracking-wider dark:text-amber-200 text-amber-900">
                    {b.label} {b.sublabel && `• ${b.sublabel}`}
                  </h4>
                </div>
                <p className="text-sm dark:text-slate-200 text-slate-600 mt-1 font-normal leading-relaxed">
                  {b.short}
                </p>
              </div>
              <Link
                id={`learn-more-${b.id}`}
                href={pillarHref(b.id)}
                className="shrink-0 inline-flex items-center gap-1 text-sm font-semibold px-3 py-1.5 rounded-lg dark:bg-amber-400/20 dark:hover:bg-amber-400/30 dark:text-amber-200 bg-amber-100 hover:bg-amber-200 text-amber-900 border border-transparent hover:border-amber-300/60 transition-colors cursor-pointer"
              >
                Explore Pillar <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
