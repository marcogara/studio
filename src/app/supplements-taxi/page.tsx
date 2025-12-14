
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import placeholderImagesData from "@/lib/placeholder-images.json";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, ShoppingCart, Zap, Package, Leaf } from "lucide-react";
import Link from "next/link";

const placeholderImages: any = placeholderImagesData;

const products = [
  { name: "Vitamin C Boost", price: "12.99", image: placeholderImages.supplement1 },
  { name: "Sunshine Vitamin D", price: "15.49", image: placeholderImages.supplement2 },
  { name: "Plant-Based Protein", price: "29.99", image: placeholderImages.supplement3 },
  { name: "Omega-3 Essentials", price: "24.50", image: placeholderImages.supplement4 },
  { name: "Daily Multivitamin", price: "19.99", image: placeholderImages.supplement5 },
  { name: "Performance Creatine", price: "22.00", image: placeholderImages.supplement6 },
];

function SupplementsHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/supplements-taxi" className="mr-6 flex items-center space-x-2">
          <Leaf className="h-7 w-7 text-primary" />
          <span className="font-bold text-2xl font-headline">Supplements Taxi</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button variant="ghost">Products</Button>
          <Button variant="ghost">About</Button>
          <Button>
            <ShoppingCart className="mr-2 h-5 w-5" />
            Cart
          </Button>
        </div>
      </div>
    </header>
  );
}


export default function SupplementsTaxiPage() {
  return (
    <div className="theme-supplements flex flex-col min-h-screen bg-background text-foreground">
      <SupplementsHeader />
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
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 p-4">
            <h1 className="text-5xl md:text-7xl font-bold font-headline text-white drop-shadow-lg">
              Your Daily Dose of Health
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
              High-quality supplements, delivered to your door in minutes.
            </p>
            <Button size="lg" className="mt-8">
              Shop Bestsellers <ArrowRight className="ml-2" />
            </Button>
          </div>
        </section>

        {/* Intro */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12 text-center">
             <div className="flex flex-col items-center">
                <Zap className="h-10 w-10 text-primary" />
                <h3 className="text-2xl font-bold font-headline mt-4">Fast Delivery</h3>
                <p className="mt-2 text-muted-foreground">Get your order in minutes, not days. We're faster than your average delivery service.</p>
            </div>
             <div className="flex flex-col items-center">
                <Package className="h-10 w-10 text-primary" />
                <h3 className="text-2xl font-bold font-headline mt-4">Quality Assured</h3>
                <p className="mt-2 text-muted-foreground">We source only the highest quality supplements to ensure you get the best results.</p>
            </div>
             <div className="flex flex-col items-center">
                <Leaf className="h-10 w-10 text-primary" />
                <h3 className="text-2xl font-bold font-headline mt-4">Pure & Natural</h3>
                <p className="mt-2 text-muted-foreground">No artificial fillers or junk. Just pure, effective ingredients for your body.</p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 font-headline">Our Bestsellers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Card key={product.name} className="overflow-hidden flex flex-col rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
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
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <CardTitle className="text-xl font-headline">{product.name}</CardTitle>
                    <p className="text-2xl font-bold text-primary mt-2">${product.price}</p>
                  </CardContent>
                  <CardFooter className="p-4 bg-muted/30">
                    <Button className="w-full">
                      <ShoppingCart className="mr-2" /> Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
             <div className="text-center mt-12">
                <Button size="lg" variant="outline">
                    View All Products
                </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-card text-card-foreground border-t">
            <div className="container mx-auto px-4 text-center">
                <p className="text-muted-foreground">&copy; {new Date().getFullYear()} Supplements Taxi. All rights reserved.</p>
            </div>
        </footer>
      </main>
    </div>
  );
}
