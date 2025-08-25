
import Image from "next/image";
import { Header } from "@/components/header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function PharmaInventoryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold font-headline">Pharmaceutical Inventory Management System</CardTitle>
                <CardDescription className="text-lg text-muted-foreground pt-2">
                  A demonstration of the inventory management interface.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-center font-headline">Demonstration Window 1</h3>
                  <div className="aspect-video w-full bg-muted rounded-lg flex items-center justify-center">
                    <Image
                      src="https://placehold.co/600x400.png"
                      alt="Placeholder Window 1"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover rounded-lg"
                      data-ai-hint="interface dashboard"
                    />
                  </div>
                </div>

                <Separator />

                <div>
                   <h3 className="text-2xl font-semibold mb-4 text-center font-headline">Demonstration Window 2</h3>
                   <div className="aspect-video w-full bg-muted rounded-lg flex items-center justify-center">
                    <Image
                      src="https://placehold.co/600x400.png"
                      alt="Placeholder Window 2"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover rounded-lg"
                      data-ai-hint="table data"
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
