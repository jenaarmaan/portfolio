"use client"

import Link from "next/link"
import { motion, useMotionValue, useMotionTemplate } from "framer-motion"

function SpotlightCard({ children, className = "", variants }: { children: React.ReactNode; className?: string; variants?: any }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden rounded-xl bg-card border border-border transition-colors duration-300 hover:border-primary/20 cursor-pointer ${className}`}
    >
      {/* Background radial highlight */}
      <motion.div
        className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              250px circle at ${mouseX}px ${mouseY}px,
              oklch(0.75 0.15 180 / 0.08),
              transparent 80%
            )
          `,
        }}
      />
      {/* Border radial highlight */}
      <motion.div
        className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          border: "1px solid oklch(0.75 0.15 180 / 0.45)",
          maskImage: useMotionTemplate`
            radial-gradient(
              250px circle at ${mouseX}px ${mouseY}px,
              black,
              transparent 80%
            )
          `,
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              250px circle at ${mouseX}px ${mouseY}px,
              black,
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10 p-6 h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  )
}

export function HackathonHighlightsSection() {
  const hackathons = [
    {
      name: "GDG Build with AI 2025",
      project: "Unified E-Waste Management Platform",
      result: "Top 105 Finalist",
    },
    {
      name: "KodiKon 4.0",
      project: "FinAura — Personal Finance Platform",
      result: "1st Runner-Up",
    },
    {
      name: "Microsoft AI Skills Fest",
      project: "Generative AI & Copilot Integration",
      result: "Participant",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  }

  return (
    <section className="py-24 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12"
        >
          <div>
            <p className="text-primary font-mono text-sm tracking-wider uppercase mb-4">Hackathons</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Competition Wins
            </h2>
          </div>
          <Link 
            href="/arena"
            className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-2 transition-colors hover:translate-x-1 transition-transform"
          >
            All hackathons
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {hackathons.map((hack, index) => (
            <SpotlightCard 
              key={index}
              variants={cardVariants}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-primary text-primary-foreground">
                  {hack.result}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">{hack.name}</h3>
              <p className="text-muted-foreground text-sm">{hack.project}</p>
            </SpotlightCard>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
