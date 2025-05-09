'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { generateBrewingGuide } from '@/ai/flows/generate-brewing-guide';
import type { GenerateBrewingGuideOutput } from '@/ai/flows/generate-brewing-guide';
import { Loader2, Wand2, AlertTriangle } from 'lucide-react';

const askFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  question: z.string().min(10, { message: 'Question must be at least 10 characters.' }).max(500, { message: 'Question cannot exceed 500 characters.' }),
});

type AskFormValues = z.infer<typeof askFormSchema>;

export default function AskForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [brewingGuide, setBrewingGuide] = useState<GenerateBrewingGuideOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<AskFormValues>({
    resolver: zodResolver(askFormSchema),
    defaultValues: {
      name: '',
      email: '',
      question: '',
    },
  });

  async function onSubmit(data: AskFormValues) {
    setIsLoading(true);
    setBrewingGuide(null);
    setError(null);

    try {
      const result = await generateBrewingGuide({ question: data.question });
      setBrewingGuide(result);
      toast({
        title: 'Brewing Guide Generated!',
        description: 'Your personalized coffee brewing guide is ready below.',
      });
    } catch (e) {
      console.error('Error generating brewing guide:', e);
      const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
      setError(`Failed to generate guide: ${errorMessage}`);
      toast({
        title: 'Error',
        description: 'Could not generate brewing guide. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="font-playfair text-2xl text-primary">Submit Your Coffee Question</CardTitle>
          <CardDescription>Our AI Barista is ready to help you brew the perfect cup.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Coffee Enthusiast" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="question"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Coffee Question</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., How do I make the best French press coffee for a dark roast?"
                        className="resize-none h-32"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Generating Guide...
                  </>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-5 w-5" />
                    Get Brewing Guide
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {isLoading && (
        <div className="mt-8 text-center">
          <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary" />
          <p className="mt-4 text-lg text-muted-foreground">Brewing up your guide...</p>
        </div>
      )}

      {error && (
        <Card className="mt-8 border-destructive bg-destructive/10">
          <CardHeader>
            <CardTitle className="text-destructive flex items-center">
              <AlertTriangle className="mr-2 h-5 w-5" /> Error Generating Guide
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive-foreground">{error}</p>
          </CardContent>
        </Card>
      )}

      {brewingGuide && !isLoading && (
        <Card className="mt-8 shadow-lg">
          <CardHeader>
            <CardTitle className="font-playfair text-2xl text-primary">Your Personalized Brewing Guide</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-invert max-w-none text-foreground/90 whitespace-pre-wrap">
              {brewingGuide.brewingGuide}
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
}
