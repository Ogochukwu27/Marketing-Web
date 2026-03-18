import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, CheckCircle2, ArrowRight } from "lucide-react";
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
    <div className="w-full pt-32 pb-20 lg:pt-48 lg:pb-32 bg-background relative overflow-hidden min-h-screen">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/3" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6">
              Get in Touch
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-8 leading-tight">
              Let's build something <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">extraordinary.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-16 leading-relaxed">
              Ready to scale your brand? Fill out the form, and our team will get back to you within 24 hours to schedule a discovery call.
            </p>

            <div className="space-y-10">
              {[
                { icon: <Mail className="w-7 h-7 text-primary" />, title: "Email Us", detail: "onyinyechinwankwo3@gmail.com", href: "mailto:onyinyechinwankwo3@gmail.com" },
                { icon: <Phone className="w-7 h-7 text-primary" />, title: "Call Us", detail: "07037144260", href: "tel:+2347037144260" },
                { icon: <MapPin className="w-7 h-7 text-primary" />, title: "Headquarters", detail: "Lagos State, Nigeria", href: null }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    {item.href ? (
                      <a href={item.href} className="text-muted-foreground text-lg hover:text-primary transition-colors">{item.detail}</a>
                    ) : (
                      <p className="text-muted-foreground text-lg">{item.detail}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <div className="bg-card border-2 border-border shadow-2xl rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
              {/* Subtle top border accent */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary to-orange-500" />
              
              {isSuccess ? (
                <div className="absolute inset-0 bg-card z-10 flex flex-col items-center justify-center p-12 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                  >
                    <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mb-8 mx-auto">
                      <CheckCircle2 className="w-12 h-12 text-green-600" />
                    </div>
                  </motion.div>
                  <h3 className="text-4xl font-display font-extrabold mb-4">Message Received!</h3>
                  <p className="text-xl text-muted-foreground">
                    Thanks for reaching out. A strategist will be in touch shortly.
                  </p>
                </div>
              ) : null}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold mb-3 uppercase tracking-wide">Full Name <span className="text-destructive">*</span></label>
                  <input
                    id="name"
                    type="text"
                    {...register("name")}
                    className={`w-full px-6 py-4 rounded-2xl bg-muted/50 border-2 ${errors.name ? 'border-destructive' : 'border-border'} focus:outline-none focus:border-primary focus:bg-background transition-all text-lg`}
                    placeholder="Jane Doe"
                  />
                  {errors.name && <p className="text-sm text-destructive mt-2 font-medium">{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold mb-3 uppercase tracking-wide">Email Address <span className="text-destructive">*</span></label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className={`w-full px-6 py-4 rounded-2xl bg-muted/50 border-2 ${errors.email ? 'border-destructive' : 'border-border'} focus:outline-none focus:border-primary focus:bg-background transition-all text-lg`}
                    placeholder="jane@example.com"
                  />
                  {errors.email && <p className="text-sm text-destructive mt-2 font-medium">{errors.email.message}</p>}
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-bold mb-3 uppercase tracking-wide">Company Name <span className="text-muted-foreground font-normal normal-case">(Optional)</span></label>
                  <input
                    id="company"
                    type="text"
                    {...register("company")}
                    className="w-full px-6 py-4 rounded-2xl bg-muted/50 border-2 border-border focus:outline-none focus:border-primary focus:bg-background transition-all text-lg"
                    placeholder="Acme Corp"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold mb-3 uppercase tracking-wide">How can we help you? <span className="text-destructive">*</span></label>
                  <textarea
                    id="message"
                    {...register("message")}
                    rows={5}
                    className={`w-full px-6 py-4 rounded-2xl bg-muted/50 border-2 ${errors.message ? 'border-destructive' : 'border-border'} focus:outline-none focus:border-primary focus:bg-background transition-all text-lg resize-none`}
                    placeholder="Tell us about your project goals..."
                  />
                  {errors.message && <p className="text-sm text-destructive mt-2 font-medium">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full h-16 bg-primary text-primary-foreground font-bold rounded-2xl text-xl hover:bg-primary/90 hover:scale-[1.02] active:scale-95 transition-all focus:outline-none focus:ring-4 focus:ring-primary/30 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center shadow-lg shadow-primary/20 group"
                >
                  {contactMutation.isPending ? "Sending..." : (
                    <>
                      Send Message
                      <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
