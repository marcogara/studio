
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
                <Accordion type="multiple" className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-xl font-semibold font-headline">Path Overview</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-foreground/80 text-left py-4">
                          The Security Operations Center (SOC) is a central hub for securing many large organizations, and junior analysts are among the most numerous and demanding roles in a SOC. In the analyst role, you will work with logs, triage and prioritize alerts, collaborate with your teammates and other departments, and be the first line of defense in reacting to cyber incidents. This comprehensive path covers the necessary technical and operational skills to make you a qualified, universal SOC analyst.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-xl font-semibold fontheadline">Key Topics Covered</AccordionTrigger>
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
                        <div>
                          <h4 className="font-semibold text-md text-foreground/90">Alert Reporting</h4>
                          <ul className="list-disc pl-5 mt-4 space-y-2 text-sm text-muted-foreground">
                            <li>Provide a clear and detailed explanation of the reason why the activity is classified as TP or FP</li>
                            <li>Clearly explain why the alert requires escalation and which remediation actions may be required</li>
                            <li>Specify the entities associated with the activity detected by the alert:
                                <ul className="list-[circle] pl-5 mt-2 space-y-1">
                                    <li>Identify who or what was affected</li>
                                    <li>Indicate where the activity occurred</li>
                                    <li>Clarify when the activity took place</li>
                                </ul>
                            </li>
                            <li>Provide all IOCs associated with the activity:
                               <ul className="list-[circle] pl-5 mt-2 space-y-1">
                                    <li>Network Indicators: IP addresses, Ports, Domains, URLs, etc</li>
                                    <li>Host Indicators: File Names, File Paths, Hashes, Signatures, etc.</li>
                                </ul>
                            </li>
                            <li>Specify which goals the threat actor attempted to achieve</li>
                            <li>(Optional) Specify which MITRE techniques or tactics the activity can be related to</li>
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
                            <a href="https://web.archive.org/web/20221219232959/https://mediatemple.net/community/products/all/204643950/understanding-an-email-header" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-all text-sm">
                                https://web.archive.org/web/20221219232959/https://mediatemple.net/community/products/all/204643950/understanding-an-email-header
                            </a>
                          </div>
                        </div>
                         <div>
                          <h4 className="font-semibold text-md text-foreground/90">BEC (Business Email Compromise) means.</h4>
                          <p className="text-foreground/80 text-left text-sm mt-2">
                            A BEC is when an adversary gains control of an internal employee's account and then uses the compromised email account to convince other internal employees to perform unauthorized or fraudulent actions.
                          </p>
                        </div>
                         <div className="space-y-2">
                          <h4 className="font-semibold text-md text-foreground/90">Additional Resources:</h4>
                          <ul className="list-disc pl-5 mt-2 space-y-2 text-sm">
                              <li><a href="https://www.knowbe4.com/phishing" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-all">https://www.knowbe4.com/phishing</a></li>
                              <li><a href="https://www.itgovernance.co.uk/blog/5-ways-to-detect-a-phishing-email" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-all">https://www.itgovernance.co.uk/blog/5-ways-to-detect-a-phishing-email</a></li>
                              <li><a href="https://cheapsslsecurity.com/blog/10-phishing-email-examples-you-need-to-see/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-all">https://cheapsslsecurity.com/blog/10-phishing-email-examples-you-need-to-see/</a></li>
                              <li><a href="https://phishingquiz.withgoogle.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-all">https://phishingquiz.withgoogle.com</a></li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-8">
                    <AccordionTrigger className="text-xl font-semibold font-headline">Network Traffic Basic</AccordionTrigger>
                    <AccordionContent>
                      <div className="py-4 text-left text-foreground/80 space-y-6">
                        <p>A corporate network typically has some predetermined network flows and sources. We can group the sources into two categories:</p>
                        <ul className="list-disc pl-5 mt-4 space-y-2 text-sm text-muted-foreground">
                            <li>Intermediary</li>
                            <li>Endpoint</li>
                        </ul>
                        <p>The flows we can also group into two categories:</p>
                        <ul className="list-disc pl-5 mt-4 space-y-2 text-sm text-muted-foreground">
                            <li>North-South: Traffic that exits or enters the LAN and passes the firewall</li>
                            <li>East-West: Traffic that stays within the LAN (including LAN that extends to the cloud).</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                   <AccordionItem value="item-9">
                    <AccordionTrigger className="text-xl font-semibold font-headline">Network Discovery Basic</AccordionTrigger>
                    <AccordionContent>
                      <div className="py-4 text-left text-foreground/80 space-y-6">
                        <ul className="list-disc pl-5 mt-4 space-y-2 text-sm text-muted-foreground">
                            <li>What assets can be accessed by the attacker?</li>
                            <li>What are the IP addresses, ports, OS, and services running on these assets?</li>
                            <li>What versions of services are running? Does any service have a vulnerability that can be exploited?</li>
                        </ul>
                        <h4 className="font-semibold text-md text-foreground/90 pt-4">External vs Internal Scanning</h4>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-7">
                    <AccordionTrigger className="text-xl font-semibold font-headline">Tools</AccordionTrigger>
                    <AccordionContent>
                      <div className="py-4 text-left text-foreground/80 space-y-6">
                         <div>
                            <p className="text-sm text-muted-foreground">Now that we know how to do full packet captures lets have a look at the tools available to analyze these packets:</p>
                             <ul className="list-disc pl-5 mt-4 space-y-2 text-sm text-muted-foreground">
                                <li>Wireshark</li>
                                <li>TCPdump</li>
                                <li>IPS/IDS like Snort, Suricata and zeek</li>
                            </ul>
                         </div>
                         <div className="flex flex-col space-y-2">
                            <h4 className="font-semibold text-md text-foreground/90">Useful Tools:</h4>
                            <Button asChild variant="link" className="justify-start p-0 h-auto font-normal text-base">
                                <a href="https://gchq.github.io/CyberChef/#recipe=Defang_URL(true,true,true,'Valid%20domains%20and%20full%20URLs')&input=aHR0cDovL3d3dy5zdXNwaWNpb3VzLnRobQ&ieol=CRLF&oeol=CRLF" target="_blank" rel="noopener noreferrer">
                                    CyberChef <ExternalLink className="ml-2 h-4 w-4" />
                                </a>
                            </Button>
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
