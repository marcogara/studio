
"use client";

import Image from "next/image";
import { Header } from "@/components/header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const beanLifecycleExplanation = {
  title: "The Spring Bean Lifecycle",
  introduction: "The Spring IoC container is responsible for managing the lifecycle of beans, from instantiation to destruction. Understanding this lifecycle is crucial for developing robust Spring applications, as it allows developers to hook into key phases to customize bean behavior.",
  phases: [
    {
      title: "1. Instantiation",
      description: "The container creates the bean instance from the bean definition, typically by calling its constructor."
    },
    {
      title: "2. Populate Properties (Dependency Injection)",
      description: "Spring injects dependencies into the bean through setter injection or constructor injection."
    },
    {
      title: "3. Set Bean Name",
      description: "If the bean implements the `BeanNameAware` interface, the container calls `setBeanName()` with the bean's ID."
    },
    {
      title: "4. Set Bean Factory",
      description: "If the bean implements the `BeanFactoryAware` interface, the container calls `setBeanFactory()`."
    },
    {
      title: "5. Pre-initialization (BeanPostProcessors)",
      description: "The `postProcessBeforeInitialization()` method of any associated `BeanPostProcessors` is called."
    },
    {
      title: "6. Initialize Beans",
      description: "If the bean implements `InitializingBean`, its `afterPropertiesSet()` method is called. If a custom `init-method` is defined, it will be invoked."
    },
    {
      title: "7. Post-initialization (BeanPostProcessors)",
      description: "The `postProcessAfterInitialization()` method of any `BeanPostProcessors` is called. This is where proxying often occurs."
    },
    {
      title: "8. Bean is Ready",
      description: "The bean is now fully initialized and ready to be used by the application."
    },
    {
      title: "9. Destruction",
      description: "When the container is shut down, if the bean implements `DisposableBean`, its `destroy()` method is called. If a custom `destroy-method` is defined, it will be invoked."
    }
  ]
};

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
                    <div className="aspect-video w-full bg-muted rounded-lg flex items-center justify-center overflow-hidden">
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
                        <CardTitle className="text-2xl font-bold font-headline text-center">Spring Bean Lifecycle Explanation</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-lg font-semibold hover:no-underline">What is the Spring Bean Lifecycle?</AccordionTrigger>
                                <AccordionContent className="pt-4 text-base text-foreground/80">
                                  <p className="mb-4">{beanLifecycleExplanation.introduction}</p>
                                    <ul className="space-y-3">
                                      {beanLifecycleExplanation.phases.map((phase) => (
                                        <li key={phase.title}>
                                          <strong className="font-semibold text-foreground">{phase.title}:</strong>
                                          <p className="text-muted-foreground">{phase.description}</p>
                                        </li>
                                      ))}
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </CardContent>
                </Card>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
