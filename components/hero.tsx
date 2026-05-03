"use client";

import { motion, Variants } from "framer-motion";
import { Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background"
    >
      {/* Subtle Background Accents - Using Theme Primary Color */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Shadcn Badge with Ping Indicator */}
          <motion.div variants={itemVariants} className="mb-8">
            <Badge
              variant="secondary"
              className="px-4 py-1.5 text-sm font-medium border-primary/20 gap-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for new projects
            </Badge>
          </motion.div>

          {/* Headline - Using HSL variables from Shadcn */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4 text-foreground">
              Golam Morshed
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-6">
              Full Stack Developer
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Building scalable web applications with modern technologies.
            Specialized in creating{" "}
            <span className="text-foreground font-semibold">robust APIs</span>{" "}
            and
            <span className="text-foreground font-semibold">
              {" "}
              responsive user interfaces
            </span>
            .
          </motion.p>

          {/* Shadcn Buttons with Motion Wrappers */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                className="rounded-full px-8 h-12 gap-2 shadow-xl shadow-primary/10"
                asChild
              >
                <a
                  href="https://github.com/Morshed004"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                  <ExternalLink className="h-3 w-3 opacity-50" />
                </a>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 h-12 gap-2"
                asChild
              >
                <a href="mailto:golammorshed004@gmail.com">
                  <Mail className="h-5 w-5" />
                  Email Me
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Refined Scroll Indicator */}
          <motion.div variants={itemVariants} className="absolute bottom-10">
            <a
              href="#about"
              className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors group"
            >
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                Discover More
              </span>
              <div className="w-6.5 h-11 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1.5">
                <motion.div
                  animate={{
                    y: [0, 15, 0],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-1.5 h-1.5 bg-primary rounded-full"
                />
              </div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
