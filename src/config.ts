export const siteConfig = {
  name: "Kareem Montaser",
  title: "Backend & Automation Engineer | Mechatronics Specialist",
  description: "Mechatronics Engineer specializing in GenAI integration, n8n automation, and computer vision systems.",
  accentColor: "#1d4ed8",
  social: {
    email: "karimmontaser40@gmail.com",
    linkedin: "https://www.linkedin.com/in/karim-montaser-bb608a313",
    github: "https://github.com/karimmontaser0",
  },
  aboutMe:
    "Backend & Automation Engineer with a Mechatronics Engineering background, specializing in Generative AI integration, intelligent automation workflows, and computer vision systems. I have built AI-powered chatbots, humanoid robots, and end-to-end automation pipelines achieving up to 80% reduction in manual workload.",
  skills: ["Python", "n8n", "LLM Integration", "Prompt Engineering", "OpenCV", "YOLOv8", "REST APIs", "Docker", "Raspberry Pi", "Arduino", "Embedded C/C++", "Git/GitHub"],
  projects: [
    {
      name: "AI-Powered Humanoid Receptionist Robot",
      description:
        "Designed and built an AI-driven humanoid receptionist with real-time face tracking using YOLOv8 and OpenCV. Integrated Google Cloud STT, Gemini API, and ElevenLabs for bilingual Arabic/English interaction. Achieved 95% face detection accuracy.",
      link: "/karimmontaser00.github.io/projects/ai-robot",
      skills: ["YOLOv8", "OpenCV", "Gemini API", "ElevenLabs", "Raspberry Pi", "Arduino"],
    },
    {
      name: "Clinic Appointment Automation",
      description:
        "End-to-end automation syncing WhatsApp inquiries with Google Sheets and Gmail using n8n multi-agent orchestration. Reduced manual scheduling workload by 80% with near-zero manual intervention.",
      link: "/karimmontaser00.github.io/projects/clinic-automation",
      skills: ["n8n", "Google Sheets API", "WhatsApp Business API", "REST APIs"],
    },
    {
      name: "JD-Match: AI Mock Interviewer",
      description:
        "A GenAI tool that analyzes a candidate's CV against a Job Description and conducts a tailored mock interview via a custom n8n workflow using prompt engineering to generate role-specific questions.",
      link: "/karimmontaser00.github.io/projects/jd-match",
      skills: ["GenAI", "Prompt Engineering", "n8n", "Python"],
    },
  ],
  experience: [
    {
      company: "Freelance / Independent Projects",
      title: "Automation & Backend Developer",
      dateRange: "Jul 2025 - Oct 2025",
      bullets: [
        "Designed and implemented automation workflows using n8n to orchestrate backend services and AI-driven processes.",
        "Built AI-powered WhatsApp and Telegram chatbots with NLP-based conversation flows.",
        "Delivered end-to-end automation pipelines achieving up to 80% reduction in manual workload.",
      ],
    },
    {
      company: "Ezz Group (GEMMA)",
      title: "Technical & HR Intern",
      dateRange: "Aug 2024 - Sep 2024",
      bullets: [
        "Supported quality control, testing, and evaluation of technical training kits.",
        "Assisted in documentation and workflow optimization across technical and HR teams.",
      ],
    },
  ],
  education: [
    {
      school: "MSA University",
      degree: "B.Sc. in Mechatronics Engineering (Very Good)",
      dateRange: "2020 - 2025",
      achievements: [
        "Focused on Robotics, Control Systems, and AI Integration.",
        "Graduated with hands-on experience across 15+ automation and robotics builds.",
      ],
    },
    {
      school: "IBM & Coursera",
      degree: "Generative AI Professional Certifications",
      dateRange: "2025 - 2026",
      achievements: [
        "Generative AI for Everyone - UNDP Future Skills.",
        "Building Generative AI-Powered Applications with Python - IBM.",
        "Generative AI: Prompt Engineering Basics - IBM.",
      ],
    },
    {
      school: "Embedded Systems Diploma",
      degree: "Professional Embedded Systems Certification",
      dateRange: "2024",
      achievements: [
        "Specialized in Embedded C/C++, RTOS, and Embedded Linux.",
        "Applied real-time systems knowledge to humanoid and robotics projects.",
      ],
    },
  ],
};
