"use client";

import Image from "next/image";
import { Header } from "@/components/header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Play, Square } from "lucide-react";
import { useRef } from "react";

export default function PharmaInventoryPage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleStart = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video play failed:", error);
      });
    }
  };

  const handleStop = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Optional: Reset video to start
    }
  };

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
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-center font-headline">Screen</h3>
                  <div className="aspect-video w-full bg-muted rounded-lg flex items-center justify-center">
                     <video
                      ref={videoRef}
                      className="w-full h-full object-cover rounded-lg"
                      poster="https://placehold.co/600x400.png"
                      data-ai-hint="interface dashboard"
                      controls={false}
                    >
                      <source src="/pharma-inventory/screenStart.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>

                <Separator />
                
                <div className="flex justify-center gap-4">
                  <Button size="lg" onClick={handleStart}>
                    <Play className="mr-2" /> Start
                  </Button>
                  <Button size="lg" variant="destructive" onClick={handleStop}>
                    <Square className="mr-2" /> Stop
                  </Button>
                </div>

                <Separator />

                <div>
                   <h3 className="text-2xl font-semibold mb-4 text-center font-headline">Terminal</h3>
                   <div className="aspect-video w-full bg-muted rounded-lg flex items-center justify-center">
                    <Image
                      src="https://placehold.co/600x400.png"
                      alt="Placeholder Terminal"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover rounded-lg"
                      data-ai-hint="code terminal"
                    />
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
