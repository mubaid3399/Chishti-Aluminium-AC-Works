import { FadeIn } from "@/components/ui/fade-in";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  message: z.string().min(10, "Please provide more details about your project"),
});

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent",
      description: "We've received your inquiry and will be in touch shortly.",
    });
    form.reset();
  }

  return (
    <div className="min-h-screen bg-white pt-32">
      {/* Hero */}
      <section className="px-6 md:px-16 py-20 max-w-7xl mx-auto text-center border-b border-gray-100">
        <FadeIn>
          <div className="uppercase tracking-[0.2em] text-sm text-gray-500 font-bold mb-6">Contact Us</div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-8">
            Let's Discuss Your Project
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Reach out to schedule a consultation or discuss your aluminium, glass, or cooling project requirements.
          </p>
        </FadeIn>
      </section>

      {/* Two Column Layout */}
      <section className="px-6 md:px-16 py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <FadeIn direction="right">
            <div className="bg-gray-50 p-10 rounded-3xl h-full flex flex-col justify-between">
              <div>
                <h2 className="font-serif text-3xl font-bold mb-8">Get In Touch</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-full shadow-sm">
                      <Phone className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Call Us</div>
                      <div className="text-xl font-medium">
                        <a href="tel:03155385439" className="hover:underline">0315 5385439</a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-full shadow-sm">
                      <Mail className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Email Us</div>
                      <div className="text-xl font-medium">info@chishtialuminium.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-full shadow-sm">
                      <MapPin className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Visit Us</div>
                      <div className="text-xl font-medium leading-relaxed">
                        Main Market<br/>
                        Commercial Area<br/>
                        Lahore, Pakistan
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 rounded-2xl overflow-hidden aspect-video bg-gray-200">
                {/* Map Placeholder */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217892.06498049!2d74.22327099999999!3d31.4203956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1709664536643!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale contrast-125 opacity-80"
                />
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn direction="left">
            <h2 className="font-serif text-3xl font-bold mb-8">Send a Message</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-black font-bold">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" className="bg-gray-50 border-transparent focus-visible:ring-black h-12 rounded-xl px-4" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-black font-bold">Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" className="bg-gray-50 border-transparent focus-visible:ring-black h-12 rounded-xl px-4" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-black font-bold">Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="(555) 123-4567" className="bg-gray-50 border-transparent focus-visible:ring-black h-12 rounded-xl px-4" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-black font-bold">Project Details</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your project requirements..." 
                          className="bg-gray-50 border-transparent focus-visible:ring-black min-h-[160px] rounded-xl p-4 resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full rounded-full h-14 text-lg font-bold bg-black text-white hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                >
                  Send Inquiry <ArrowRight className="w-5 h-5" />
                </Button>
              </form>
            </Form>
          </FadeIn>

        </div>
      </section>
    </div>
  );
}
