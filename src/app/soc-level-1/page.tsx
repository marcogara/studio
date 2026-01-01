
import Image from "next/image";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, CheckCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";

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

export default function SocLevel1Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
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
              <CardContent className="space-y-8">
                <div>
                    <h3 className="text-2xl font-semibold mb-4 text-center font-headline">Path Overview</h3>
                    <p className="text-foreground/80 text-center max-w-3xl mx-auto">
                        The Security Operations Center (SOC) is a central hub for securing many large organizations, and junior analysts are among the most numerous and demanding roles in a SOC. In the analyst role, you will work with logs, triage and prioritize alerts, collaborate with your teammates and other departments, and be the first line of defense in reacting to cyber incidents. This comprehensive path covers the necessary technical and operational skills to make you a qualified, universal SOC analyst.
                    </p>
                </div>

                <Separator />

                 <div>
                    <h3 className="text-2xl font-semibold mb-4 text-center font-headline">Key Topics Covered</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 max-w-2xl mx-auto">
                        {keyTopics.map((topic) => (
                            <li key={topic} className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0" />
                                <span className="text-foreground/90">{topic}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <Separator />

                <div>
                    <h3 className="text-2xl font-semibold mb-4 text-center font-headline">Your Daily Duties</h3>
                    <p className="text-foreground/80 text-center max-w-3xl mx-auto mb-6">
                        As a Junior Security Analyst, also called a SOC Level 1 Analyst, you work in a 24/7 SOC team and mostly review the security alerts together with your colleagues. To do it efficiently, you will need practice and skills learned through this path. During your work shift, you would typically:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 max-w-3xl mx-auto">
                        {dailyDuties.map((duty) => (
                            <li key={duty} className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                                <span className="text-foreground/90">{duty}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <Separator />

                <div>
                   <h3 className="text-2xl font-semibold mb-4 text-center font-headline">Certificate</h3>
                  <div className="w-full relative bg-muted p-8 rounded-lg flex justify-center items-center min-h-[300px]">
                      <div className="text-center text-muted-foreground">
                        <p className="font-semibold">Certificate image not yet available.</p>
                        <p className="text-sm">Please check back later.</p>
                      </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
