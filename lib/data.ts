import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import {MdWorkHistory} from  "react-icons/md";
import { LuGraduationCap } from "react-icons/lu";
import swiggyIppQwik from "@/public/swiggy-ipp-qwik-project.png"
import macOSDarkTheme from "@/public/vscode-theme-darktheme.png"
import fypItmsProject from "@/public/fyp-itms-ml-project.png"
import figmaTweetyGen from "@/public/figma-tweety-cover.png";
import whatsappCaseStudyDesignThinking from "@/public/whatsapp-designthinking-casestudy.png"


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Engineering, Core-Banking",
    location: "Solaris SE",
    description:
      "- Architecting, designing and implementing robust and scalable cloud-native products on a event-sourced, microservices systems in the Core-Banking Unit, ensuring resilience and distributed functionality.",
    description1:
      "- Building and owning milestone products like Credit Cards & Savings Account that cater financial services to Europe and across the globe",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - Present",
  },
  {
    title: "Associate Software Engineer",
    location: "Hexaware Technologies",
    description:
      "- Worked on the development of enterprise-level distributed applications on the cloud, specifically for an internal ground-up Cloud HRMS Project and catering to an $115 million Automotive Manufacturing organization.",
    description1:
      "- This is where it all started for me, to go beyond my limits to become the person who I'm now and I'm proud of it.",
    icon: React.createElement(MdWorkHistory),
    date: "2021 - 2022",
  },
  {
    title: "Bootcamp Trainee",
    location: "Swiggy",
    description:
      "- One of 30 Member Trainees chosen by Swiggy for an exclusive bootcamp on cutting-edge technologies like Go, AWS, Microservices, gRPC, Kafka and Databases.",
    description1:
      "- Nevertheless to say, this training bootcamp played the pivotal role in transforming me into the world of building modern internet-scale software systems.",
    icon: React.createElement(MdWorkHistory),
    date: "2022, 4 Months.",
  },
  {
    title: "Intern",
    location: "Microsoft",
    description:
      "- Engaged in the development of an open-source project over a 4-month span, utilizing Microsoft Azure Cloud, Power BI, and GitHub, as a key participant in Microsoft's FutureReadyTalent Internship Program.",
    description1:
      "- Built an open-source project Bud.ai - 'The Student Twin' on JavaScript, Microsoft Azure Cloud - AI Tools and hosted it in GitHub and Azure",
    icon: React.createElement(MdWorkHistory),
    date: "2021, 4 Months.",
  },
  {
    title: "Graduated in B.Tech Information Technology",
    location: "Hindusthan College of Engineering and Technology",
    description:
      "- Ranked as #1 Coder in Skillrack Coding Competition continuously for 10 weeks. (Language: C++, Java, Python).",
    description1:
      "- Revitalized Google Developer Student Club & HiCET Developer Club and handled multiple roles with enthusiasm and co-ordination within teams.",
    icon: React.createElement(LuGraduationCap),
    date: "2017 - 2021",
  },
] as const;

export const projectsData = [
  {
    title: "Swiggy Qwik",
    description:
      "E-Commerce platform built with cutting-edge tech as a team of 5 devs from Swiggy's i++ Training Bootcamp.",
    tags: ["Go", "AWS", "DynamoDB", "gRPC", "Microservices",  "Docker", "Jenkins"],
    imageUrl: swiggyIppQwik,
  },
  {
    title: "Design Thinking - WhatsApp",
    description:
      "Reimagining WhatsApp to improve user-experience with helpful new features.",
    tags: ["Case Study", "User Experience", "Figma", "UI"],
    imageUrl: whatsappCaseStudyDesignThinking,
  },
  {
    title: "Intelligent Traffic Management System",
    description:
      "A research project on analyzing the traffic scenario and perform signal switching intelligently.",
    tags: ["Python", "Machine Learning", "Graduation Project", "Google Colab"],
    imageUrl: fypItmsProject,
  },
  {
    title: "VSCode - MacOS Dark Color Scheme",
    description:
      "An absolute dark theme for developers who love pitch-black. Currently used by more than 1500 Developers.",
    tags: ["JavaScript", "VSCode", "Productivity", "Color Scheme"],
    imageUrl: macOSDarkTheme,
  },
  {
    title: "Tweety - Create beautiful & gradient Tweets",
    description:
      "Create custom editable tweet-like images as you like. Forked 2000 times.",
    tags: ["Figma", "UI/UX", "Mockup", "Experimentation"],
    imageUrl: figmaTweetyGen,
  },
] as const;

export const skillsData = [
  "Go",
  "AWS",
  "Microservices",
  "Event-Driven Architecture",
  "Event Sourcing & CQRS",
  "Docker",
  "Kubernetes",
  "Git",
  "Terraform",
  "Grafana",
  "Prometheus",
  "DynamoDB",
  "PostgreSQL",
  "Athena",
  "Snowflake",
  "Aurora",
  "DMS",
  "Jira",
  "Confluence",
  "Linux",
  "Concourse",
  "REST APIs",
  "gRPC APIs",
  "Webhooks"
] as const;
