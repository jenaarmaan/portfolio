import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Logos | Discourse & Community",
  description: "Technical leadership, community initiatives, and engagement with the global developer ecosystem.",
}

const initiatives = [
  {
    role: "Google Student Ambassador",
    organization: "Google",
    period: "2024 - 2025",
    description: "Serving as a liaison between Google and the university community, fostering innovation and sharing the latest Google technologies with students.",
    highlights: [
      "Organized technical workshops on AI and Cloud technologies",
      "Mentored students on leveraging Google Developer tools",
      "Facilitated community growth through on-campus events",
    ],
    logo: "G",
  },
  {
    role: "GSoC Ambassador",
    organization: "Google Summer of Code",
    period: "2024 - Present",
    description: "Advocating for open-source development and guiding aspiring developers through the Google Summer of Code program.",
    highlights: [
      "Guided students in finding and contributing to open-source projects",
      "Conducted awareness sessions on the impact of open-source",
      "Supported the local developer community in GSoC applications",
    ],
    logo: "OS",
  },
  {
    role: "GDG Member / Organizer",
    organization: "Google Developer Groups",
    period: "2023 - Present",
    description: "Actively involved in the Google Developer Groups ecosystem, contributing to the local tech community through knowledge sharing and event coordination.",
    highlights: [
      "Contributed to the organization of regional DevFests",
      "Collaborated with industry experts for technical seminars",
      "Supported local developers in mastering modern tech stacks",
    ],
    logo: "GDG",
  },
]

const events = [
  {
    name: "Generative AI Webinar",
    date: "2024",
    type: "Webinar",
    location: "100x Engineers",
    description: "Explored the revolution of image and video creation using prompts and advanced AI tools. Deep dive into FLUX DEV LoRA, Hugging Face, Runway.ml, and Replicate to enhance creative productivity.",
  },
  {
    name: "Google I/O Connect",
    date: "2024",
    type: "Technical Conference",
    location: "Bengaluru, India",
    description: "Engaged with the latest breakthroughs in AI, Mobile, and Web technologies directly from Google experts.",
  },
  {
    name: "Skanray Industrial Visit",
    date: "October 2023",
    type: "Industrial Visit",
    location: "Skanray Technologies, Mysuru",
    description: "Gained insights into healthcare and medical equipment manufacturing, observing the product design pipeline and the scale of industrial operations in a leading medical tech firm.",
  },
  {
    name: "DevFest Regional",
    date: "2023",
    type: "Developer Festival",
    location: "Regional",
    description: "Participated in one of the largest community-led developer events, focusing on practical AI/ML implementations.",
  },
  {
    name: "Open Source Summit",
    date: "2023",
    type: "Technical Seminar",
    location: "Online",
    description: "Explored the future of decentralized development and the evolution of the global open-source ecosystem.",
  },
]

export default function LogosPage() {
  return (
    <div className="min-h-screen py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-4">Logos</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Discourse & Community
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
            A record of my technical leadership, community initiatives, and engagement 
            with the global developer ecosystem. Beyond building systems, I am dedicated 
            to fostering growth and sharing knowledge.
          </p>
        </div>

        {/* Initiatives & Leadership */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-primary" />
            Initiatives & Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {initiatives.map((item, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold mb-6">
                  {item.logo}
                </div>
                <h3 className="text-xl font-bold mb-1">{item.role}</h3>
                <p className="text-primary text-sm font-medium mb-4">{item.organization} · {item.period}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
                <ul className="space-y-2">
                  {item.highlights.map((highlight, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Events & Engagements */}
        <section>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-primary" />
            Events & Engagements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {events.map((event, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl bg-card/50 border border-border"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono text-primary">{event.date}</span>
                    <span className="text-xs text-muted-foreground">·</span>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">{event.type}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{event.name}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{event.location}</p>
                  <p className="text-sm text-muted-foreground/80 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
