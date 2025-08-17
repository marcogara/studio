
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
    title: "Smart Interest App",
    description: "A banking application for managing interest rates, built with a robust Java backend and a classic web frontend.",
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
    liveLink: "/IHK/IHK_Importprofil-Tool.pdf",
    liveLinkText: "To Presentation",
    repoLink: "/IHK/doku.pdf",
    repoLinkText: "To Documentation",
    image: "/IHK/320px-IHK_Berlin_Logo.svg.png",
    imageHint: "education certificate",
    isLogo: true,
  },
  {
    title: "Code-Collab",
    description: "A real-time collaborative code editor that allows developers to write, share, and debug code together from anywhere.",
    technologies: ["React", "Node.js", "WebSockets", "Monaco Editor", "PostgreSQL"],
    liveLink: "#",
    repoLink: "#",
    image: "https://placehold.co/600x400.png",
    imageHint: "code editor",
  },
  {
    title: "Data-Viz Dashboard",
    description: "A dynamic dashboard for visualizing complex datasets, featuring interactive charts and data filtering capabilities.",
    technologies: ["SvelteKit", "D3.js", "Python", "Flask", "Pandas"],
    liveLink: "#",
    repoLink: "#",
    image: "https://placehold.co/600x400.png",
    imageHint: "data dashboard",
  },
];

// Skills Data
const languagesAndFrameworks = [
  "Java", "C/C++", "Python", "HTML/CSS/JS", "Spring", "AngularJS"
];

const toolsAndTechnologies = [
  "IntelliJ", "VS Code", "NetBeans", "Git", "UML", "SQL", "PostgreSQL", "Linux", "AutoCAD"
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
              Crafting elegant and efficient solutions for the web. I thrive on turning complex problems into beautiful, intuitive digital experiences.
            </p>
            <div className="flex justify-center items-center gap-4">
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
            text="Programming isn't about what you know; it's about what you can figure out."
            author="Chris Pine"
          />

          <Separator className="my-16" />

          <section id="about" className="fade-in text-center" style={{ animationDelay: '0.1s' }}>
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
                <Card key={index} className="flex flex-col overflow-hidden hover:border-primary/50 transition-colors duration-300">
                  <CardHeader className="p-0">
                    <div className="w-full h-48 relative bg-white">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className={project.isLogo ? "object-contain p-8" : "object-cover"}
                        data-ai-hint={project.imageHint}
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col p-6">
                    <CardTitle className="text-xl font-bold mb-2 font-headline">{project.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech: string) => <Badge key={tech} variant="secondary">{tech}</Badge>)}
                    </div>
                    <CardDescription className="flex-1 text-foreground/80">{project.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="p-6 bg-card-foreground/5">
                    <div className="w-full flex justify-between items-center gap-4">
                       <Button asChild variant="outline" size="sm">
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

    

    
