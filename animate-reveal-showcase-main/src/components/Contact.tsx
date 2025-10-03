import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'alex.thompson@aiml.edu',
    href: 'mailto:alex.thompson@aiml.edu'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 98765 43210',
    href: 'tel:+919876543210'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Bangalore, India',
    href: '#'
  }
];

export const Contact = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-bold gradient-text">Get In Touch</h2>
          <p className="text-xl text-muted-foreground">
            Let's discuss AI/ML opportunities and collaborations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="glass-intense rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-bold">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-4 p-4 rounded-xl glass hover:bg-accent/10 transition-all group"
                    >
                      <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-110 transition-transform">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="glass rounded-2xl p-8 space-y-4">
              <h3 className="text-xl font-semibold">Available For</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <span>Full-time Opportunities</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <span>Research Collaborations</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <span>Internship Positions</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <span>Freelance Projects</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-intense rounded-2xl p-8">
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Full Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="glass border-border/50 focus:border-accent"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="glass border-border/50 focus:border-accent"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="How can I help you?"
                  className="glass border-border/50 focus:border-accent"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="glass border-border/50 focus:border-accent resize-none"
                />
              </div>

              <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-12 pb-6 space-y-4">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <p className="text-muted-foreground">
            © 2025 Alex Thompson. Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};
