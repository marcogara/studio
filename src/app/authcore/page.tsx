
import { Header } from "@/components/header";
import { AuthCoreLoginForm } from "@/components/authcore-login-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
