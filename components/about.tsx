"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Professional Bio</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  I'm a passionate Full Stack Developer with expertise in building scalable
                  web applications using the modern JavaScript ecosystem. My journey in
                  software development focuses on creating efficient, maintainable, and
                  user-centric solutions.
                </p>
                <p className="text-muted-foreground">
                  With a strong foundation in both frontend and backend technologies,
                  I specialize in developing robust APIs and responsive web applications.
                  I'm dedicated to writing clean code and implementing best practices
                  to deliver high-quality software solutions.
                </p>
                <p className="text-muted-foreground">
                  When I'm not coding, I enjoy contributing to open-source projects,
                  learning new technologies, and sharing knowledge with the developer
                  community.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}