
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Github, ExternalLink, Send } from 'lucide-react';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Message sent! (This is just a demo)");
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
          ref={ref}
        >
          <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <p className="text-muted-foreground mb-8">
                I'm interested in AI development opportunities. Feel free to reach out if you have a question or just want to say hi.
              </p>
              
              <div className="space-y-4">
                <a
                  href="mailto:mummadimahesh12@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-lg bg-card hover:bg-card/80 transition-colors"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary contact-icon">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">mummadimahesh12@gmail.com</p>
                  </div>
                </a>
                
                <a
                  href="https://github.com/mummadimaheswar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-card hover:bg-card/80 transition-colors"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary contact-icon">
                    <Github size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <p className="font-medium">mummadimaheswar</p>
                  </div>
                </a>
              </div>
            </div>
            
            <div>
              <a
                href="http://mummadimaheswar.github.io/my-portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <ExternalLink size={16} />
                <span>View Full Portfolio</span>
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-md bg-card border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-md bg-card border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 rounded-md bg-card border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 rounded-md bg-card border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  required
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={16} />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
