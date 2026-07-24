"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function FlagshipSystemsSection() {
  const projects = [
    {
      title: "Unified E-Waste Management Platform (UEMP)",
      description: "An intelligent digital system to streamline device lifecycle tracking and recycling, promoting a circular economy.",
      tags: ["React", "Firebase", "Gemini AI", "Node.js"],
      status: "Award-winning",
    },
    {
      title: "Govind",
      description: "A localized inventory and resource management system for optimizing regional municipal asset allocation logs.",
      tags: ["React", "JavaScript", "Node.js"],
      status: "Public",
    },
    {
      title: "PII Detection & Redaction Tool",
      description: "A secure, desktop-based Python application designed to automatically detect and redact sensitive Personally Identifiable Information (PII) from PDFs.",
      tags: ["Python", "NLP", "PyMuPDF", "Data Privacy"],
      status: "Public",
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
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12"
        >
          <div>
            <p className="text-primary font-mono text-sm tracking-wider uppercase mb-4">Flagship Systems</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Featured Projects
            </h2>
          </div>
          <Link 
            href="/opera"
            className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-2 transition-colors hover:translate-x-1 transition-transform"
          >
            View all projects
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
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <Link 
                href="/opera"
                className="group block p-6 h-full rounded-xl bg-card border border-border hover:border-primary/50 transition-colors duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                    {project.status}
                  </span>
                  <svg className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
