"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-6 px-4 sm:px-6 md:px-12 border-t border-border/30">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/sriram32005/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/sriram32005"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="mailto:sriram32005@gmail.com"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>

          <p className="text-xs text-muted-foreground">
            Designed & Built by{" "}
            <span className="text-primary font-medium">Sriram S</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
