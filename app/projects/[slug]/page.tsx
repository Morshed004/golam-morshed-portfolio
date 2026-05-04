"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { useQuery } from "@tanstack/react-query";
import {
    AlertCircle,
    ArrowLeft,
    Check,
    CheckCircle2,
    Code2,
    ExternalLink,
    FileText,
    Hash,
    Image as ImageIcon,
    Layers,
    Link2,
    Rocket,
    Share2
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  github?: string;
  demo?: string;
  slug: string;
  stack: string[];
  features: string[]
}

// Share button component
function ShareButton({ title, url }: { title: string; url: string }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: `Check out ${title} project`,
          url: url,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Button variant="outline" size="lg" onClick={handleShare} className="gap-2">
      {copied ? (
        <>
          <Check className="h-5 w-5" />
          Copied!
        </>
      ) : (
        <>
          <Share2 className="h-5 w-5" />
          Share Project
        </>
      )}
    </Button>
  );
}

// Skeleton loader for project details
function ProjectDetailsSkeleton() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-pulse">
          <Skeleton className="h-8 w-32 mb-8" />
          <Skeleton className="h-12 w-3/4 mb-4" />
          <Skeleton className="h-6 w-1/2 mb-8" />
          <div className="flex gap-4 mb-8">
            <Skeleton className="h-11 w-32" />
            <Skeleton className="h-11 w-32" />
          </div>
          <Skeleton className="h-96 rounded-lg mb-8" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <Skeleton className="h-8 w-48" />
              <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-4/6" />
              </div>
              <Skeleton className="h-8 w-48 mt-6" />
              <div className="flex gap-2">
                <Skeleton className="h-6 w-20" />
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-6 w-16" />
              </div>
            </div>
            <div className="space-y-6">
              <Skeleton className="h-64 w-full rounded-lg" />
              <Skeleton className="h-48 w-full rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Error component
function ErrorState({ message }: { message: string }) {
  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="text-center max-w-md mx-auto px-4">
        <AlertCircle className="h-16 w-16 text-destructive mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Failed to Load Project</h2>
        <p className="text-muted-foreground mb-6">{message}</p>
        <div className="flex gap-4 justify-center">
          <Button variant="outline" onClick={() => window.location.reload()}>
            Try Again
          </Button>
          <Button asChild>
            <Link href="/#projects">Back to Projects</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

// Info Card Component
function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-3">
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
}

export default function ProjectDetailsPage() {
  const params = useParams();
  const slug = params.slug as string;

  const {
    data: project,
    isLoading,
    error,
  } = useQuery<Project>({
    queryKey: ["project", slug],
    queryFn: async () => {
      const data = await client.fetch(
        `
        *[_type == "project" && slug.current == $slug][0]{
          title,
          description,
          stack,
          features,
          image,
          "imageAlt": image.alt,
          github,
          demo,
          "slug": slug.current,
        }
      `,
        { slug }
      );

      if (!data) {
        throw new Error("Project not found");
      }

      return data;
    },
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: 1,
  });

  if (isLoading) {
    return <ProjectDetailsSkeleton />;
  }

  if (error || !project) {
    return <ErrorState message={error?.message || "Project not found"} />;
  }

  const projectUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-b from-background to-muted/30">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Back Button */}
          <Link href="/#projects">
            <Button variant="ghost" className="mb-8 gap-2 group">
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </Button>
          </Link>

          {/* Project Header */}
          <div className="max-w-4xl mx-auto">
            {/* Slug Badge */}
            <div className="flex flex-wrap gap-3 mb-4">
              <Badge variant="outline" className="gap-1 font-mono text-xs">
                <Hash className="h-3 w-3" />
                {project.slug}
              </Badge>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-linear-to-r from-foreground via-foreground/90 to-primary/70 bg-clip-text text-transparent">
              {project.title}
            </h1>


            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              {project.github && (
                <Button asChild size="lg" className="gap-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    View Source Code
                  </a>
                </Button>
              )}
              {project.demo && (
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-5 w-5" />
                    Live Demo
                  </a>
                </Button>
              )}
              <ShareButton title={project.title} url={projectUrl} />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {project.image && (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12">
          <div className="relative w-full aspect-video max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={urlFor(project.image).url()}
              alt={project.imageAlt || project.title || "Project image"}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1280px) 90vw, 1200px"
            />
            {project.imageAlt && (
              <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">
                {project.imageAlt}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Project Details */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Long Description */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Project Overview
              </h2>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Tech Stack Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Layers className="h-5 w-5 text-primary" />
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.stack?.map((tech: string) => (
                  <Badge key={tech} variant="secondary" className="text-sm px-3 py-1">
                    <Code2 className="h-3 w-3 mr-1" />
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info Card */}
            <Card>
              <CardContent className="pt-6 space-y-4">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Rocket className="h-4 w-4 text-primary" />
                  Project Information
                </h3>
                <Separator />
                <InfoCard label="Tech Stack" value={`${project.stack?.length || 0} technologies`} />
                <Separator />
                <InfoCard label="Role" value="Solo Developer" />
                <Separator />
                <InfoCard label="Status" value="Production Ready" />
                {project.github && (
                  <>
                    <Separator />
                    <InfoCard label="Repository" value="Available on GitHub" />
                  </>
                )}
                {project.demo && (
                  <>
                    <Separator />
                    <InfoCard label="Live Demo" value="View Online" />
                  </>
                )}
              </CardContent>
            </Card>

            {/* Project Links Card */}
            {(project.github || project.demo) && (
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Link2 className="h-4 w-4 text-primary" />
                    Quick Links
                  </h3>
                  <div className="space-y-3">
                    {project.github && (
                      <Button asChild variant="outline" className="w-full gap-2">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          GitHub Repository
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button asChild className="w-full gap-2">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Image Info Card */}
            {project.image && (
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <ImageIcon className="h-4 w-4 text-primary" />
                    Image Details
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Has Image</span>
                      <span className="text-green-500">✓ Yes</span>
                    </div>
                    {project.imageAlt && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Alt Text</span>
                        <span className="truncate max-w-37.5">{project.imageAlt}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </>
  );
}