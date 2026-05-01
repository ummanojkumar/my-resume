
import { 
  Database, 
  Server, 
  ShieldCheck, 
  Cpu, 
  Layers,
  Layout,
  Workflow
} from 'lucide-react';

export const USER_INFO = {
  name: "U M Manoj Kumar",
  title: "Java Backend Developer II",
  email: "ummanojkumar925@gmail.com",
  phone: "+91 9133296929",
  location: "Hindupur, Andhra Pradesh",
  summary: "Java Backend Developer with 4+ years of experience in Spring Boot microservices for fintech and banking domains. Expertise in end-to-end SDLC, system and API design, database modeling, and production support. React.js enthusiast with 1 year of hands-on experience.",
  socials: {
    linkedin: "https://linkedin.com/in/ummanojkumar",
    github: "https://github.com/ummanojkumar",
    blog: "https://ummanojkumar.blogspot.com",
    whatsapp: "https://wa.me/919133296929",
    instagram: "https://instagram.com/um_manoj_kumar", // Placeholder
    facebook: "https://facebook.com/ummanojkumar"    // Placeholder
  }
};

export const EXPERIENCES = [
  {
    company: "Aditi Consulting",
    role: "Java Backend Developer II",
    period: "Oct 2024 - Present",
    location: "Chennai, India",
    client: "PayPal",
    description: "Developing Spring Boot microservices for product configuration data, integrating with Google BigQuery, and building dynamic frontends with React & Next.js."
  },
  {
    company: "Wipro",
    role: "Software Engineer",
    period: "Oct 2021 - Oct 2024",
    location: "Chennai, India",
    client: "DBS Bank",
    description: "Built scalable RESTful microservices for credit card installment payments and insurance protection plans. Migrated monolithic legacy systems to Hexagonal Architecture."
  }
];

export const PROJECTS = [
  {
    title: "Product Configuration Service",
    subtitle: "PayPal Project",
    description: "CRUD operations for complex datasets. Integrated Google BigQuery. Implemented RBAC and approval workflows with high-performance React Hook Form & Zod frontends.",
    tech: ["Java", "Spring Boot", "BigQuery", "React.js", "Next.js", "Harness"]
  },
  {
    title: "Credit Card Pay by Installment",
    subtitle: "DBS Project",
    description: "Flexible finance management tool allowing users to convert transactions into installments. Reduced immediate financial burden for millions of card users.",
    tech: ["Java", "Spring Boot", "Hexagonal Architecture", "MariaDB", "Spring Cache"]
  },
  {
    title: "Card & Cash Care Insurance",
    subtitle: "DBS Project",
    description: "Protective coverage for outstanding balances. Automated claim submission and activation logic for accidents and unforeseen events.",
    tech: ["Spring Data JPA", "MariaDB", "Microservices", "TDD", "PCF"]
  }
];

export const SKILL_GROUPS = [
  {
    title: "Backend Development",
    icon: <Server size={20} className="text-sky-400" />,
    skills: ["Java J2EE", "Spring Boot", "Spring MVC", "Microservices", "Python"]
  },
  {
    title: "Frontend Engineering",
    icon: <Layout size={20} className="text-indigo-400" />,
    skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Next.js"]
  },
  {
    title: "Database & Cloud",
    icon: <Database size={20} className="text-emerald-400" />,
    skills: ["BigQuery", "Oracle SQL", "MariaDB", "AWS Cloud", "Docker"]
  },
  {
    title: "DevOps & Tools",
    icon: <Workflow size={20} className="text-amber-400" />,
    skills: ["Harness", "Jenkins", "Git", "GitHub", "Grafana", "Tableau", "PCF"]
  }
];

export const CAPABILITIES = [
  {
    title: "System Design",
    description: "Hexagonal Architecture & Builder Patterns for modular, maintainable microservices.",
    icon: <Layers size={24} />
  },
  {
    title: "Quality Assurance",
    description: "TDD with JUnit/Mockito, 100% code coverage, and Karate integration testing.",
    icon: <ShieldCheck size={24} />
  },
  {
    title: "Performance",
    description: "Caching strategies, BigQuery optimizations, and JMeter load/stress testing.",
    icon: <Cpu size={24} />
  },
  {
    title: "Automation",
    description: "CI/CD pipelines with Jenkins/Harness and UI Path for business process automation.",
    icon: <Workflow size={24} />
  }
];

export const EDUCATION = [
  {
    degree: "B. Tech. in EEE",
    school: "Siddharth Institute of Engineering and Technology, Tirupati",
    period: "2017 - 2021",
    score: "9.15 CGPA"
  },
  {
    degree: "Intermediate Education (10+2)",
    school: "LRG Naidu Junior College, Hindupur",
    period: "2015 - 2017",
    score: "94%"
  }
];
