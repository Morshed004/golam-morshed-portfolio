"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-commerce Platform",
    description: "Full-featured online store with product listing, shopping cart, and secure checkout system. Built for seamless shopping experience.",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
    github: "https://github.com/Morshed004/ecommerce-platform",
    demo: "https://ecommerce-demo.com",
  },
  {
    title: "Modern Blog Platform",
    description: "Multi-user blogging system with Markdown support, rich text rendering, and user authentication. Perfect for content creators.",
    tech: ["Next.js", "Express", "PostgreSQL", "Markdown", "Tailwind"],
    github: "https://github.com/Morshed004/blog-platform",
    demo: "https://blog-demo.com",
  },
  {
    title: "Auth Service API",
    description: "Secure authentication microservice with user management, session handling, and JWT tokens. Ready for integration.",
    tech: ["Hono.js", "Better Auth", "PostgreSQL", "Redis", "TypeScript"],
    github: "https://github.com/Morshed004/auth-service",
    demo: "https://auth-api-demo.com",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-4">
                  <Button asChild variant="outline" size="sm">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      {/* <Github className="mr-2 h-4 w-4" /> */}
                      Code
                    </a>
                  </Button>
                  <Button asChild size="sm">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}