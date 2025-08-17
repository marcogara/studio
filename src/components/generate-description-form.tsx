"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { runFlow } from "@genkit-ai/next/client";
import { generateProjectDescriptionFlow } from "@/ai/flows/generate-project-description";
import { Wand2, Copy, Check } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const formSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters."),
  technologies: z.string().min(2, "Please list at least one technology."),
  overview: z
    .string()
    .min(10, "Overview must be at least 10 characters.")
    .max(500, "Overview cannot exceed 500 characters."),
});

type FormData = z.infer<typeof formSchema>;

export function GenerateDescriptionForm() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      technologies: "",
      overview: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setError("");
    setResult("");
    try {
      const { description } = await runFlow(generateProjectDescriptionFlow, data);
      setResult(description);
    } catch (err) {
      console.error(err);
      setError("Failed to generate description. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Title</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Portfolio" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="technologies"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Technologies Used</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Next.js, TypeScript, Tailwind CSS" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="overview"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Brief Overview</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe your project in a few sentences."
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? (
              "Generating..."
            ) : (
              <>
                <Wand2 className="mr-2 h-4 w-4" />
                Generate Description
              </>
            )}
          </Button>
        </form>
      </Form>

      {loading && (
        <div className="mt-8 space-y-4">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      )}

      {error && (
        <Alert variant="destructive" className="mt-8">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {result && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2 font-headline">Generated Description:</h3>
          <div className="relative rounded-md border bg-muted p-4">
            <p className="text-muted-foreground">{result}</p>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 h-8 w-8"
              onClick={handleCopy}
            >
              {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
