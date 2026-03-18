import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useSubmitContact } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type FormValues = z.infer<typeof formSchema>;

export function Contact() {
  const { toast } = useToast();
  const [isSuccess, setIsSuccess] = useState(false);
  const contactMutation = useSubmitContact();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: ""
    }
  });

  const onSubmit = async (values: FormValues) => {
    try {
      await contactMutation.mutateAsync({ data: values });
      setIsSuccess(true);
      reset();
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      // Reset success state after a few seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="w-full pt-32 pb-20 lg:pt-40 lg:pb-32 bg-muted/20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Let's build something <span className="text-primary">extraordinary.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              Ready to scale your brand? Fill out the form, and our team will get back to you within 24 hours to schedule a discovery call.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Email Us</h3>
                  <a href="mailto:onyinyechinwankwo3@gmail.com" className="text-muted-foreground mt-1 hover:text-primary transition-colors">onyinyechinwankwo3@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Call Us</h3>
                  <a href="tel:+2347037144260" className="text-muted-foreground mt-1 hover:text-primary transition-colors">07037144260</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">HQ</h3>
                  <p className="text-muted-foreground mt-1">
                    Lagos State, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-card border border-border shadow-xl rounded-3xl p-8 md:p-10 relative overflow-hidden">
              {isSuccess ? (
                <div className="absolute inset-0 bg-card z-10 flex flex-col items-center justify-center p-8 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                  >
                    <CheckCircle2 className="w-20 h-20 text-green-500 mb-6 mx-auto" />
                  </motion.div>
                  <h3 className="text-3xl font-display font-bold mb-4">Message Received!</h3>
                  <p className="text-lg text-muted-foreground">
                    Thanks for reaching out. A strategist will be in touch shortly.
                  </p>
                </div>
              ) : null}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name <span className="text-destructive">*</span></label>
                  <input
                    id="name"
                    type="text"
                    {...register("name")}
                    className={`w-full px-4 py-3 rounded-xl bg-background border ${errors.name ? 'border-destructive' : 'border-input'} focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors`}
                    placeholder="Jane Doe"
                  />
                  {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address <span className="text-destructive">*</span></label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className={`w-full px-4 py-3 rounded-xl bg-background border ${errors.email ? 'border-destructive' : 'border-input'} focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors`}
                    placeholder="jane@example.com"
                  />
                  {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">Company Name (Optional)</label>
                  <input
                    id="company"
                    type="text"
                    {...register("company")}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-input focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                    placeholder="Acme Corp"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">How can we help you? <span className="text-destructive">*</span></label>
                  <textarea
                    id="message"
                    {...register("message")}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl bg-background border ${errors.message ? 'border-destructive' : 'border-input'} focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors resize-none`}
                    placeholder="Tell us about your project goals..."
                  />
                  {errors.message && <p className="text-sm text-destructive mt-1">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full h-14 bg-primary text-primary-foreground font-bold rounded-xl text-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-4 focus:ring-primary/30 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
