
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
                        <h4 className="font-semibold text-md text-foreground/90 pt-4">Horizontal vs Vertical Scanning</h4>
                        <div className="space-y-4">
                            <h4 className="font-semibold text-md text-foreground/90 pt-4">The Mechanics of Scanning</h4>
                            <div>
                                <h5 className="font-semibold text-foreground/90">Ping Sweep</h5>
                                <p className="text-sm text-muted-foreground mt-1">This is one of the most basic network scanning techniques. Ping sweeps are generally used to identify hosts present (and online) on a network. This scan is run by sending an Internet Control Message Protocol (ICMP) packet to the host. If the host is online, it will reply with an ICMP packet of its own. However, it is often blocked by security controls in some organisations nowadays, making it easier to defeat this type of scanning activity.</p>
                            </div>
                            <div>
                                <h5 className="font-semibold text-foreground/90">TCP SYN Scans</h5>
                                <p className="text-sm text-muted-foreground mt-1">A TCP connection is initiated by a three-way handshake, following the steps SYN, SYN-ACK, ACK to establish the connection. Network scanners can sometimes use this functionality of the TCP handshake to identify online hosts and their open ports. The scanner sends a SYN request to the recipient. If a SYN-ACK response is received, it means that the host is online and the port on which the SYN connection was sent is also open. This is a stealthy scan that often blends in with the rest of the network traffic and is harder to detect.</p>
                            </div>
                            <div>
                                <h5 className="font-semibold text-foreground/90">UDP Scan</h5>
                                <p className="text-sm text-muted-foreground mt-1">Another way to identify online hosts and open ports is by sending a (usually empty) UDP packet. If the port is closed, the host sends back an ICMP port unreachable reply. This signifies that the port is closed, but the host is online. In some cases, the scanner will not receive any response until a set timer is reached. If no response is received, the scanner will mark the port as open (but this is not a clear evidence of the port being open). In rare cases, the scanner might receive a UDP packet in response, which is evidence of the port being open. As we can infer, a UDP scan is unreliable and slow as it relies on waiting until it does not receive any response till a timeout is reached.</p>
                            </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-10">
                    <AccordionTrigger className="text-xl font-semibold font-headline">Windows Logging for SOC</AccordionTrigger>
                    <AccordionContent>
                      <div className="py-4 text-left text-foreground/80 space-y-6">
                          <div>
                            <h4 className="font-semibold text-foreground/90">What Is Logged</h4>
                             <p className="text-sm text-muted-foreground mt-1">
                              There are <a href="https://www.ultimatewindowssecurity.com/securitylog/encyclopedia/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">over 500</a> event IDs just for the Security logs and many thousands of various event IDs in total! Still, not all events are logged by default and not all events are properly documented, so in this room we will explore the most helpful logs for daily SOC routines.
                             </p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-md text-foreground/90">Security Log: Authentication</h4>
                            <p className="text-sm text-muted-foreground mt-2">Security logs: Successful Logon (4624) and Failed Logon (4625).</p>
                             <div className="mt-4 border rounded-lg">
                                <div className="grid grid-cols-4 font-semibold border-b">
                                    <div className="p-2 border-r">Event ID</div>
                                    <div className="p-2 border-r col-span-1">Purpose</div>
                                    <div className="p-2 border-r">Logging</div>
                                    <div className="p-2">Limitations</div>
                                </div>
                                <div className="grid grid-cols-4 border-b">
                                    <div className="p-2 border-r text-sm text-muted-foreground">4624<br />(Successful Logon)</div>
                                    <div className="p-2 border-r text-sm text-muted-foreground">Detect suspicious RDP/network logins and identify the attack starting point</div>
                                    <div className="p-2 border-r text-sm text-muted-foreground">Logged on the target machine, the one you are trying to access</div>
                                    <div className="p-2 text-sm text-muted-foreground">Noisy. You will see hundreds of logon events per minute on loaded servers</div>
                                </div>
                                <div className="grid grid-cols-4">
                                    <div className="p-2 border-r text-sm text-muted-foreground">4625<br />(Failed Logon)</div>
                                    <div className="p-2 border-r text-sm text-muted-foreground">Detect brute force, password spraying, or vulnerability scanning</div>
                                    <div className="p-2 border-r text-sm text-muted-foreground">Logged on the target machine, the one you are trying to access</div>
                                    <div className="p-2 text-sm text-muted-foreground">Inconsistent. The logs have lots of caveats that may trick you into the wrong understanding of the event</div>
                                </div>
                            </div>
                           <div className="pt-2 space-y-2">
                             <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="playbook-rdp-brute">
                                    <AccordionTrigger className="text-md font-semibold font-headline">Detect RDP Brute Force (Expand Me)</AccordionTrigger>
                                    <AccordionContent>
                                        <ol className="list-decimal pl-6 mt-4 space-y-2 text-sm text-muted-foreground">
                                            <li>Open Security logs and filter for 4625 event ID (Failed login attempts)</li>
                                            <li>Look for events with Logon Type 3 and 10 (Network and RDP logins)
                                                <ul className="list-[circle] pl-5 mt-2 space-y-1">
                                                    <li>For most modern systems, the logon type will be 3 (since NLA is enabled by default)</li>
                                                    <li>For older or misconfigured systems, the logon type will be 10 (since NLA is not used)</li>
                                                </ul>
                                            </li>
                                            <li>Every event is now worth your attention, but the main red flags are:
                                                <ul className="list-[circle] pl-5 mt-2 space-y-1">
                                                    <li>Many attempted users like admin, helpdesk,  and cctv (Indicates password spraying)</li>
                                                    <li>Many login failures on a single account, usually Administrator (Indicates brute force)</li>
                                                    <li>Workstation Name does not match a corporate pattern (e.g. kali instead of THM-PC-06)</li>
                                                    <li>Source IP is not expected (e.g. your printer trying to connect to your Windows Server)</li>
                                                </ul>
                                            </li>
                                        </ol>
                                    </AccordionContent>
                                </AccordionItem>
                                 <AccordionItem value="playbook-rdp-logons">
                                    <AccordionTrigger className="text-md font-semibold font-headline">Analyse RDP Logons (Expand Me)</AccordionTrigger>
                                    <AccordionContent>
                                        <ol className="list-decimal pl-6 mt-4 space-y-2 text-sm text-muted-foreground">
                                            <li>Open Security logs and filter for 4624 event ID (Successful logins)</li>
                                            <li>Look for events with Logon Type 10 (RDP logins)
                                                <ul className="list-[circle] pl-5 mt-2 space-y-1">
                                                    <li>If NLA is enabled, every RDP logon event is preceded by another 4624 with logon type 3</li>
                                                    <li>To get a real Workstation Name, you need to check the preceding logon type 3 event</li>
                                                </ul>
                                            </li>
                                            <li>Your red flags are either a preceding brute force or a suspicious source IP / hostname</li>
                                            <li>If you assume that the login was indeed malicious, find out what happened next:
                                                 <ul className="list-[circle] pl-5 mt-2 space-y-1">
                                                    <li>Windows assigns a Logon ID to every successful login (e.g. 0x5D6AC)</li>
                                                    <li>Logon ID is a unique session identifier. Save it for future analysis!</li>
                                                </ul>
                                            </li>
                                        </ol>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                           </div>
                          </div>
                           <div className="pt-4">
                            <h4 className="font-semibold text-md text-foreground/90">Security Log: User Management</h4>
                            <p className="text-sm text-muted-foreground mt-2">With some knowledge of authentication and user management events, it is trivial to find out the whole history of any user account. Below is a breakdown of the common event IDs you can use:</p>
                             <div className="mt-4 border rounded-lg">
                                <div className="grid grid-cols-3 font-semibold border-b">
                                    <div className="p-2 border-r">Event ID</div>
                                    <div className="p-2 border-r">Description</div>
                                    <div className="p-2">Malicious Usage</div>
                                </div>
                                <div className="grid grid-cols-3 border-b">
                                    <div className="p-2 border-r text-sm text-muted-foreground">4720 / 4722 / 4738</div>
                                    <div className="p-2 border-r text-sm text-muted-foreground">A user account was created / enabled / changed</div>
                                    <div className="p-2 text-sm text-muted-foreground">Attackers might create a backdoor account or even enable an old one to avoid detection</div>
                                </div>
                                <div className="grid grid-cols-3 border-b">
                                    <div className="p-2 border-r text-sm text-muted-foreground">4725 / 4726</div>
                                    <div className="p-2 border-r text-sm text-muted-foreground">A user account was disabled / deleted</div>
                                    <div className="p-2 text-sm text-muted-foreground">In some advanced cases, threat actors may disable privileged SOC accounts to slow down their actions</div>
                                </div>
                                <div className="grid grid-cols-3 border-b">
                                    <div className="p-2 border-r text-sm text-muted-foreground">4723 / 4724</div>
                                    <div className="p-2 border-r text-sm text-muted-foreground">A user changed their password / User's password was reset</div>
                                    <div className="p-2 text-sm text-muted-foreground">Given enough permissions, threat actors might reset the password and then access the required user</div>
                                </div>
                                <div className="grid grid-cols-3">
                                    <div className="p-2 border-r text-sm text-muted-foreground">4732 / 4733</div>
                                    <div className="p-2 border-r text-sm text-muted-foreground">A user was added to / removed from a security group</div>
                                    <div className="p-2 text-sm text-muted-foreground">Attackers often add their backdoor accounts to privileged groups like "Administrators"</div>
                                </div>
                            </div>
                          </div>
                           <div className="pt-4">
                            <h4 className="font-semibold text-md text-foreground/90">Sysmon: Process Monitoring</h4>
                            <p className="text-sm text-muted-foreground mt-2">Even if you know who is breached, you often don't know how. That's where process monitoring comes in handy, and there are two ways to enable it on Windows:</p>
                             <div className="mt-4 border rounded-lg">
                                <div className="grid grid-cols-3 font-semibold border-b">
                                    <div className="p-2 border-r">Event Code</div>
                                    <div className="p-2 border-r">Purpose</div>
                                    <div className="p-2">Limitations</div>
                                </div>
                                <div className="grid grid-cols-3 border-b">
                                    <div className="p-2 border-r text-sm text-muted-foreground">4688<br/>(Security Log: Process Creation)</div>
                                    <div className="p-2 border-r text-sm text-muted-foreground">Log an event every time a new process is launched, including its command line and parent process details</div>
                                    <div className="p-2 text-sm text-muted-foreground">Disabled by default, you need to enable it by following the <span className="font-semibold">official documentation</span></div>
                                </div>
                                <div className="grid grid-cols-3">
                                    <div className="p-2 border-r text-sm text-muted-foreground">1<br/>(Sysmon: Process Creation)</div>
                                    <div className="p-2 border-r text-sm text-muted-foreground">Replace 4688 event code and provide more advanced fields like process hash and its signature</div>
                                    <div className="p-2 text-sm text-muted-foreground">Sysmon is an external tool not installed by default. Check out the <span className="font-semibold">Sysmon official page</span></div>
                                </div>
                            </div>
                             <div className="pt-4">
                                <h5 className="font-semibold text-foreground/90">Sysmon vs Security Log</h5>
                                <p className="text-sm text-muted-foreground mt-2">Sysmon is a free tool from the Microsoft Sysinternals suite that became a de facto standard for advanced monitoring in addition to the default system logs. For this task, we'll jump right into analyzing Sysmon logs but you can learn more about this great tool in another <span className="font-semibold">TryHackMe room</span>.</p>
                                <p className="text-sm text-muted-foreground mt-2">So, if I were to choose between enabling the basic, noisy 4688 event ID or spending some time installing Sysmon to receive more powerful and flexible logs, I would proceed with Sysmon, and you are encouraged to do the same! Once installed, Sysmon logs are found in Event Viewer under Applications & Services -> Microsoft -> Windows -> Sysmon -> Operational.</p>
                             </div>
                             <div className="pt-6">
                               <Accordion type="single" collapsible className="w-full">
                                   <AccordionItem value="playbook-process-launch">
                                       <AccordionTrigger className="text-md font-semibold font-headline">Analyse Process Launch (Expand Me)</AccordionTrigger>
                                       <AccordionContent>
                                           <ol className="list-decimal pl-6 mt-4 space-y-2 text-sm text-muted-foreground">
                                               <li>Open Sysmon logs and filter for event ID 1</li>
                                               <li>Review the fields from the process and binary info groups. The red flags are:
                                                   <ul className="list-[circle] pl-5 mt-2 space-y-1">
                                                       <li>Image is in an uncommon directory like C:\Temp or C:\Users\Public</li>
                                                       <li>Process is suspiciously named like aa.exe or jqyvpqldou.exe</li>
                                                       <li>Process hash (MD5 or SHA256) matches as malware on VirusTotal</li>
                                                   </ul>
                                               </li>
                                               <li>Review the fields from the parent process group. The red flags are:
                                                   <ul className="list-[circle] pl-5 mt-2 space-y-1">
                                                       <li>Parent matches red flags from step 2 (suspicious name, path, or hash)</li>
                                                       <li>Parent is not expected (e.g. Notepad launching some CMD commands)</li>
                                                   </ul>
                                               </li>
                                               <li>If still in doubt, go up the process tree until you are confident in your verdict:
                                                   <ul className="list-[circle] pl-5 mt-2 space-y-1">
                                                       <li>Find the preceding event where ProcessId equals ParentProcessId in your event</li>
                                                       <li>Analyze it by following steps 2 and 3 (suspicious parent, name, path, or hash)</li>
                                                   </ul>
                                               </li>
                                               <li>Finally, trace the attack chain by filtering all Security and Sysmon events with the same Logon ID</li>
                                           </ol>
                                       </AccordionContent>
                                   </AccordionItem>
                               </Accordion>
                            </div>
                          </div>
                           <div className="pt-6">
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="playbook-1">
                                    <AccordionTrigger className="text-md font-semibold font-headline">Hunt for Backdoored Users (Expand Me)</AccordionTrigger>
                                    <AccordionContent>
                                        <ol className="list-decimal pl-6 mt-4 space-y-2 text-sm text-muted-foreground">
                                            <li>Open Security logs and filter for 4720 / 4732 event IDs</li>
                                            <li>Manually review every event; your red flags are:
                                                <ul className="list-[circle] pl-5 mt-2 space-y-1">
                                                    <li>No one from your IT department can confirm the action</li>
                                                    <li>Changes were made during non-working hours or on weekends</li>
                                                    <li>The subject user's name is unknown or unexpected to you (e.g. "adm.old.2008" creating new Windows users)</li>
                                                    <li>The target user's name does not follow a usual naming pattern (e.g. "backup" instead of "thm_svc_backup")</li>
                                                </ul>
                                            </li>
                                            <li>If you confirmed that the action was malicious, find out the login details:
                                                <ul className="list-[circle] pl-5 mt-2 space-y-1">
                                                    <li>Copy the Logon ID field from your 4720 / 4732 event</li>
                                                    <li>Find the corresponding login event with the same Logon ID</li>
                                                    <li>Refer to the workbooks from the previous task for further analysis</li>
                                                </ul>
                                            </li>
                                        </ol>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                           </div>
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
