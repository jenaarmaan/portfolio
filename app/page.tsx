import Link from "next/link"
import { HeroSection } from "@/components/home/hero-section"
import { WhatIDoSection } from "@/components/home/what-i-do-section"
import { FlagshipSystemsSection } from "@/components/home/flagship-systems-section"
import { ResearchPreviewSection } from "@/components/home/research-preview-section"
import { ExperienceHighlightsSection } from "@/components/home/experience-highlights-section"
import { HackathonHighlightsSection } from "@/components/home/hackathon-highlights-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhatIDoSection />
      <FlagshipSystemsSection />
      <ResearchPreviewSection />
      <ExperienceHighlightsSection />
      <HackathonHighlightsSection />
      <CTASection />
    </div>
  )
}
