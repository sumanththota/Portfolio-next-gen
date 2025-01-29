import React from "react";
import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
// import corpcommentImg from "@/public/corpcomment.png";
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";
// import awsSol from "@/public/awsSol.png";
// import awsml from "@/public/awsml.png";
import { FaAws } from "react-icons/fa";

import { FaJava } from "react-icons/fa";
import { DiRedis } from "react-icons/di";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiGraphql,
  SiDjango,
  SiPostgresql,
  SiPython,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiTerraform,
  SiSpringboot,
  SiGo,
  SiExpress,
  SiJunit5,
  SiApachekafka,
  SiApacheflink,
  SiElasticsearch,
} from "react-icons/si";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  // {
  //   name: "Projects",
  //   hash: "#projects",
  // },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Certfication",
    hash: "#certification",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

import { SiPytorch, SiSpring } from "react-icons/si";

export const experiencesData = [
  {
    title: "Software Engineer",
    location: "The Research Foundation for SUNY, Buffalo, NY",
    description:
      "Rebuilt an IoT access platform using Golang and transformed it into a cloud-native solution with AWS serverless architecture. Enabled features such as concurrent access and file sharing. Worked extensively on network configuration and implemented cloud migration best practices.",
    icon: React.createElement(FaAws),
    date: "Aug 2023 - Present",
  },
  {
    title: "University at Buffalo",
    location: "Buffalo, NY",
    description:
      "Pursued a Master’s degree in Computer Science, gaining exposure to brilliant minds and working on Blockchain, Machine Learning, and Cloud Computing.",
    icon: React.createElement(LuGraduationCap),
    date: "Sept 2022 - Jan 2024",
  },
  {
    title: "Software Engineer",
    location: "Accenture, Bengaluru, India",
    description:
      "Developed a production support tool using CQRS and Event Sourcing architecture. Built APIs for microservice communication with Java and Spring Boot and configured MongoDB. Optimized an enterprise-scale application for performance and scalability using Java multithreading and distributed messaging.",
    icon: React.createElement(SiSpring),
    date: "Jan 2020 - Aug 2022",
  },

  {
    title: "Software Engineer Intern",
    location: "Krify, Bengaluru, India",
    description:
      "Built a full-stack application using Java, Spring Boot, and Hibernate ORM with PostgreSQL integration. Refactored legacy code and decoupled dependencies to optimize performance and enable faster feature integration. Tackled critical production issues while honing skills in test-driven development.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2019 - Dec 2019",
  },
] as const;

export const projectsData = [
  {
    title: "Banking using CQRS and Event Sourcing",
    description:
      "The project involved developing a banking application using CQRS and Event Sourcing patterns with Java, Spring Boot, and Kafka. The application focused on event handling and command processing to manage transactions, ensuring high consistency and auditability. Designed to handle complex banking operations, the system emphasized real-time updates and event replay during fraud detection or recovery scenarios.",
    link: "https://github.com/sumanththota/CQRS_EventSourcing",
    image: "/banking.png",
  },
  {
    title: "Real-Time Data Streaming with Kafka and OpenSearch",
    description:
      "The project involved building a real-time data processing pipeline using Kafka and Java to stream high-volume data into OpenSearch for indexing, search, and analytics. The solution focused on eliminating redundant events and ensuring fault tolerance, while transforming data for real-time querying, monitoring, and alerting, ultimately providing actionable insights.",

    link: "https://github.com/sumanththota/Kafka-Open-Search-Project",
    image: "/kafka.jpeg",
  },
  {
    title: " E-Commerce Platform with Microservices Architecture",
    description:
      "The project involved creating a scalable e-commerce platform using a microservices architecture to meet essential business needs, such as product management, user authentication, order processing, and inventory management. The platform leveraged Java, Spring Boot, and design patterns, alongside Kubernetes, to grow services independently. Communication was facilitated through RESTful APIs and event-driven messaging with Kafka for efficient service interaction. ",

    link: "https://github.com/sumanththota/eCommerce",
    image: "/microservices.png",
  },
  {
    title: "CRM System with django",
    description:
      "This CRM application was built using Python, Django, and PostgreSQL, focusing on business requirements such as authentication, user data creation, and customer relationship management. The project leverages the power of rapid development with the Django framework, while also providing a deeper understanding of the underlying components for faster iterations.",

    link: "https://github.com/sumanththota/Django-CRM-",
    image: "/CRM.png",
  },
] as const;

export const skillsData = [
  // Web Development Skills
  // Backend Development
  { name: "Java", icon: FaJava },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "Go", icon: SiGo },
  { name: "Python", icon: SiPython },
  { name: "Django", icon: SiDjango },

  { name: "JUnit 5", icon: SiJunit5 },
  { name: "Kafka", icon: SiApachekafka },
  { name: "ELK Stack", icon: SiElasticsearch },

  // Frontend Development
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },

  // Database and Query Languages
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Redis", icon: DiRedis },
  { name: "GraphQL", icon: SiGraphql },

  // Frameworks and Platforms

  // CI/CD and DevOps

  { name: "AWS", icon: FaAws },
  { name: "Docker", icon: SiDocker },
  { name: "Kubernetes", icon: SiKubernetes },
  { name: "Jenkins", icon: SiJenkins },
  { name: "Terraform", icon: SiTerraform },
] as const;
