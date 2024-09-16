import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useZodForm } from "@/lib/hooks";
import { z } from "astro/zod";
import { socials } from "@/config/socials";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  category: z.string(),
  message: z.string(),
});

function ContactForm() {
  const form = useZodForm({
    schema: contactFormSchema,
  });

  function onSubmit(values: z.infer<typeof contactFormSchema>) {
    window.open(
      "mailto:mail@daniiel.dev?subject=" + 
      encodeURIComponent(values.category + " - Request from daniiel.dev") + 
      "&body=" + 
      encodeURIComponent(values.message.replace(/\n/g, "\n"))
    );
  }

  return (
    <div className="pb-10 pt-10 sm:pb-16 sm:pt-16 lg:overflow-hidden lg:pb-14 lg:pt-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col md:px-6 lg:px-0 gap-8">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900">
              Let's get in touch
            </h1>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full flex-1 space-y-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name*</FormLabel>
                      <FormControl>
                        <Input {...field} />
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
                      <FormLabel>Email*</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription>
                        Please double-check that the email address you've entered matches the one you use in your email client. This ensures you'll receive our messages without any issues.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>What are you reaching out about?</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select the main reason for your inquiry" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Greeting">
                            Just saying hi!
                          </SelectItem>
                          <SelectItem value="Job Offer">Job offer</SelectItem>
                          <SelectItem value="project offer">
                            Project offer
                          </SelectItem>
                          <SelectItem value="Partnership">
                            Partnership
                          </SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message*</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Include details about your topic, any questions you have, or specific information you're looking for. The more details you provide, the better I can assist you."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </div>
          <div className="flex items-center justify-center sm:-mb-48 lg:relative lg:m-0">
            <Card className="w-full h-full flex flex-col">
                <CardHeader>
                  <CardTitle>Email Preview</CardTitle>
                  <CardDescription>Below you can see an example of how the email will look.</CardDescription>
                </CardHeader>
                <CardContent className="bg-slate-50 flex-1">
                    <p className="py-2"><span className="font-semibold">From</span>: {form.watch("name")} <span className={cn(form.watch("email") ? "inline-flex" : "hidden")}>{`<${form.watch("email")}>`}</span></p>
                    <Separator />
                    <p className="py-2"><span className="font-semibold">Subject</span>: {form.watch("category")} <span className={cn(form.watch("category") ? "inline-flex" : "hidden")}>- Request from daniiel.dev</span></p>
                    <Separator />
                    <div className="break-words py-2">
                      {form.watch("message")?.split('\n').map((line, index) => (
                        <p key={index}>
                          {line}
                          {index < form.watch("message").split('\n').length - 1 && <br />}
                        </p>
                      ))}
                    </div>
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ContactForm };
