import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Arena | Competitions",
  description: "Participation and achievements in various technical competitions and festivals.",
}

const competitions = [
  {
    name: "GDG Build with AI Solution Challenge 2025",
    date: "2025",
    location: "India (National Level)",
    activity: "Google Solutions Challenge",
    description: "Ranked in the Top 105 out of 3,700+ submissions nationwide. Developed the 'Unified E-Waste Management Platform (UEMP)', a sustainable solution using QR-based tracking to connect manufacturers, consumers, and recyclers for transparent electronics recycling.",
    result: "Top 105 Finalist",
    achievement: "National Level Recognition",
    participants: ["Armaan (Me)", "Arya Gowda", "Parinith R", "Harihar Jeevan"],
    technologies: ["Google Cloud", "Gemini AI", "Vertex AI", "QR Tracking", "Sustainable Tech"],
    learnings: "Mastered the integration of enterprise AI tools like Vertex AI and Gemini to solve complex environmental challenges, while managing high-scale national competition requirements.",
  },
  {
    name: "Microsoft AI Skills Fest",
    date: "May 2025",
    location: "Online",
    activity: "Festival Participation",
    description: "Participated in the Microsoft AI Skills Fest, a comprehensive event focused on the latest advancements in AI, including generative AI, Copilot integration, and AI-driven development. Engaged in hands-on modules and workshops to master modern AI tools.",
    result: "Festival Participation",
    achievement: "Badge Earned",
    participants: ["Individual"],
    technologies: ["Microsoft Copilot", "Generative AI", "Azure AI", "OpenAI"],
    learnings: "Explored the vast landscape of Microsoft's AI ecosystem and learned practical applications for integrating AI into everyday productivity and professional workflows.",
  },
  {
    name: "Symb/IoT Hackathon 2025",
    date: "May 8-9, 2025",
    location: "VVCE, Mysuru",
    activity: "24-Hour Innovation Sprint",
    description: "Collaborated on building innovative, real-world solutions through a time-bound creativity sprint. Engaged with mentors and peers to refine technical prototypes and problem-solving strategies.",
    result: "Participant",
    achievement: "Innovation Sprint Excellence",
    participants: ["Armaan (Me)", "Yashaswini R", "Archana K L", "Shilpa P R"],
    technologies: ["IoT", "Problem Solving", "Rapid Prototyping", "Team Collaboration"],
    learnings: "Deepened my ability to lead and collaborate in high-pressure environments, focusing on the rapid transition from brainstorming to building functional tech solutions.",
  },
  {
    name: "KodiKon 4.0",
    date: "2024",
    location: "PES University, Bangalore",
    activity: "PES University Hackathon",
    description: "Secured the 1st Runner-Up (2nd Place) position in an intense 24-hour sprint. Developed 'FinAura', ideating and building high-impact tech solutions under pressure while competing against talented teams.",
    result: "1st Runner-Up",
    achievement: "Award Winner",
    participants: ["Armaan (Me)", "Harihar Jeevan", "Arya Gowda", "Parinith R"],
    technologies: ["Full-Stack Development", "Ideation", "Collaborative Coding", "Pitching"],
    learnings: "Learned to balance speed and quality in a competitive environment, while effectively pitching complex technical solutions to a panel of expert judges.",
  },
  {
    name: "Symb/IoT Hackathon 2024",
    date: "May 17, 2024",
    location: "VVCE, Mysuru",
    activity: "IoT & Blockchain Hackathon",
    description: "Developed a Blockchain-based Decentralized Voting System incorporating Homomorphic Encryption for privacy-preserving vote computation. Focused on building a secure, transparent, and tamper-proof voting infrastructure.",
    result: "Participant",
    achievement: "Privacy-Preserving Tech Explorer",
    participants: ["Armaan (Me)", "Harihar Jeevan", "Arya Gowda", "Parinith R"],
    technologies: ["Blockchain", "Homomorphic Encryption", "IoT", "Decentralized Systems"],
    learnings: "Refined architecture design under expert mentorship, learning to integrate advanced encryption techniques into decentralized voting systems to ensure both transparency and confidentiality.",
  },
  {
    name: "Innovative Video Creation",
    date: "June 2024",
    location: "Shining Youth Magazine",
    activity: "Creative Video Production",
    description: "Developed and showcased a creative video titled 'The Voices from Nature', focusing on the serene sounds of birds and flowing water. The project served as a platform for expressing technical creativity through multi-modal storytelling.",
    result: "Certificate Awarded",
    achievement: "Participation Excellence",
    participants: ["Individual"],
    technologies: ["Video Editing", "Sound Design", "Nature Cinematography", "Creative Storytelling"],
    learnings: "Learned how to capture and synthesize organic sounds and visuals to create a compelling narrative, focusing on the immersive power of nature-centric media.",
  },
  {
    name: "Mathematics Seminar",
    date: "December 15, 2023",
    location: "Maths T Club, VVCE",
    activity: "Technical Presentation",
    description: "Presented 'The Golden Ratio — Stretching Out to the Real World', exploring the mysterious constant that shapes architecture, nature (sunflowers), and design aesthetics through geometric and fractal patterns.",
    result: "Presenter",
    achievement: "Technical Storytelling",
    participants: ["Armaan (Me)", "Parinith R", "Aravind s gudi"],
    technologies: ["Geometry", "Fractal Patterns", "Design Aesthetics", "Public Speaking"],
    learnings: "Deepened my ability to translate complex mathematical concepts into engaging real-world analogies, while collaborating on research into the intersection of math and nature.",
  },
  {
    name: "Invaders Hack",
    date: "November 24, 2023",
    location: "MIT Mysore-Belavadi",
    activity: "Cybersecurity Hackathon",
    description: "Participated in an intense cybersecurity-focused hackathon. The event included hands-on training in Kali Linux, vulnerability detection, and Google Dorking, followed by three real-world cybersecurity challenges that tested ethical hacking and forensics skills.",
    result: "Participant",
    achievement: "Cyber Defense Training",
    participants: ["Armaan (Me)", "Pavan Kumar", "Dhanush Kl", "Manjunath Srinivas"],
    technologies: ["Kali Linux", "Ethical Hacking", "Google Dorking", "Digital Forensics"],
    learnings: "Gained a deep understanding of the importance of responsible hacking and digital defense, and mastered practical techniques for identifying and documenting system vulnerabilities.",
  },
  {
    name: "SIH Internal Hackathon 2023",
    date: "September 25, 2023",
    location: "VVIET, Mysore",
    activity: "Smart India Hackathon Internal Round",
    description: "Marked my first step into the world of hackathons. Collaborated on ideating and pitching solutions for real-world problems just days into my engineering journey. This experience sparked my interest in tech-driven problem-solving.",
    result: "Participant",
    achievement: "First Hackathon Experience",
    participants: ["Armaan (Me)", "Aravind s gudi"],
    technologies: ["Ideation", "Pitching", "Problem Solving", "Rapid Prototyping"],
    learnings: "Learned the value of curiosity and 'saying yes' to new challenges. This event laid the foundation for my collaborative engineering mindset.",
  },
]

export default function ArenaPage() {
  return (
    <div className="min-h-screen py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-4">Arena</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Competitions
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
            The Arena is where I put my skills to the test. From global hackathons to specialized technical 
            festivals, this is a record of my participation and achievements in the competitive tech landscape.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {competitions.map((comp, index) => (
            <article 
              key={index}
              className="p-8 rounded-2xl bg-card border border-border"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-primary text-primary-foreground">
                      {comp.result}
                    </span>
                    <span className="text-sm font-mono text-primary">{comp.achievement}</span>
                    <span className="text-sm text-muted-foreground">·</span>
                    <span className="text-sm text-muted-foreground">{comp.date}</span>
                    <span className="text-sm text-muted-foreground">·</span>
                    <span className="text-sm text-muted-foreground">{comp.location}</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-2">{comp.name}</h2>
                  <h3 className="text-lg text-primary mb-4">{comp.activity}</h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {comp.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold mb-2">Participation</h4>
                      <p className="text-sm text-muted-foreground">{comp.participants.join(", ")}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-2">Key Learning</h4>
                      <p className="text-sm text-muted-foreground">{comp.learnings}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {comp.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
