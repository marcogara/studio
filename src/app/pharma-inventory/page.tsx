
"use client";

import Image from "next/image";
import { Header } from "@/components/header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronRight } from "lucide-react";

const beanLifecycleIntroduction = "The Spring IoC container is responsible for managing the lifecycle of beans, from instantiation to destruction. Understanding this lifecycle is crucial for developing robust Spring applications, as it allows developers to hook into key phases to customize bean behavior. The five main steps are:";

const lifecycleSteps = [
    { name: "Instantiation", description: "The Spring container creates an instance of the bean." },
    { name: "Populate Properties", description: "Spring injects dependencies and sets property values." },
    { name: "Initialization", description: "The container calls initialization methods, such as those defined by awareness interfaces, post-processors, or custom init-methods." },
    { name: "In Use", description: "The bean is ready to be used by the application." },
    { name: "Destruction", description: "Before the bean is destroyed, the container calls any configured destruction callbacks (e.g., destroy-method)." },
];


export default function PharmaInventoryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold font-headline">Pharmaceutical Inventory Management System</CardTitle>
                <CardDescription className="text-lg text-muted-foreground pt-2">
                  A demonstration of the inventory management interface.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="max-w-2xl mx-auto">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-center font-headline">Screen</h3>
                    <div className="w-full bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                      <Image
                        src="/pharma-inventory/screenMed.png"
                        alt="Pharmaceutical Inventory Screen"
                        width={800}
                        height={450}
                        className="w-full h-auto object-cover"
                        data-ai-hint="interface dashboard"
                      />
                    </div>
                  </div>
                </div>

                <Separator />
                
                <div className="max-w-2xl mx-auto">
                   <h3 className="text-2xl font-semibold mb-4 text-center font-headline">Terminal on Start</h3>
                    <div className="w-full bg-black rounded-lg overflow-hidden">
                      <Image
                        src="/pharma-inventory/terminalMed.png"
                        alt="Terminal for Pharmaceutical Inventory"
                        width={800}
                        height={450}
                        className="w-full h-auto object-cover"
                        data-ai-hint="terminal code"
                      />
                    </div>
                </div>
                
                <Separator />
                
                <div className="max-w-2xl mx-auto">
                   <h3 className="text-2xl font-semibold mb-4 text-center font-headline">Terminal on Stop</h3>
                    <div className="w-full bg-black rounded-lg overflow-hidden">
                      <Image
                        src="/pharma-inventory/TerminalStop.png"
                        alt="Terminal for Pharmaceutical Inventory on Stop"
                        width={800}
                        height={450}
                        className="w-full h-auto object-cover"
                        data-ai-hint="terminal code"
                      />
                    </div>
                </div>

              </CardContent>
            </Card>

            <div className="mt-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold font-headline text-center">The Spring Bean Lifecycle</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <p className="text-center text-foreground/80">{beanLifecycleIntroduction}</p>
                        <ul className="space-y-4">
                            {lifecycleSteps.map((step, index) => (
                                <li key={index} className="flex items-start">
                                    <ChevronRight className="h-5 w-5 text-primary mt-1 mr-2 shrink-0" />
                                    <div>
                                        <h4 className="font-semibold">{step.name}</h4>
                                        <p className="text-muted-foreground">{step.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="text-center pt-4">
                            <Button asChild>
                                <a href="/pharma-inventory/bean-lifecycle-explanation.md" target="_blank" rel="noopener noreferrer">
                                    Read Full Explanation <ExternalLink className="ml-2 h-4 w-4" />
                                </a>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
