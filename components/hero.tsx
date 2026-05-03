"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Golam Morshed
            </h1>
            <p className="text-xl sm:text-2xl text-primary mb-6">
              Full Stack Developer
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Building scalable web applications with modern JavaScript technologies.
              Specialized in creating robust APIs and responsive user interfaces.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-4 mb-12"
          >
            <Button asChild>
              <a href="https://github.com/Morshed004" target="_blank" rel="noopener noreferrer">
                {/* <Github className="mr-2 h-4 w-4" /> */}
                GitHub
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="mailto:golammorshed004@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Email
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="#about"
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="mr-2">Explore Work</span>
              <ArrowDown className="h-4 w-4 animate-bounce" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}