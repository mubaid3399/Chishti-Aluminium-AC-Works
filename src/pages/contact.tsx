import { FadeIn } from "@/components/ui/fade-in";
import { Phone, Mail, MapPin, ArrowRight, Loader2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { useDocumentMeta } from "@/hooks/use-document-meta";

// Primary WhatsApp number for inquiries (international format, no +)
const WHATSAPP_NUMBER = "923058645051";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  message: z.string().min(10, "Please provide more details about your project"),
});

export default function Contact() {
  useDocumentMeta({
    title: "Contact CHISHTI — Aluminium, Glass & AC Quote in Islamabad / Rawalpindi",
    description: "Request a free site visit & quote for aluminium, glass, UPVC, AC and HVAC work in Islamabad, Rawalpindi & nearby sectors. Call 0305-8645051 / 0308-5346114 or visit our PWD Islamabad workshop.",
    path: "/contact",
  });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setIsSubmitting(true);

    const text =
      `*New Inquiry from Website*%0A%0A` +
      `*Name:* ${encodeURIComponent(values.name)}%0A` +
      `*Email:* ${encodeURIComponent(values.email)}%0A` +
      `*Phone:* ${encodeURIComponent(values.phone)}%0A%0A` +
      `*Project Details:*%0A${encodeURIComponent(values.message)}`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;

    // Small delay so user sees the loading state before WhatsApp opens
    setTimeout(() => {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      toast({
        title: "Opening WhatsApp",
        description: "Your inquiry has been prepared. Please send it from WhatsApp.",
      });
      form.reset();
      setIsSubmitting(false);
    }, 400);
  }

  return (
    <div className="min-h-screen bg-white pt-32">
      {/* Hero */}
      <section className="px-6 md:px-16 py-20 max-w-7xl mx-auto text-center border-b border-gray-100">
        <FadeIn>
          <div className="uppercase tracking-[0.2em] text-sm text-gray-500 font-bold mb-6">Contact Us</div>
          <h1 className="font-serif text-[clamp(1.875rem,7vw,4.5rem)] font-bold leading-[1.1] tracking-tight mb-8 break-words">
            Get a Free Quote in Islamabad or Rawalpindi
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Book a free site visit to discuss aluminium, glass, UPVC or AC / HVAC work anywhere across Islamabad, Rawalpindi and nearby sectors. Our engineers measure on site and quote within 24 hours.
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
                      <div className="space-y-1">
                        <div className="text-xl font-medium">
                          <a href="tel:0515975105" className="hover:underline">051-5975105</a>
                        </div>
                        <div className="text-lg font-medium">
                          <a href="tel:03058645051" className="hover:underline">0305-8645051</a>
                        </div>
                        <div className="text-lg font-medium">
                          <a href="tel:03085346114" className="hover:underline">0308-5346114</a>
                        </div>
                        <div className="text-lg font-medium">
                          <a href="tel:03155385439" className="hover:underline">0315-5385439</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-full shadow-sm">
                      <Mail className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Email Us</div>
                      <div className="text-base sm:text-lg md:text-xl font-medium break-all">
                        <a href="mailto:info@chishtiworks.com" className="hover:underline">info@chishtiworks.com</a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-full shadow-sm">
                      <MapPin className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Visit Us</div>
                      <div className="text-xl font-medium leading-relaxed">
                        P.W.D Street Number 1<br/>
                        Block A Sector A PWD Society<br/>
                        Islamabad, 43000, Pakistan
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 rounded-2xl overflow-hidden aspect-video bg-gray-200">
                <iframe
                  src="https://www.google.com/maps?q=Chishti+Aluminium,+PWD+Housing+Society,+Islamabad,+Pakistan&output=embed"
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
                        <Input placeholder="Enter your full name" className="bg-gray-50 border-transparent focus-visible:ring-black h-12 rounded-xl px-4" {...field} />
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
                          <Input placeholder="yourname@email.com" className="bg-gray-50 border-transparent focus-visible:ring-black h-12 rounded-xl px-4" {...field} />
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
                          <Input placeholder="0305 8645051" className="bg-gray-50 border-transparent focus-visible:ring-black h-12 rounded-xl px-4" {...field} />
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
                          placeholder="Describe your project — aluminium, glass, HVAC, or commercial fit-out requirements..." 
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
                  disabled={isSubmitting}
                  className="w-full rounded-full h-14 text-lg font-bold bg-green-600 text-white hover:bg-green-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Opening WhatsApp...
                    </>
                  ) : (
                    <>
                      <FaWhatsapp className="w-5 h-5" />
                      Send via WhatsApp
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </FadeIn>

        </div>
      </section>
    </div>
  );
}
