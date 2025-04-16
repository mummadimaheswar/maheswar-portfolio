
import { useState, useEffect, useRef } from 'react';
import { Github, Mail, MapPin, Phone, Calendar, GraduationCap, Award, Briefcase, ExternalLink } from 'lucide-react';
import ScrollToTop from '../components/ScrollToTop';

const Index = () => {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    });

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addSectionRef = (id: string, element: HTMLElement | null) => {
    if (element) {
      sectionRefs.current[id] = element;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      
      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-6 py-32">
          <div className="animate-fade-up space-y-6 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground typing-effect">
              MUMMADI MAHESWAR REDDY
            </h1>
            <div className="flex flex-wrap gap-4 text-muted-foreground">
              <a href="mailto:mummadimahesh12@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={18} />
                <span>mummadimahesh12@gmail.com</span>
              </a>
              <span className="flex items-center gap-2">
                <Phone size={18} />
                <span>+91 6303863875</span>
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Hyderabad</span>
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Career Objective */}
      <section 
        ref={(el) => addSectionRef('career', el)}
        id="career"
        className={`py-20 ${isVisible['career'] ? 'section-fade visible' : 'section-fade'}`}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Career Objective</h2>
          <div className="prose prose-lg max-w-3xl">
            <p className="text-muted-foreground leading-relaxed">
              Artificial Intelligence (AI) is transforming industries, and I am passionate about leveraging AI to solve complex challenges, optimize business processes, and enhance user experiences. My ultimate goal is to become an AI Developer, contributing to the field by designing intelligent systems and implementing innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section 
        ref={(el) => addSectionRef('education', el)}
        id="education"
        className={`py-20 bg-secondary/50 ${isVisible['education'] ? 'section-fade visible' : 'section-fade'}`}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Education</h2>
          <div className="space-y-12">
            <div className="project-card bg-background p-8 rounded-lg shadow-lg">
              <div className="flex items-start gap-4">
                <GraduationCap className="text-primary" size={24} />
                <div>
                  <h3 className="text-xl font-semibold">Bachelor of Technology (B.Tech)</h3>
                  <p className="text-muted-foreground">Computer Science & Engineering</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    <span className="flex items-center gap-2">
                      <Calendar size={16} />
                      2022 - 2026
                    </span>
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    <span className="flex items-center gap-2">
                      <MapPin size={16} />
                      Nalla Malla Reddy Engineering College
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="project-card bg-background p-8 rounded-lg shadow-lg">
                <div className="flex items-start gap-4">
                  <GraduationCap className="text-primary" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold">Senior Secondary Education (XII)</h3>
                    <p className="text-muted-foreground">Science Stream</p>
                    <p className="text-sm text-muted-foreground mt-2">Narayana Junior College, Kadapa | 2022</p>
                    <p className="text-sm font-semibold mt-2">Percentage: 90.00%</p>
                  </div>
                </div>
              </div>

              <div className="project-card bg-background p-8 rounded-lg shadow-lg">
                <div className="flex items-start gap-4">
                  <GraduationCap className="text-primary" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold">Secondary Education (X)</h3>
                    <p className="text-sm text-muted-foreground mt-2">Bhashyam High School, Kadapa | 2020</p>
                    <p className="text-sm font-semibold mt-2">Percentage: 98.30%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section 
        ref={(el) => addSectionRef('certifications', el)}
        id="certifications"
        className={`py-20 ${isVisible['certifications'] ? 'section-fade visible' : 'section-fade'}`}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Certifications & Training</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "AI Developer",
                org: "IBM",
                date: "Aug 2024 - Present",
                description: "Learned to build AI models and implement machine learning algorithms using Python."
              },
              {
                title: "Generative AI with Vertex AI",
                org: "Google",
                date: "Aug 2024",
                description: "Explored fundamentals of generative AI and implementation on Google Cloud's Vertex AI platform."
              },
              {
                title: "Natural Language Processing (NLP)",
                org: "Microsoft",
                date: "Jul 2024 - Aug 2024",
                description: "Developed proficiency in NLP techniques and chatbot development."
              },
              {
                title: "Computer Vision in Microsoft Azure",
                org: "Microsoft",
                date: "Jul 2024",
                description: "Worked on computer vision applications using Microsoft Azure AI services."
              }
            ].map((cert, index) => (
              <div key={index} className="project-card bg-background p-8 rounded-lg shadow-lg">
                <div className="flex items-start gap-4">
                  <Award className="text-primary" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold">{cert.title}</h3>
                    <p className="text-muted-foreground">{cert.org}</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      <span className="flex items-center gap-2">
                        <Calendar size={16} />
                        {cert.date}
                      </span>
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">{cert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section 
        ref={(el) => addSectionRef('projects', el)}
        id="projects"
        className={`py-20 bg-secondary/50 ${isVisible['projects'] ? 'section-fade visible' : 'section-fade'}`}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Image Captioning using Gradio",
                date: "Jan 2025",
                description: "Developed an AI-powered image captioning system using deep learning models with a user-friendly Gradio interface."
              },
              {
                title: "Simple Chatbot with Open Source LLMs",
                date: "Dec 2024 - Jan 2025",
                description: "Built a chatbot using open-source large language models from Hugging Face with Python-based NLP pipelines."
              },
              {
                title: "Sentiment Analysis",
                date: "Nov 2024",
                description: "Developed a sentiment analysis model to analyze text-based emotions and classify sentiments."
              },
              {
                title: "Emotion Detector",
                date: "Nov 2024",
                description: "Built an AI-powered emotion detection system to analyze user emotions in text data."
              }
            ].map((project, index) => (
              <div key={index} className="project-card bg-background p-8 rounded-lg shadow-lg">
                <div className="flex items-start gap-4">
                  <Briefcase className="text-primary" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      <span className="flex items-center gap-2">
                        <Calendar size={16} />
                        {project.date}
                      </span>
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Link & Contact */}
      <section 
        ref={(el) => addSectionRef('contact', el)}
        id="contact"
        className={`py-20 ${isVisible['contact'] ? 'section-fade visible' : 'section-fade'}`}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center space-y-8">
            <h2 className="text-3xl font-bold">Portfolio & Contact</h2>
            <a 
              href="http://mummadimaheswar.github.io/my-portfolio/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <ExternalLink size={20} />
              <span className="text-lg">View Full Portfolio</span>
            </a>
            <div className="flex gap-6">
              <a 
                href="mailto:mummadimahesh12@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={24} />
              </a>
              <a 
                href="https://github.com/mummadimaheswar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
