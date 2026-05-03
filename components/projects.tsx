"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={cardVariants}>
              <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-muted">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-4 pt-4 border-t">
                  <Button asChild variant="ghost" size="sm" className="w-full">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}