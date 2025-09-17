
"use client";

import Image from "next/image";
import { Github, Linkedin, Mail, ArrowRight, Code, ExternalLink } from 'lucide-react';
import { Header } from "@/components/header";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { Separator } from "@/components/ui/separator";
import { Quote } from "@/components/quote";
import { useState, useEffect } from "react";

// Project Data
const projects = [
   {
    title: "MetroRail v.01",
    description: "A visualization tool for Berlin's M2 metro line. It suggests the best station to walk to for time savings and tracks the real-time movement of all M2 trams along the line.",
    technologies: ["JavaScript", "HTML", "CSS"],
    liveLink: "https://marcogara.github.io/pages/2025/metro-m2/index.html",
    liveLinkText: "Demo",
    repoLink: "#",
    repoUnavailable: true,
    image: "https://picsum.photos/seed/metrorail1/600/400",
    imageHint: "train metro map",
  },
  {
    title: "MetroRail v.02",
    description: "The next iteration of the MetroRail project, featuring an improved UI, real-time data integration capabilities, and enhanced performance for a smoother user experience. This version can differentiate between trams and is being developed for full timetable synchronization.",
    technologies: ["JavaScript", "HTML", "CSS"],
    liveLink: "https://marcogara.github.io/pages/2025/metro-m2-V02/index.html",
    liveLinkText: "Demo",
    repoLink: "#",
    repoUnavailable: true,
    image: "https://picsum.photos/seed/metrorail2/600/400",
    imageHint: "modern train interface",
  },
  {
    title: "Pharmaceutical Inventory Management System",
    description: "A simple starter project to explore the Spring Bean lifecycle and use Thymeleaf templates for dynamic HTML rendering. \nThis project is meant to showcase how Spring manages beans and how to serve dynamic content in a clean, extendable way.",
    technologies: ["Java", "Spring Beans", "HTML", "CSS", "JSON"],
    liveLink: "/pharma-inventory",
    liveLinkText: "Demo",
    repoLink: "https://github.com/marcogara/pharmaceutical-inventory-management-system",
    image: "/Meds.png",
    imageHint: "finance banking",
  },
  {
    title: "Smart Interest App",
    description: "A banking application for managing interest rates, built with a robust Java backend and a classic web frontend. \nThis UI is for demonstration only. The Spring Boot backend is not live.\nCheck out the repo for the backend.",
    technologies: ["Java", "PostgreSQL", "HTML", "CSS", "JavaScript"],
    liveLink: "/smart-interest-app/index.html",
    repoLink: "https://github.com/marcogara/interest-optimisation-account",
    image: "/MVP_saving_app.png",
    imageHint: "finance banking",
  },
  {
    title: "Java Adventures for Kids",
    description: "A fun, interactive book designed to teach children the fundamentals of Java programming with easy-to-understand examples and copy-paste code snippets.",
    technologies: ["Java", "Education"],
    liveLink: "https://www.amazon.com/CODE-KIDS-JAVA-Learn-doing-ebook/dp/B0F4MK7YKF/ref=tmm_kin_swatch_0",
    liveLinkText: "Buy on Amazon",
    repoLink: "#",
    image: "/codeForKidsJAVA.png",
    imageHint: "book code kids",
  },
  {
    title: "Self-driving car JavaScript project",
    description: "Self-driving car JavaScript project. The car is driving autonomously, and it's driven by a neural network coded from scratch in JS.",
    technologies: ["JavaScript", "Neural Network"],
    liveLink: "/carProject/index.html",
    repoLink: "#",
    image: "/carAI.png",
    imageHint: "neural network car",
  },
  {
    title: "IHK Project",
    description: "Developed a feature for the SyABO web app, a system used by public transport companies to manage subscriber and student data. This project involved creating a tool to define and manage data exchange conventions with various data suppliers via CSV file interfaces.",
    technologies: ["Java", "PostgreSQL", "JSP", "JSF"],
    liveLink: "/IHK/presi.pdf",
    liveLinkText: "Presentation",
    repoLink: "/IHK/doku.pdf",
    repoLinkText: "Docs",
    image: "/IHK/320px-IHK_Berlin_Logo.svg.png",
    imageHint: "education certificate",
    isLogo: true,
  },
  {
    title: "CS50's Introduction to Programming with Python",
    description: "Completed Harvard's renowned introductory course on Python, covering core concepts from functions and data structures to object-oriented programming. This project showcases the final project and certificate.",
    technologies: ["Python", "Education"],
    liveLink: "/cs50",
    liveLinkText: "View Project",
    repoLink: "https://github.com/marcogara/Phyton",
    image: "/cs50/CS50P.png",
    imageHint: "python code certificate",
  },
  {
    title: "AuthCore",
    description: "A reusable authorization module built with Spring Boot and Java, designed to be integrated into other projects for robust security.",
    technologies: ["Java", "Spring Boot", "Security", "JPA"],
    liveLink: "/authcore",
    repoLink: "https://github.com/marcogara/authcore",
    video: "/authcore/login1.mp4",
    imageHint: "security lock animation",
  },
];

// Skills Data
const languagesAndFrameworks = [
  "Java", "C/C++", "Python", "HTML/CSS/JS", "Spring", "Spring Boot", "AngularJS"
];

const toolsAndTechnologies = [
  "IntelliJ", "VS Code", "NetBeans", "Git", "UML", "SQL", "PostgreSQL", "Linux", "AutoCAD", "Low-code"
];

export default function Home() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
          
          <section id="hero" className="text-center fade-in mb-20 md:mb-24">
            <div className="flex justify-center mb-6">
               <Image
                src="/profile.png"
                alt="Profile Picture"
                width={128}
                height={128}
                className="rounded-full border-4 border-primary shadow-lg"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-2">It's me, Marco!</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">Full-Stack Developer & Tech Enthusiast</p>
            <p className="max-w-3xl mx-auto text-foreground/80 mb-8">
              From crafting secure Java backends and exploring AI with JavaScript to developing educational content, I thrive on turning diverse and complex challenges into practical, user-focused applications.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <Button asChild variant="outline">
                <a href="mailto:marcogara24@gmail.com"><Mail className="mr-2" /> Email</a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://github.com/marcogara" target="_blank" rel="noopener noreferrer"><Github className="mr-2" /> GitHub</a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://www.linkedin.com/in/marcogaragna/" target="_blank" rel="noopener noreferrer"><Linkedin className="mr-2" /> LinkedIn</a>
              </Button>
            </div>
          </section>

          <Quote
            text="Die Kombination von Low-Code und KI wird die Zukunft der Softwareentwicklung sein."
            author="Karsten Noack"
            title="Scopeland Technology GmbH Gründer & CVO"
          />

          <Separator className="my-16" />

          <section id="about" className="text-center fade-in" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-3xl font-bold mb-8 font-headline">About Me</h2>
            <div className="max-w-3xl mx-auto text-foreground/80 space-y-4 text-left">
              <p>
                Welcome to my project portfolio website! I'm Marco, a passionate and certified developer (IHK), exploring the world of coding and innovation.
              </p>
              <p>
                I am currently working on private projects and am looking for an opportunity as junior full-stack developer and consultant based in Berlin. In my previous roles, I followed the Agile Scrum methodology and handled a wide range of tasks, from gathering requirements in client meetings to implementing software solutions.
              </p>
              <p>
                My goal is to develop user-friendly and efficient solutions that align with customer needs. I invite you to explore my projects, each a chapter in my coding journey, built with dedication and enthusiasm.
              </p>
            </div>
          </section>

          <Separator className="my-16" />

          <section id="skills" className="fade-in mb-20 md:mb-24" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl font-bold text-center mb-12 font-headline">Technical Proficiency</h2>
            <div className="max-w-4xl mx-auto space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-center mb-6">Languages & Frameworks</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {languagesAndFrameworks.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-lg px-4 py-2">{skill}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-center mb-6">Tools & Technologies</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {toolsAndTechnologies.map((tool) => (
                    <Badge key={tool} variant="secondary" className="text-lg px-4 py-2">{tool}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <Separator className="my-16" />

          <section id="projects" className="fade-in" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-3xl font-bold text-center mb-12 font-headline">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project: any, index) => (
                <Card key={index} className="flex flex-col overflow-hidden hover:border-primary/50 transition-colors duration-300 rounded-3xl">
                  <CardHeader className="p-0">
                    <div className="w-full h-48 relative bg-card">
                      {project.video ? (
                        <video
                          src={project.video}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                          data-ai-hint={project.imageHint}
                        />
                      ) : (
                        <div className="bg-white w-full h-full">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className={project.isLogo ? "object-contain p-8" : "object-cover"}
                            data-ai-hint={project.imageHint}
                          />
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col p-6">
                    <CardTitle className="text-xl font-bold mb-2 font-headline">{project.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech: string) => <Badge key={tech} variant="secondary">{tech}</Badge>)}
                    </div>
                    <CardDescription className="flex-1 text-foreground/80 whitespace-pre-wrap">{project.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="p-6 bg-card-foreground/5">
                    <div className="w-full flex justify-between items-center gap-4">
                       <Button asChild variant="outline" size="sm" disabled={project.repoUnavailable}>
                        <a href={project.repoLink} target="_blank" rel="noopener noreferrer"><Github className="mr-2 h-4 w-4" /> {project.repoLinkText || 'Repo'}</a>
                      </Button>
                       <Button asChild size="sm">
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">{project.liveLinkText || 'Live Demo'} <ExternalLink className="ml-2 h-4 w-4" /></a>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>

          <Separator className="my-16" />

          <section id="contact" className="fade-in" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-3xl font-bold text-center mb-12 font-headline">Get In Touch</h2>
            <div className="max-w-2xl mx-auto">
              <ContactForm />
            </div>
          </section>
          
        </div>
      </main>

      <footer className="bg-card text-center py-4 mt-auto">
        <p className="text-muted-foreground">© {year ?? new Date().getFullYear()} Marco Garagna. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

    