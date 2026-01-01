
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, CheckCircle, TerminalSquare, ChevronRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const keyTopics = [
    "Log Analysis",
    "Threat Triage & Prioritization",
    "Incident Response Procedures",
    "Collaboration with Teammates",
    "First Line of Defense Operations"
];

const dailyDuties = [
    "Monitor and investigate various security alerts",
    "Participate in SOC brainstorms and workshops",
    "Cooperate with other teams to keep your company safe",
    "Constantly learn and discover new attacks and defenses"
];

const fiveWs = [
    { name: "Who", description: "Which user logs in, runs the command, or downloads the file" },
    { name: "What", description: "What exact action or event sequence was performed" },
    { name: "When", description: "When exactly did the suspicious activity start and ended" },
    { name: "Where", description: "Which device, IP, or website was involved in the alert" },
    { name: "Why", description: "The most important W, the reasoning for your final verdict" },
];

function SocHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <TerminalSquare className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">Portfolio</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function SocLevel1Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <SocHeader />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold font-headline">SOC Level 1 Learning Path</CardTitle>
                <CardDescription className="text-lg text-muted-foreground pt-2">
                  A comprehensive overview of the skills required for a Security Operations Center Analyst.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Accordion type="multiple" className="w-full" defaultValue={["item-1", "item-3"]}>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-xl font-semibold font-headline">Path Overview</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-foreground/80 text-left py-4">
                          The Security Operations Center (SOC) is a central hub for securing many large organizations, and junior analysts are among the most numerous and demanding roles in a SOC. In the analyst role, you will work with logs, triage and prioritize alerts, collaborate with your teammates and other departments, and be the first line of defense in reacting to cyber incidents. This comprehensive path covers the necessary technical and operational skills to make you a qualified, universal SOC analyst.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-xl font-semibold font-headline">Key Topics Covered</AccordionTrigger>
                    <AccordionContent>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 py-4">
                          {keyTopics.map((topic) => (
                              <li key={topic} className="flex items-center">
                                  <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0" />
                                  <span className="text-foreground/90">{topic}</span>
                              </li>
                          ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-xl font-semibold font-headline">Junior Security Analyst Intro</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-6 py-4">
                        <p className="text-foreground/80 text-left">
                            As a Junior Security Analyst, also called a SOC Level 1 Analyst, you work in a 24/7 SOC team and mostly review the security alerts together with your colleagues. To do it efficiently, you will need practice and skills learned through this path.
                        </p>
                        <div className="space-y-2">
                            <h4 className="font-semibold text-md text-foreground/90">Your Daily Duties</h4>
                            <p className="text-foreground/80 text-left text-sm">During your work shift, you would typically:</p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 pt-2">
                                {dailyDuties.map((duty) => (
                                    <li key={duty} className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                                        <span className="text-foreground/90 text-sm">{duty}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-md text-foreground/90">SOC and Your Team</h4>
                          <p className="text-foreground/80 text-left text-sm">
                            You are not alone in monitoring the alerts and securing the whole company. A lot of people support you with your job. SOC engineers are configuring the security tools, senior analysts are helping with complex attacks, and a manager is trying to keep everything under control. A Security Operations Center (SOC) is your big team that protects the company, each role in its own way. Now, let's meet your colleagues!
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-xl font-semibold font-headline">Soc team internals</AccordionTrigger>
                    <AccordionContent>
                      <div className="py-4 text-left text-foreground/80 space-y-6">
                        <div>
                          <h4 className="font-semibold text-md text-foreground/90">Reporting Guide</h4>
                          <p className="text-foreground/80 text-left text-sm mt-2">
                            Imagine yourself as an L2 analyst, a DFIR team member, or an IT professional who needs to understand the alert. What would you want to see in the report? We recommend you follow the Five Ws approach and include at least these items in the report:
                          </p>
                          <ul className="space-y-4 mt-4">
                            {fiveWs.map((item) => (
                                <li key={item.name} className="flex items-start">
                                    <ChevronRight className="h-5 w-5 text-primary mt-1 mr-2 shrink-0" />
                                    <div>
                                        <h5 className="font-semibold">{item.name}:</h5>
                                        <p className="text-muted-foreground text-sm">{item.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-6">
                    <AccordionTrigger className="text-xl font-semibold font-headline">Phishing Analysis</AccordionTrigger>
                    <AccordionContent>
                      <div className="py-4 text-left text-foreground/80 space-y-6">
                        <div>
                          <h4 className="font-semibold text-md text-foreground/90">Email Header</h4>
                          <p className="text-foreground/80 text-left text-sm mt-2">
                            Let's start with the following email header fields:
                          </p>
                          <ul className="list-disc pl-5 mt-4 space-y-2 text-sm text-muted-foreground">
                            <li><span className="font-semibold text-foreground/90">From</span> - the sender's email address</li>
                            <li><span className="font-semibold text-foreground/90">Subject</span> - the email's subject line</li>
                            <li><span className="font-semibold text-foreground/90">Date</span> - the date when the email was sent</li>
                            <li><span className="font-semibold text-foreground/90">To</span> - the recipient's email address</li>
                          </ul>
                          <div className="mt-6 space-y-2">
                            <p className="text-foreground/80 text-left text-sm">
                              Below is an additional resource from Media Template on how to analyze email headers:
                            </p>
                             <Button asChild variant="link" className="p-0 h-auto">
                                <a href="https://web.archive.org/web/20221219232959/https://mediatemple.net/community/products/all/204643950/understanding-an-email-header" target="_blank" rel="noopener noreferrer">
                                  Understanding an Email Header <ExternalLink className="ml-2 h-4 w-4" />
                                </a>
                              </Button>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-xl font-semibold font-headline">Certificate</AccordionTrigger>
                    <AccordionContent>
                      <div className="w-full relative bg-muted p-8 rounded-lg flex justify-center items-center min-h-[300px] mt-4">
                          <div className="text-center text-muted-foreground">
                            <p className="font-semibold">Certificate image not yet available.</p>
                            <p className="text-sm">Please check back later.</p>
                          </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
