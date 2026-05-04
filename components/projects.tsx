"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { ExternalLink, AlertCircle, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectTypes {
  title: string;
  description: string;
  stack: string[];
  imageAlt?: string;
  image?: string;
  github?: string;
  demo?: string;
  slug: string;
}

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

// Skeleton loader component
function ProjectSkeleton() {
  return (
    <Card className="flex flex-col h-full overflow-hidden">
      <CardHeader>
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3 mt-1" />
      </CardHeader>
      <CardContent className="grow">
        <div className="flex flex-wrap gap-2">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-14 rounded-full" />
          <Skeleton className="h-6 w-24 rounded-full" />
        </div>
      </CardContent>
      <CardFooter className="flex gap-4 pt-4 border-t">
        <Skeleton className="h-9 w-full rounded-md" />
      </CardFooter>
    </Card>
  );
}

export function Projects() {
  const {
    data: projects,
    isLoading,
    error,
  } = useQuery<ProjectTypes[]>({
    queryKey: ["projects"],
    queryFn: async () => {
      const data = await client.fetch(`
        *[_type == "project"] | order(_createdAt desc){
          title,
          stack,
          description,
          "slug": slug.current,
          image,
          "imageAlt": image.alt,
          demo,
          github,
          "slug": slug.current,

        }
      `);
      return data;
    },
  });

  // Loading state with skeletons
  if (isLoading) {
    return (
      <section id="projects" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge
              variant="secondary"
              className="mb-4 px-4 py-1 text-sm animate-pulse"
            >
              Loading Projects
            </Badge>
            <h2 className="text-3xl font-bold text-center mb-12">
              Featured Projects
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <ProjectSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section id="projects" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="destructive" className="mb-4 px-4 py-1 text-sm">
              <AlertCircle className="h-3 w-3 mr-1" />
              Error Loading Projects
            </Badge>
            <h2 className="text-3xl font-bold text-center mb-12">
              Featured Projects
            </h2>
          </div>
          <Card className="max-w-md mx-auto text-center border-destructive/20">
            <CardContent className="pt-6">
              <AlertCircle className="h-12 w-12 text-destructive mx-auto mb-4" />
              <p className="text-muted-foreground mb-4">
                Failed to load projects. Please try again later.
              </p>
              <Button
                variant="outline"
                onClick={() => window.location.reload()}
              >
                Retry
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  // Empty state
  if (!projects || projects.length === 0) {
    return (
      <section id="projects" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 px-4 py-1 text-sm">
              <Sparkles className="h-3 w-3 mr-1" />
              Coming Soon
            </Badge>
            <h2 className="text-3xl font-bold text-center mb-12">
              Featured Projects
            </h2>
          </div>
          <Card className="max-w-md mx-auto text-center">
            <CardContent className="pt-6">
              <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground">
                Projects are being added. Check back soon!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 px-4 py-1 text-sm">
            <Sparkles className="h-3 w-3 mr-1" />
            My Work
          </Badge>
          <h2 className="text-3xl font-bold text-center mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my notable projects that showcase my skills and
            expertise
          </p>
          <div className="w-24 h-1 bg-primary rounded-full mx-auto mt-4" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <Link href={`/projects/${project.slug}`} key={project.title || index}>
              <motion.div variants={cardVariants} custom={index}>
                <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group overflow-hidden">
                  {/* Improved image banner with error handling */}
                  {project.image && (
                    <div className="relative h-48 overflow-hidden bg-muted">
                      <Image
                        src={urlFor(project.image).url()}
                        alt={project.imageAlt ?? "Project Image"}
                        width={1920}
                        height={1000}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />

                      {/* Optional: Add loading skeleton */}
                      <div className="absolute inset-0 bg-muted animate-pulse -z-10" />
                    </div>
                  )}

                  {/* Rest of your component remains the same */}
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors line-clamp-1">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grow">
                    <div className="flex flex-wrap gap-2">
                      {project.stack?.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-muted hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-3 pt-4 border-t">
                    {project.github && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="flex-1 gap-2"
                      >
                        <Link
                          href={`/projects/${project.slug}`}
                        >
                          View more
                        </Link>
                      </Button>
                    )}
                    {project.demo && (
                      <Button asChild size="sm" className="flex-1 gap-2">
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {!project.github && !project.demo && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full"
                        disabled
                      >
                        No links available
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
