import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import fullStackImage from "../assets/full-stack.webp";
import flutterImage from "../assets/flutter-logo.webp";
import cmsImage from "../assets/cms-logo.webp";
import uiUxImage from "../assets/ui-ux-logo.jpeg";
import optimizationImage from "../assets/optimization-logo.png";
import consultingImage from "../assets/consulting-logo.png";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { BiLogoFlutter } from "react-icons/bi";

export const NAVIGATION_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "ASSEM SALAMA",
  greet: "Hello there! 👋🏻",
  jobTitle: "Software Engineer",
  description: 
    "I'm a Software Engineer with a passion for creating scalable and efficient solutions. Specializing in backend development and system optimization, I focus on building high-performance applications. Explore my work and let's collaborate on driving innovation together!"
};

export const SERVICES = [
  {
    id: 1,
    name: "Full-Stack Development",
    description:
      "Dynamic web solutions from backend to frontend, open to any technology stack that best fits your needs. From responsive design to robust infrastructure, your vision becomes reality.",
    image: fullStackImage,
    githubLink: "https://github.com/user/personal-portfolio",
  },
  {
    id: 2,
    name: "Cross-Platform Mobile Application Development",
    description: 
      "Developing high-performance mobile apps with Flutter for seamless experiences on both iOS and Android, bringing your ideas to life.",
    image: flutterImage,
    githubLink: "https://github.com/user/ecommerce-platform",
  },
  {
    id: 3,
    name: "Content Management Systems",
    description:
      "Streamline content management with custom CMS solutions that are user-friendly, flexible, and tailored to your brand’s needs, empowering you to update and grow your website with ease",
    image: cmsImage,
    githubLink: "https://github.com/user/task-management-tool",
  },
  {
    id: 4,
    name: "UI/UX",
    description:
      "Designing beautiful, user-centered interfaces that make every interaction intuitive and seamless, enhancing user satisfaction and brand loyalty.",
    image: uiUxImage,
    githubLink: "https://github.com/user/weather-app",
  },
  {
    id: 5,
    name: "System Optimization",
    description:
      "Maximizing efficiency by optimizing your systems for speed, security, and scalability, so your operations run smoother and faster.",
    image: optimizationImage,
    githubLink: "https://github.com/user/blog-platform",
  },
  {
    id: 6,
    name: "Consulting",
    description:
      "Offering expert consulting to empower your business with strategic tech solutions, actionable insights, and sustainable growth plans tailored to your goals.",
    image: consultingImage,
    githubLink: "https://github.com/user/chat-application",
  },
];

export const BIO = [
  "Assem Salama is a dedicated Software Engineer with over 2 years of experience in backend development, system optimization, and API integration. He holds a Bachelor degree in Computer and Communication Engineering from Faculty of Engineering, Alexandria University where he developed a solid foundation in software engineering and problem-solving. His expertise spans various technologies, with a focus on building efficient and scalable software solutions.",
  "At Brightskies Inc., Assem has contributed to the development of robust backend solutions, working on API design, backend process optimization, and database management. He has also played a key role in improving system performance, enhancing user experience through advanced web development techniques, and implementing AI-powered solutions such as chatbots.",
  "His career began with internships where he gained hands-on experience in mobile app enhancement and website development. With a passion for innovation and creating high-performance solutions, Assem continues to seek out new challenges and opportunities to drive efficiency and growth through technology."
];

export const SKILLS = [
  {
    icon: <BiLogoSpringBoot className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Spring Boot",
    experience: "1+ years",
  },
  {
    icon: <SiMysql className="text-4xl text-white lg:text-5xl"/>,
    name: "MySQL Databases",
    experience: "2+ years",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "1+ years",
  },
  {
    icon: <FaWordpress className="text-4xl text-white lg:text-5xl" />,
    name: "WordPress",
    experience: "1+ years",
  },
  {
    icon: <BiLogoFlutter className="text-4xl text-blue-400 lg:text-5xl" />,
    name: "Flutter",
    experience: "1+ year",
  },
  {
    icon: <RiReactjsLine className="text-4xl text-blue-400 lg:text-5xl" />,
    name: "React.js",
    experience: "1+ years",
  }
];

export const EXPERIENCES = [
  {
    title: "Software Engineer",
    company: "Brightskies Inc.",
    duration: "Januray 2023 - Present",
    description:
      "Experienced in API development and backend optimization with SAP Commerce ERP, I enhanced transaction speeds and system performance for Pharmaoverseas and Mahle Smartbike Systems. My work includes innovative email preview integration and interactive e-bike web features, driving measurable improvements in engagement and efficiency. Additionally, I developed a high-accuracy e-bike troubleshooting chatbot with 95% intent detection."
  },
  {
    title: "Software Engineering Intern",
    company: "Encopedia Solutions",
    duration: "July 2020 - September 2021",
    description:
      "Developed expertise in native Android Java for mobile app functionality enhancements, achieving substantial accuracy improvements in data recording. Skilled in Flutter for cross-platform app development, with a focus on creating engaging, user-centric applications that drive interaction and operational efficiency. Gained strong abilities in optimizing mobile user experiences and delivering impactful, user-focused solutions."
  },
  {
    title: "Software Engineering Intern",
    company: "The Talent Tier",
    duration: "June 2019 - September 2019",
    description:
      "Crafted the organization's website employing HTML, CSS, JavaScript, and Bootstrap within 3 months, resulting in a visually engaging and intuitive online platform."
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Computer and Communication Engineering",
    institution: "Alexandria University",
    duration: "September 2017 - September 2022",
    description:
      "My university specialization in Software Engineering as a major, equipped me with a solid foundation in designing and building software solutions tailored for real-world challenges. This field fostered my skills across a broad spectrum, including data structures, algorithms, and software architecture, while emphasizing best practices in coding, security, and system design. Through hands-on projects and problem-solving, I gained experience that allows me to create efficient, reliable applications, ready to drive impact in the tech landscape.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/iBoy98",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/assem.salama98/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/assem3811",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/assem-salama/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
