
import Image from "next/image";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { placeholderImages } from "@/lib/placeholder-images";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, ShoppingCart, Zap } from "lucide-react";

const products = [
  { name: "Vitamin C Boost", price: "12.99", image: placeholderImages.supplement1 },
  { name: "Sunshine Vitamin D", price: "15.49", image: placeholderImages.supplement2 },
  { name: "Plant-Based Protein", price: "29.99", image: placeholderImages.supplement3 },
  { name: "Omega-3 Essentials", price: "24.50", image: placeholderImages.supplement4 },
  { name: "Daily Multivitamin", price: "19.99", image: placeholderImages.supplement5 },
  { name: "Performance Creatine", price: "22.00", image: placeholderImages.supplement6 },
];

export default function SupplementsTaxiPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] w-full flex items-center justify-center text-center text-white">
          <Image
            src={placeholderImages.supplementsHero.src}
            alt="Supplements"
            fill
            className="object-cover"
            data-ai-hint={placeholderImages.supplementsHero.hint}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 p-4">
            <h1 className="text-5xl md:text-7xl font-bold font-headline text-primary-foreground drop-shadow-lg">Supplements Taxi</h1>
            <p className="mt-4 text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto drop-shadow-md">
              Your daily dose of health, delivered in minutes.
            </p>
            <Button size="lg" className="mt-8">
              Shop Now <ArrowRight className="ml-2" />
            </Button>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 text-center">
            <Zap className="mx-auto h-12 w-12 text-primary" />
            <h2 className="text-3xl font-bold font-headline mt-4">Fast Delivery, Peak Wellness</h2>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
              We deliver high-quality supplements right to your doorstep, so you never miss a beat in your health journey. Get what you need, when you need it.
            </p>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 font-headline">Our Bestsellers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Card key={product.name} className="overflow-hidden flex flex-col rounded-2xl hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="p-0">
                    <div className="aspect-square w-full relative">
                      <Image
                        src={product.image.src}
                        alt={product.name}
                        fill
                        className="object-cover"
                        data-ai-hint={product.image.hint}
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 flex-1 flex flex-col">
                    <CardTitle className="text-xl font-headline">{product.name}</CardTitle>
                    <p className="text-2xl font-bold text-primary mt-2">${product.price}</p>
                  </CardContent>
                  <CardFooter className="p-4">
                    <Button className="w-full">
                      <ShoppingCart className="mr-2" /> Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Separator />

        {/* Footer */}
        <footer className="py-12 bg-card text-card-foreground">
            <div className="container mx-auto px-4 text-center">
                <p className="text-muted-foreground">&copy; {new Date().getFullYear()} Supplements Taxi. All rights reserved.</p>
            </div>
        </footer>
      </main>
    </div>
  );
}
