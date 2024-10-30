import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

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
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/user/personal-portfolio",
  },
  {
    id: 2,
    name: "E-Commerce Platform",
    description:
      "An e-commerce web application developed using Next.js and Stripe for payment integration, featuring a comprehensive product catalog, shopping cart, and checkout system.",
    image: projectImage2,
    githubLink: "https://github.com/user/ecommerce-platform",
  },
  {
    id: 3,
    name: "Task Management Tool",
    description:
      "A task management application built with React and Redux for efficient task tracking and team collaboration, including features like project boards, task assignment, and progress tracking.",
    image: projectImage3,
    githubLink: "https://github.com/user/task-management-tool",
  },
  {
    id: 4,
    name: "Weather App",
    description:
      "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with React and styled-components.",
    image: projectImage4,
    githubLink: "https://github.com/user/weather-app",
  },
  {
    id: 5,
    name: "Blog Platform",
    description:
      "A blogging platform developed with Next.js and Markdown for creating, editing, and publishing blog posts. It features a rich text editor, tag system, and user authentication.",
    image: projectImage5,
    githubLink: "https://github.com/user/blog-platform",
  },
  {
    id: 6,
    name: "Chat Application",
    description:
      "A real-time chat application using Firebase for backend services, including user authentication, chat rooms, and instant messaging features. Built with React and Firebase.",
    image: projectImage6,
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
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "2+ years",
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
    name: "Next.js",
    experience: "1+ year",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "1.5+ years",
  },
  {
    icon: <DiRedis className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Redis",
    experience: "1+ year",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "2+ years",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "PostgreSQL",
    experience: "1+ year",
  },
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
