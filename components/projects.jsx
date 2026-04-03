"use client";

import { Brain, Shield, MessageSquare } from "lucide-react";

const projects = [
  {
    title: "Speech Emotion Recognition",
    description:
      "Deep learning model using CNNs to classify emotions from audio data with ~76% accuracy on RAVDESS and EmoDB datasets.",
    tech: ["Python", "TensorFlow", "CNNs", "Librosa"],
    icon: Brain,
  },
  {
    title: "Network Intrusion Detection",
    description:
      "ML classification system using ensemble methods to detect network threats with ~93% efficiency improvement.",
    tech: ["Python", "Scikit-learn", "Random Forest", "Pandas"],
    icon: Shield,
  },
  {
    title: "Medical Chatbot",
    description:
      "Intelligent chatbot for symptom analysis and medical department recommendations using IBM WatsonX.",
    tech: ["WatsonX", "NLP", "Python", "REST API"],
    icon: MessageSquare,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8 md:mb-12">
          <span className="text-primary font-mono text-sm">03.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Projects
          </h2>
          <div className="flex-1 h-px bg-border/50 ml-4 hidden sm:block" />
        </div>

        <div className="grid gap-4 md:gap-6">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="group relative p-5 md:p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 hover:bg-card transition-all duration-500"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                    <project.icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-primary/50 font-mono text-xs hidden sm:block">
                      0{idx + 1}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono rounded-full bg-secondary/50 text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
