"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, useMotionValue, useMotionTemplate } from "framer-motion"

export function HeroSection() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [isHovered, setIsHovered] = useState(false)

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  }

  const particles = [
    { size: 4, left: "12%", top: "18%", duration: 16, delay: 0 },
    { size: 6, left: "28%", top: "42%", duration: 24, delay: -4 },
    { size: 3, left: "38%", top: "82%", duration: 18, delay: -2 },
    { size: 5, left: "58%", top: "12%", duration: 20, delay: -8 },
    { size: 7, left: "68%", top: "58%", duration: 28, delay: -6 },
    { size: 4, left: "82%", top: "32%", duration: 22, delay: -10 },
    { size: 5, left: "18%", top: "72%", duration: 26, delay: -3 },
    { size: 3, left: "88%", top: "78%", duration: 15, delay: -5 },
  ]

  return (
    <section 
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden cursor-default"
    >
      {/* Background radial highlight matching cursor */}
      <motion.div
        className="absolute inset-0 opacity-0 pointer-events-none transition-opacity duration-500"
        animate={{ opacity: isHovered ? 1 : 0 }}
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              oklch(0.75 0.15 180 / 0.07),
              transparent 80%
            )
          `,
        }}
      />

      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
      
      {/* Ambient drifting blobs */}
      <motion.div 
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.08, 1],
          opacity: [0.7, 0.9, 0.7],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" 
      />
      <motion.div 
        animate={{
          y: [0, 20, 0],
          scale: [1, 0.92, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" 
      />
      
      {/* Interactive Floating Particle Nodes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, idx) => (
          <motion.div
            key={idx}
            className="absolute rounded-full bg-primary/15"
            style={{
              width: p.size,
              height: p.size,
              left: p.left,
              top: p.top,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 15, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="space-y-8">
          <motion.div variants={itemVariants} className="space-y-4">
            <p className="text-primary font-mono text-sm tracking-wider uppercase">AI/ML Engineer & Systems Builder</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
              Building intelligent systems
              <br />
              <span className="text-primary">that shape tomorrow</span>
            </h1>
          </motion.div>
          
          <motion.p variants={itemVariants} className="mx-auto max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed text-pretty">
            Crafting AI-powered solutions at the intersection of research and production. 
            Turning complex problems into elegant, scalable systems.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link 
              href="/opera"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200"
            >
              View Projects
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link 
              href="/signal"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-colors hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200"
            >
              Get in Touch
            </Link>
          </motion.div>
          
          <motion.div variants={itemVariants} className="pt-12 flex items-center justify-center gap-8 text-muted-foreground">
            <motion.div 
              whileHover={{ scale: 1.05, y: -4 }}
              className="text-center group cursor-pointer p-4 rounded-xl bg-card/20 border border-transparent hover:border-border hover:bg-card/50 transition-all duration-300"
            >
              <p className="text-2xl sm:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">15+</p>
              <p className="text-sm">Projects Built</p>
            </motion.div>
            <div className="w-px h-12 bg-border align-self-center" />
            <motion.div 
              whileHover={{ scale: 1.05, y: -4 }}
              className="text-center group cursor-pointer p-4 rounded-xl bg-card/20 border border-transparent hover:border-border hover:bg-card/50 transition-all duration-300"
            >
              <p className="text-2xl sm:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">1+</p>
              <p className="text-sm">Hackathons Won</p>
            </motion.div>
            <div className="w-px h-12 bg-border align-self-center" />
            <motion.div 
              whileHover={{ scale: 1.05, y: -4 }}
              className="text-center group cursor-pointer p-4 rounded-xl bg-card/20 border border-transparent hover:border-border hover:bg-card/50 transition-all duration-300"
            >
              <p className="text-2xl sm:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">1+</p>
              <p className="text-sm">Patent Publication</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg className="w-6 h-6 text-muted-foreground" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
