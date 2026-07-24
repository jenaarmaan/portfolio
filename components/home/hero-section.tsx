"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function HeroSection() {
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

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
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
            <div className="text-center group cursor-pointer">
              <p className="text-2xl sm:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">15+</p>
              <p className="text-sm">Projects Built</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center group cursor-pointer">
              <p className="text-2xl sm:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">1+</p>
              <p className="text-sm">Hackathons Won</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center group cursor-pointer">
              <p className="text-2xl sm:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">1+</p>
              <p className="text-sm">Patent Publication</p>
            </div>
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
