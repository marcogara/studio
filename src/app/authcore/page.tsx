
import { Header } from "@/components/header";
import { AuthCoreLoginForm } from "@/components/authcore-login-form";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Info } from "lucide-react";

export default function AuthCorePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-md mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold font-headline">AuthCore Login</CardTitle>
                <CardDescription className="text-lg text-muted-foreground pt-2">
                  A demo of the reusable authorization module.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AuthCoreLoginForm />
              </CardContent>
              <CardFooter className="flex flex-col items-center text-center gap-4">
                 <div className="text-xs text-muted-foreground flex items-center gap-2">
                    <Info className="h-4 w-4" />
                    <span>This UI is for demonstration only. The Spring Boot backend is not live.</span>
                </div>
                <Button asChild>
                  <a href="https://github.com/marcogara/authcore" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> View Code on GitHub
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
