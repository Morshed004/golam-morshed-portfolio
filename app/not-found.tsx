"use client";

import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";
import type {TargetAndTransition} from "framer-motion"
import {
    AlertCircle,
    ArrowLeft,
    Code2,
    Coffee,
    Home,
    Rocket,
    Sparkles
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  const floatingAnimation: TargetAndTransition = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const pulseAnimation: TargetAndTransition = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const rotateAnimation: TargetAndTransition = {
    rotate: [0, 360],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const suggestedLinks = [
    { href: "/", label: "Homepage", icon: Home, description: "Back to main page" },
    { href: "/#projects", label: "Projects", icon: Code2, description: "View my work" },
    { href: "/#skills", label: "Skills", icon: Sparkles, description: "Technical expertise" },
    { href: "/#contact", label: "Contact", icon: Coffee, description: "Get in touch" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-primary/5 via-transparent to-primary/5" />
        <motion.div
          animate={rotateAnimation}
          className="absolute top-20 right-10 w-64 h-64 bg-linear-to-r from-primary/10 to-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={floatingAnimation}
          className="absolute bottom-20 left-10 w-80 h-80 bg-linear-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-white/5 mask-[radial-gradient(ellipse_at_center,white,transparent)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* 404 Number with Animation */}
          <motion.div
            variants={itemVariants}
            className="relative mb-8"
          >
            <motion.div
              animate={pulseAnimation}
              className="relative z-10"
            >
              <h1 className="text-[120px] sm:text-[180px] lg:text-[240px] font-bold leading-none tracking-tighter">
                <span className="bg-linear-to-r from-primary via-primary/70 to-primary/40 bg-clip-text text-transparent">
                  4
                </span>
                <motion.span
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
                  className="bg-linear-to-r from-primary/70 via-primary to-primary/70 bg-clip-text text-transparent inline-block"
                >
                  0
                </motion.span>
                <span className="bg-linear-to-r from-primary/40 via-primary/70 to-primary bg-clip-text text-transparent">
                  4
                </span>
              </h1>
            </motion.div>
            
            {/* Decorative elements around 404 */}
            <motion.div
              animate={floatingAnimation}
              className="absolute top-1/4 -left-10 sm:-left-20"
            >
              <Code2 className="h-12 w-12 text-primary/20" />
            </motion.div>
            <motion.div
              animate={floatingAnimation}
              transition={{ delay: 0.5 }}
              className="absolute bottom-1/4 -right-10 sm:-right-20"
            >
              <AlertCircle className="h-12 w-12 text-primary/20" />
            </motion.div>
          </motion.div>

          {/* Error Message */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Page Not Found
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Oops! It seems the page you're looking for has gone on a coffee break. 
              Let me help you find your way back to the right page.
            </p>
          </motion.div>

          {/* Search Bar (Optional but helpful) */}
          <motion.div
            variants={itemVariants}
            className="max-w-md mx-auto mb-12"
          >
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              size="lg"
              onClick={() => router.back()}
              className="group gap-2"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Go Back
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => router.push("/")}
              className="group gap-2"
            >
              <Home className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
              Return Home
            </Button>
          </motion.div>

          {/* Suggested Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              You might be looking for
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {suggestedLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  custom={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group"
                >
                  <div className="p-4 rounded-xl bg-linear-to-br from-secondary/50 to-secondary/30 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300">
                    <link.icon className="h-8 w-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
                    <div className="font-semibold text-sm">{link.label}</div>
                    <div className="text-xs text-muted-foreground">{link.description}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Fun Fact / Quote */}
          <motion.div
            variants={itemVariants}
            className="mt-12 p-6 rounded-xl bg-linear-to-r from-primary/5 to-primary/10 backdrop-blur-sm border border-primary/10"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <Rocket className="h-4 w-4 text-primary" />
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                Did you know?
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Even the best developers encounter 404 errors sometimes. 
              It's just the internet's way of saying "Keep exploring!"
            </p>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .bg-grid-white\/5 {
          background-image: linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
}