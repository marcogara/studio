
import Image from "next/image";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function CS50Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold font-headline">CS50's Introduction to Programming with Python</CardTitle>
                <CardDescription className="text-lg text-muted-foreground pt-2">
                  Final Project & Certificate of Completion from HarvardX.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-center font-headline">Final Project Video</h3>
                  <div className="aspect-video w-full">
                    <iframe
                      className="w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/AS2_wV_crCQ"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>

                <Separator />

                <div>
                   <h3 className="text-2xl font-semibold mb-4 text-center font-headline">Certificate</h3>
                  <div className="w-full relative bg-white p-4 rounded-lg flex justify-center">
                      <div className="w-full md:w-3/5">
                        <Image
                            src="/cs50/CS50P.png"
                            alt="CS50 Python Certificate"
                            width={1275}
                            height={1650}
                            className="w-full h-auto"
                        />
                      </div>
                  </div>
                   <div className="text-center mt-4">
                     <Button asChild>
                        <a href="/cs50/CS50P.pdf" target="_blank" rel="noopener noreferrer">
                          View Official Certificate PDF <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
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
