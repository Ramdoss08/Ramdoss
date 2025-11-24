
import { Experience, Project, SocialLink } from './types';

export const PROFILE = {
  name: "Ramdoss",
  role: "UX/UI Designer",
  location: "India",
  tagline: "Crafting intuitive digital experiences with purpose and precision.",
  bio: "I am a passionate UX/UI Designer dedicated to solving complex problems through clean, user-centric design. With a background in user research and high-fidelity prototyping, I bridge the gap between user needs and business goals.",
  behance: "https://www.behance.net/Ram08",
  linkedin: "https://www.linkedin.com/in/ramdoss-s-a3bb23227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  email: "ramdoss8489@gmail.com",
  phone: "8489014818",
  whatsapp: "https://wa.me/918489014818"
};

export const EXPERIENCE: Experience[] = [
  {
    role: "UI/UX Design Intern",
    company: "Magnil Technology",
    period: "Internship",
    description: [
      "Contributed to end-to-end user research to validate design assumptions.",
      "Developed low-fidelity wireframes and translated them into high-fidelity UI designs.",
      "Collaborated with developers to ensure design feasibility and consistency.",
      "Focused on creating accessible and responsive web interfaces."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "wasteless",
    title: "WasteLess App",
    category: "Mobile Application",
    description: "A complete food-saving and donation application designed to reduce household food waste. Features include expiry tracking, smart shopping lists, and recipe suggestions based on available ingredients.",
    tags: ["UX Research", "UI Design", "Prototyping", "Mobile App"],
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=800&auto=format&fit=crop"
    ],
    link: "https://www.behance.net/Ram08",
    featured: true
  },
  {
    id: "aadaiz",
    title: "Aadaiz",
    category: "Application",
    description: "A comprehensive application design project featuring a user-centric interface, streamlined workflows, and a modern visual identity system.",
    tags: ["UI/UX Design", "Product Design", "Application"],
    imageUrl: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop"
    ],
    link: "https://www.behance.net/Ram08",
    featured: true
  }
];

export const COMMUNITY_ACTIVITIES = [
  {
    title: "Design Meetups",
    description: "Active participant in local and virtual design meetups, engaging in discussions about the future of UX."
  },
  {
    title: "UX Writing",
    description: "Authoring articles on my blog about design thinking, accessibility, and the internship experience."
  },
  {
    title: "Mentorship",
    description: "Sharing knowledge with aspiring designers and contributing to open design discussions."
  }
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Community", href: "#community" },
  { label: "Contact", href: "#contact" },
];

export const SYSTEM_INSTRUCTION = `You are an AI assistant for Ramdoss's portfolio website. 
Ramdoss is a UX/UI Designer based in India.
Key Experience: UI/UX Intern at Magnil Technology (User Research, Wireframes, High-fidelity UI).
Key Projects: WasteLess App (Food saving), Aadaiz (Application design).
Style: Clean, minimal, grid-based, professional.
Community: Writes UX articles, attends meetups.
Behance: https://www.behance.net/Ram08.
Phone/WhatsApp: +91 8489014818.
Goal: Answer questions from recruiters or visitors about Ramdoss's skills, experience, and projects professionally and concisely.
Do not make up facts not present here. If asked for contact info, suggest the contact form or email section.`;
