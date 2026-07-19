import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Opera | Projects & Systems",
  description: "Explore my portfolio of AI/ML projects, systems, and open-source contributions.",
}

interface Project {
  id: string
  title: string
  description: string
  problem?: string
  solution?: string
  architecture?: string
  impact?: string
  features?: string[]
  tags: string[]
  status: string
  github?: string
  demo?: string
}

const projects: Project[] = [
  {
    id: "uemp",
    title: "Unified E-Waste Management Platform (UEMP)",
    description: "Intelligent Circular Economy Platform for Sustainable Electronic Waste Management. An AI-powered digital ecosystem designed to track electronic products throughout their complete lifecycle—from manufacturing and ownership to recycling and disposal. The platform enables transparent collaboration between manufacturers, consumers, recyclers, and government agencies while promoting sustainable e-waste management practices.",
    problem: "Electronic waste management remains fragmented due to the absence of centralized tracking systems. Manufacturers cannot monitor products after sale, consumers lack convenient recycling mechanisms, and regulators struggle to enforce compliance because of missing lifecycle visibility.",
    solution: "Developed a unified platform that assigns every electronic device a unique digital identity using QR-based registration. AI-powered classification, lifecycle tracking, and real-time analytics enable secure monitoring of products while simplifying responsible disposal and recycling.",
    architecture: "Frontend: Next.js, React, Tailwind CSS | Backend: Node.js, Express.js | Database: Firebase Firestore | Authentication: Firebase Authentication | AI: Google Gemini AI, TensorFlow, EfficientNet-B0 | Cloud: Firebase & Google Cloud Platform",
    impact: "Selected among Top 105 Teams Pan India in the Google GDG Build with AI Hackathon 2025. Promotes circular economy principles through transparent device tracking. Reduces illegal disposal and improves recycling compliance.",
    features: [
      "QR-based product registration",
      "Device lifecycle tracking",
      "AI-powered e-waste classification",
      "Manufacturer dashboard",
      "Recycler management portal",
      "Consumer portal",
      "Government administration system",
      "Recycling certification",
      "Environmental impact analytics",
      "Secure authentication"
    ],
    tags: ["Next.js", "React", "Node.js", "Firebase", "Gemini AI", "TensorFlow", "Firestore"],
    status: "Award-winning",
  },
  {
    id: "autoforge",
    title: "AutoForge",
    description: "Automated Enterprise CI/CD Infrastructure. A secure DevOps automation platform that streamlines software deployment using GitHub Actions, Docker, and AWS infrastructure. AutoForge automates testing, containerization, deployment, and server management to eliminate manual intervention.",
    problem: "Traditional deployment workflows require manual testing, deployment, credential management, and server restarts, leading to inconsistent releases and operational overhead.",
    solution: "Built a fully automated CI/CD pipeline that executes unit tests, builds Docker images, securely stores secrets, deploys applications to AWS EC2, and restarts services automatically after successful builds.",
    architecture: "GitHub → GitHub Actions → Docker Build → AWS EC2 → Automated Deployment",
    impact: "Eliminated manual deployments. Improved deployment consistency. Reduced credential exposure. Faster release cycles.",
    features: [
      "GitHub Actions automation",
      "Docker image generation",
      "Automated testing",
      "AWS EC2 deployment",
      "Secure secret management",
      "Automatic rollback support",
      "Container orchestration",
      "Continuous Integration",
      "Continuous Deployment"
    ],
    tags: ["GitHub Actions", "AWS EC2", "Docker", "TypeScript", "Shell", "CI/CD"],
    status: "Public",
  },
  {
    id: "arogya",
    title: "Arogya AI",
    description: "AI-Powered Medical Imaging Diagnosis System. A deep learning healthcare platform that assists medical professionals by automatically detecting diseases from medical images using convolutional neural networks and transfer learning.",
    problem: "Many rural healthcare facilities lack access to experienced radiologists, resulting in delayed diagnosis and treatment.",
    solution: "Implemented a CNN-based diagnostic system trained on chest X-ray datasets using transfer learning. The model predicts disease probability with confidence scores, assisting clinicians in rapid diagnosis.",
    architecture: "Data Collection → Image Preprocessing → CNN Model → Prediction API → User Dashboard | Models Used: ResNet-50, EfficientNet, CNN",
    impact: "Provides rapid diagnostic assistance. Supports healthcare in resource-limited environments. Enables AI-assisted medical imaging.",
    features: [
      "Chest X-ray analysis",
      "Tuberculosis detection",
      "Transfer learning",
      "Medical image preprocessing",
      "Confidence scoring",
      "TensorFlow Lite deployment",
      "Prediction dashboard"
    ],
    tags: ["Python", "TensorFlow", "PyTorch", "ResNet50", "EfficientNet", "OpenCV", "Flask"],
    status: "Public",
  },
  {
    id: "pii-redaction",
    title: "PII Detection & Redaction Tool",
    description: "Privacy-Preserving PDF Redaction System. A desktop application that automatically detects and removes sensitive personal information from PDF documents while ensuring complete offline privacy.",
    problem: "Organizations manually redact sensitive information from documents, making the process time-consuming and susceptible to human error.",
    solution: "Developed an NLP-powered desktop application combining rule-based detection and Named Entity Recognition (NER) to automatically identify and redact personal information without uploading documents to external servers.",
    architecture: "Python GUI → PDF Parser → Presidio Analyzer → SpaCy NLP → Redacted PDF Generator",
    impact: "Prevents accidental data leakage. Supports privacy regulations. Performs all processing locally.",
    features: [
      "Aadhaar detection",
      "PAN detection",
      "Email detection",
      "Phone number detection",
      "Name recognition",
      "Address detection",
      "Automatic PDF redaction",
      "Batch document processing",
      "Offline execution"
    ],
    tags: ["Python", "SpaCy", "Presidio", "PyMuPDF", "Regex", "NLP"],
    status: "Public",
  },
  {
    id: "veda",
    title: "VEDA",
    description: "Enterprise Data Intelligence & Analytics Platform. VEDA is a cloud-ready analytics platform that aggregates data from multiple sources into unified dashboards for business intelligence and operational monitoring.",
    problem: "Organizations often rely on fragmented systems, making it difficult to visualize key performance metrics and derive actionable insights.",
    solution: "Built a scalable web application capable of aggregating data from multiple sources, presenting interactive visualizations, and providing secure access to business metrics.",
    architecture: "Next.js → API Layer → Data Aggregation → Dashboard Components",
    features: [
      "Interactive dashboards",
      "Data aggregation",
      "KPI visualization",
      "Secure authentication",
      "Cloud-ready architecture",
      "Responsive UI"
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    status: "Public",
  },
  {
    id: "devverse",
    title: "DevVerse",
    description: "Collaborative Developer Community Platform. A social platform built specifically for developers to collaborate, share technical content, review repositories, and participate in knowledge-driven discussions.",
    problem: "Developers frequently rely on multiple disconnected platforms for networking, blogging, repository sharing, and technical discussions.",
    solution: "Created a unified community platform combining developer profiles, repository showcases, blogs, discussion forums, and technical resource sharing.",
    features: [
      "Developer profiles",
      "Project showcase",
      "Repository reviews",
      "Blog publishing",
      "Technical discussions",
      "Community interactions",
      "Search & filtering"
    ],
    tags: ["Next.js", "React", "Node.js", "TypeScript"],
    status: "Public",
  },
  {
    id: "citinexus",
    title: "CitiNexus",
    description: "Smart City Intelligence Dashboard. An urban analytics platform designed to visualize infrastructure data, monitor utilities, and assist municipalities with data-driven decision-making.",
    problem: "Municipal authorities struggle to monitor multiple public services from disconnected information systems.",
    solution: "Developed a centralized dashboard providing real-time visualization of transportation, electricity, water usage, and public infrastructure.",
    features: [
      "Infrastructure monitoring",
      "Transportation analytics",
      "Utility dashboards",
      "Interactive charts",
      "Data visualization",
      "Responsive interface"
    ],
    tags: ["Next.js", "React", "Recharts", "TypeScript"],
    status: "Public",
  },
  {
    id: "ayush",
    title: "Ayush",
    description: "Digital Ayurveda Knowledge Platform. A modern wellness platform that digitizes traditional Ayurvedic knowledge by providing searchable herbal remedies, wellness practices, and personalized healthcare guidance.",
    problem: "Traditional Ayurvedic knowledge remains scattered across books and regional sources, limiting accessibility for modern users.",
    solution: "Created an interactive portal presenting Ayurvedic herbs, wellness practices, and health recommendations through a user-friendly interface.",
    features: [
      "Herbal database",
      "Wellness guides",
      "Search functionality",
      "Educational resources",
      "Mobile-friendly UI"
    ],
    tags: ["React", "TypeScript", "Tailwind CSS"],
    status: "Public",
  },
  {
    id: "salary-insights",
    title: "Salary Insights",
    description: "Interactive Compensation Analytics Platform. A visualization platform that helps users analyze salary trends across industries, locations, experience levels, and job roles.",
    problem: "Job seekers often lack reliable compensation insights when evaluating career opportunities.",
    solution: "Built an interactive dashboard that presents salary distributions, regional comparisons, and experience-based compensation trends.",
    features: [
      "Salary analytics",
      "Regional comparisons",
      "Interactive charts",
      "Market trend visualization",
      "Responsive dashboards"
    ],
    tags: ["Next.js", "TypeScript", "Recharts", "Tailwind CSS"],
    status: "Public",
  },
  {
    id: "journey",
    title: "Journey",
    description: "Interactive Career Timeline Platform. A portfolio and timeline management application enabling users to visualize achievements, certifications, internships, education, and career progression.",
    problem: "Students and professionals struggle to organize their achievements into a coherent career timeline.",
    solution: "Developed an animated timeline application that visually presents milestones and accomplishments while simplifying portfolio management.",
    features: [
      "Timeline visualization",
      "Career milestones",
      "Achievement tracking",
      "Interactive animations",
      "Search & organization"
    ],
    tags: ["Next.js", "TypeScript", "Framer Motion"],
    status: "Public",
  },
  {
    id: "suvitta",
    title: "Suvitta",
    description: "Personal Finance & Investment Planner. A responsive financial planning application that assists users in budgeting, investment planning, and long-term wealth forecasting.",
    problem: "Most financial planning tools are either overly complex or inaccessible to beginners.",
    solution: "Built an intuitive finance dashboard that calculates savings growth, compound interest, and financial projections while storing data securely in the browser.",
    features: [
      "Budget planner",
      "Investment tracker",
      "Compound interest calculator",
      "Interactive charts",
      "Local storage backup"
    ],
    tags: ["React", "TypeScript", "Chart.js", "LocalStorage"],
    status: "Public",
  },
  {
    id: "govind",
    title: "Govind",
    description: "Municipal Inventory Management System. A resource management platform designed to streamline inventory tracking and municipal asset allocation across departments.",
    problem: "Government inventory systems often rely on manual record-keeping, resulting in inefficiencies and poor resource visibility.",
    solution: "Developed a centralized inventory management platform supporting asset tracking, allocation records, and resource availability monitoring.",
    features: [
      "Asset management",
      "Inventory tracking",
      "Resource allocation",
      "Department dashboards",
      "Search & reporting"
    ],
    tags: ["React", "JavaScript", "Node.js"],
    status: "Public",
  },
  {
    id: "sanjeevani",
    title: "Sanjeevani",
    description: "Emergency Healthcare Resource Coordination Platform. A healthcare coordination platform enabling hospitals to share emergency resource availability in real time.",
    problem: "Patients and emergency responders often face delays due to the lack of real-time information about hospital capacity.",
    solution: "Built a centralized platform displaying ICU bed availability, ambulance locations, oxygen supplies, and emergency contacts across healthcare facilities.",
    features: [
      "ICU bed availability",
      "Ambulance tracking",
      "Hospital dashboards",
      "Real-time updates",
      "Geolocation support"
    ],
    tags: ["Next.js", "Firebase", "TypeScript", "Geolocation API"],
    status: "Public",
  },
  {
    id: "project-mysore",
    title: "Project Mysore",
    description: "Interactive Heritage & Tourism Information System. A GIS-powered web application showcasing Mysore's cultural heritage, historical monuments, tourist attractions, and navigation routes through an interactive map interface.",
    problem: "Tourists often struggle to discover historical sites and navigate cultural landmarks efficiently.",
    solution: "Developed an interactive mapping platform integrating heritage information, location data, and travel routes into a single user-friendly experience.",
    features: [
      "Interactive maps",
      "Heritage information",
      "Tourist route planning",
      "Landmark descriptions",
      "Geographic visualization"
    ],
    tags: ["JavaScript", "HTML5", "CSS3", "Leaflet Maps"],
    status: "Public",
  },
  {
    id: "dev-voting",
    title: "DEV – Decentralized Electronic Voting System",
    description: "Blockchain-Based Secure Electronic Voting Platform. A decentralized voting platform leveraging Ethereum smart contracts to provide secure, transparent, and tamper-proof digital elections while ensuring voter privacy and election integrity.",
    problem: "Conventional electronic voting systems depend on centralized infrastructure, making them vulnerable to manipulation, single points of failure, and reduced public trust.",
    solution: "Implemented a blockchain-based election platform where votes are securely recorded as immutable transactions. Smart contracts automate election management, prevent duplicate voting, and enable transparent public verification without revealing voter identities.",
    architecture: "React Frontend → Web3.js → MetaMask → Ethereum Smart Contracts → Blockchain Ledger",
    impact: "Ensures transparency and immutability of election records. Eliminates single points of failure through decentralized infrastructure. Demonstrates practical application of blockchain technology in secure digital governance.",
    features: [
      "Smart contract-based elections",
      "Blockchain vote storage",
      "Immutable audit logs",
      "Secure voter authentication",
      "Candidate management",
      "Election scheduling",
      "Automated vote counting",
      "Public result verification",
      "Wallet integration",
      "Cryptographic security"
    ],
    tags: ["Solidity", "Ethereum", "Web3.js", "React", "Hardhat", "Ganache", "MetaMask", "Cryptography"],
    status: "Private",
  },
]

export default function OperaPage() {
  return (
    <div className="min-h-screen py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-4">Opera</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Projects & Systems
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
            A collection of systems I&apos;ve designed and built, from production ML infrastructure 
            to open-source tools. Each project represents a unique challenge solved with thoughtful engineering.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project) => (
            <article 
              key={project.id}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                      {project.status}
                    </span>
                    <div className="flex gap-2">
                      {project.github && (
                        <Link href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                        </Link>
                      )}
                      {project.demo && (
                        <Link href={project.demo} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                          </svg>
                        </Link>
                      )}
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  {(project.problem || project.solution || project.architecture || project.impact || project.features) && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {project.problem && (
                        <div>
                          <h4 className="text-sm font-semibold text-primary mb-2">Problem</h4>
                          <p className="text-sm text-muted-foreground">{project.problem}</p>
                        </div>
                      )}
                      {project.solution && (
                        <div>
                          <h4 className="text-sm font-semibold text-primary mb-2">Solution</h4>
                          <p className="text-sm text-muted-foreground">{project.solution}</p>
                        </div>
                      )}
                      {project.architecture && (
                        <div>
                          <h4 className="text-sm font-semibold text-primary mb-2">Architecture</h4>
                          <p className="text-sm text-muted-foreground">{project.architecture}</p>
                        </div>
                      )}
                      {project.impact && (
                        <div>
                          <h4 className="text-sm font-semibold text-primary mb-2">Impact</h4>
                          <p className="text-sm text-muted-foreground">{project.impact}</p>
                        </div>
                      )}
                      {project.features && (
                        <div className="col-span-1 md:col-span-2">
                          <h4 className="text-sm font-semibold text-primary mb-2">Key Features</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.features.map((feature, i) => (
                              <span 
                                key={i} 
                                className="text-xs px-2.5 py-1 rounded bg-primary/5 text-muted-foreground border border-border/50 font-medium"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
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
