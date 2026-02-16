import { ContactForm } from '../ContactForm';
import { Mail, Linkedin, Github } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Let's <span className="gradient-text">Work Together</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Get in touch and let's create something amazing together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-display font-semibold mb-4">Get in Touch</h3>
                <p className="text-muted-foreground mb-6">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your
                  vision.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:contact@example.com"
                  className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="font-medium">contact@example.com</div>
                  </div>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Linkedin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">LinkedIn</div>
                    <div className="font-medium">Connect with me</div>
                  </div>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Github className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">GitHub</div>
                    <div className="font-medium">View my code</div>
                  </div>
                </a>
              </div>

              <div className="p-6 rounded-lg bg-accent/5 border border-accent/20">
                <h4 className="font-semibold mb-2">Response Time</h4>
                <p className="text-sm text-muted-foreground">
                  I typically respond within 24 hours during business days. For urgent inquiries, please mention it in
                  your message.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
