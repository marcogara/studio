
import Image from "next/image";
import { Github, ExternalLink } from 'lucide-react';
import { Header } from "@/components/header";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects as allProjects } from "@/lib/projects-data";

const featuredProjectTitles = ["IHK Project", "Supplements Taxi", "SOC Level 1 Learning Path"];
const otherProjects = allProjects.filter(p => !featuredProjectTitles.includes(p.title));

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
          <section id="all-projects">
            <h2 className="text-3xl font-bold text-center mb-12 font-headline">More Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project: any, index) => (
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
                        <a href={project.liveLink} target={project.liveLink.startsWith('/') ? '_self' : '_blank'} rel="noopener noreferrer">{project.liveLinkText || 'Live Demo'} <ExternalLink className="ml-2 h-4 w-4" /></a>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
      <footer className="bg-card text-center py-4 mt-auto">
        <p className="text-muted-foreground">© {new Date().getFullYear()} Marco Garagna. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
