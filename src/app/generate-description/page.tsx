import { Header } from "@/components/header";
import { GenerateDescriptionForm } from "@/components/generate-description-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Quote } from "@/components/quote";

export default function GenerateDescriptionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold font-headline">AI Project Intro Generator</CardTitle>
                <CardDescription className="text-lg text-muted-foreground pt-2">
                  Craft an engaging intro for your project. Fill in the details below and let AI work its magic.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <GenerateDescriptionForm />
              </CardContent>
            </Card>
          </div>
          <Quote
            text="The computer was born to solve problems that did not exist before."
            author="Bill Gates"
          />
        </div>
      </main>
    </div>
  );
}
