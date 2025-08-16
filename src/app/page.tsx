import Image from "next/image";
import { Github, Linkedin, Mail, ArrowRight, Code, ExternalLink } from 'lucide-react';
import { Header } from "@/components/header";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ContactForm } from "@/components/contact-form";
import { Separator } from "@/components/ui/separator";

const skills = [
  { name: "JavaScript (ES6+)", proficiency: 95 },
  { name: "TypeScript", proficiency: 90 },
  { name: "React & Next.js", proficiency: 95 },
  { name: "Node.js & Express", proficiency: 85 },
  { name: "HTML5 & CSS3", proficiency: 98 },
  { name: "Tailwind CSS", proficiency: 90 },
  { name: "Firebase", proficiency: 80 },
  { name: "SQL & NoSQL", proficiency: 85 },
];

const projects = [
  {
    title: "Cyber-Store",
    description: "An e-commerce platform for futuristic gadgets, built with a focus on performance and a seamless user experience.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Firebase"],
    liveLink: "#",
    repoLink: "#",
    image: "https://placehold.co/600x400.png",
    imageHint: "ecommerce tech",
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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
          
          <section id="hero" className="text-center fade-in mb-20 md:mb-24">
            <div className="flex justify-center mb-6">
               <Image
                src="https://placehold.co/128x128.png"
                alt="Profile Picture"
                width={128}
                height={128}
                className="rounded-full border-4 border-primary shadow-lg"
                data-ai-hint="pixel art avatar"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-2">Jane Doe</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">Full-Stack Developer & Tech Enthusiast</p>
            <p className="max-w-3xl mx-auto text-foreground/80 mb-8">
              Crafting elegant and efficient solutions for the web. I thrive on turning complex problems into beautiful, intuitive digital experiences.
            </p>
            <div className="flex justify-center items-center gap-4">
              <Button asChild variant="outline">
                <a href="mailto:jane.doe@example.com"><Mail className="mr-2" /> Email</a>
              </Button>
              <Button asChild variant="outline">
                <a href="#" target="_blank" rel="noopener noreferrer"><Github className="mr-2" /> GitHub</a>
              </Button>
              <Button asChild variant="outline">
                <a href="#" target="_blank" rel="noopener noreferrer"><Linkedin className="mr-2" /> LinkedIn</a>
              </Button>
            </div>
          </section>

          <Separator className="my-16" />

          <section id="skills" className="fade-in mb-20 md:mb-24" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl font-bold text-center mb-12 font-headline">Technical Proficiency</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">{skill.name}</h3>
                    <span className="text-sm text-muted-foreground">{skill.proficiency}%</span>
                  </div>
                  <Progress value={skill.proficiency} aria-label={`${skill.name} proficiency`} />
                </div>
              ))}
            </div>
          </section>

          <Separator className="my-16" />

          <section id="projects" className="fade-in" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-3xl font-bold text-center mb-12 font-headline">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="flex flex-col overflow-hidden hover:border-primary/50 transition-colors duration-300">
                  <CardHeader className="p-0">
                     <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover"
                      data-ai-hint={project.imageHint}
                    />
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col p-6">
                    <CardTitle className="text-xl font-bold mb-2 font-headline">{project.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map(tech => <Badge key={tech} variant="secondary">{tech}</Badge>)}
                    </div>
                    <CardDescription className="flex-1 text-foreground/80">{project.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="p-6 bg-card-foreground/5">
                    <div className="w-full flex justify-between items-center gap-4">
                       <Button asChild variant="outline" size="sm">
                        <a href={project.repoLink} target="_blank" rel="noopener noreferrer"><Github className="mr-2 h-4 w-4" /> Repo</a>
                      </Button>
                       <Button asChild size="sm">
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo <ExternalLink className="ml-2 h-4 w-4" /></a>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>

          <Separator className="my-16" />

          <section id="contact" className="fade-in" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-3xl font-bold text-center mb-4 font-headline">Get In Touch</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Have a question or want to work together? Drop me a message below.
            </p>
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-6">
                <ContactForm />
              </CardContent>
            </Card>
          </section>

        </div>
      </main>
      <footer className="py-6 border-t border-border/40 bg-background/95">
        <div className="container text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} Jane Doe. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
