"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, useInView, Variants } from "framer-motion";
import { Code2, Heart, Rocket, Shield, Zap } from "lucide-react";
import { useRef } from "react";

const interests = [
  "Open Source",
  "Cloud Architecture",
  "AI Integration",
  "Developer Tools",
  "Performance Optimization",
  "Security Best Practices",
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-1 text-sm">
            Get to Know Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          {/* Main Bio Card */}
          <motion.div variants={itemVariants}>
            <Card className="mb-12 overflow-hidden border-none shadow-xl bg-linear-to-br from-background to-secondary/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              <CardHeader className="relative">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <span className="bg-primary/10 p-2 rounded-lg">
                    <Code2 className="h-6 w-6 text-primary" />
                  </span>
                  Professional Journey
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 relative">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-muted-foreground leading-relaxed"
                >
                  I'm a passionate <span className="text-primary font-semibold">Full Stack Developer</span> with expertise in 
                  building scalable web applications using the modern JavaScript ecosystem. My journey in software development 
                  started 4 years ago, and since then, I've been dedicated to creating efficient, maintainable, and user-centric 
                  solutions that make a difference.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-muted-foreground leading-relaxed"
                >
                  With a strong foundation in both <span className="text-primary font-semibold">frontend</span> and{" "}
                  <span className="text-primary font-semibold">backend</span> technologies, I specialize in developing 
                  robust APIs and responsive web applications. I'm passionate about writing clean code, implementing 
                  best practices, and staying current with emerging technologies to deliver high-quality software solutions.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="text-muted-foreground leading-relaxed"
                >
                  When I'm not coding, you'll find me contributing to <span className="text-primary font-semibold">open-source projects</span>,
                  exploring new technologies, mentoring fellow developers, or sharing knowledge with the developer community.
                  I believe in continuous learning and the power of collaboration.
                </motion.p>
              </CardContent>
            </Card>
          </motion.div>


          {/* What Drives Me */}
          <motion.div variants={itemVariants}>
            <Card className="mb-12 border-none shadow-xl bg-linear-to-br from-background to-secondary/20">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <span className="bg-primary/10 p-2 rounded-lg">
                    <Zap className="h-6 w-6 text-primary" />
                  </span>
                  What Drives Me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-4 rounded-lg bg-secondary/30"
                  >
                    <Shield className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-semibold mb-2">Code Quality</h3>
                    <p className="text-sm text-muted-foreground">
                      Writing clean, maintainable, and well-tested code that stands the test of time.
                    </p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-4 rounded-lg bg-secondary/30"
                  >
                    <Rocket className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-semibold mb-2">Performance</h3>
                    <p className="text-sm text-muted-foreground">
                      Building lightning-fast applications that provide exceptional user experiences.
                    </p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-4 rounded-lg bg-secondary/30"
                  >
                    <Heart className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-semibold mb-2">User Experience</h3>
                    <p className="text-sm text-muted-foreground">
                      Creating intuitive interfaces that users love to interact with.
                    </p>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Interests & Beyond */}
          <motion.div variants={itemVariants}>
            <Card className="border-none shadow-xl bg-linear-to-br from-background to-secondary/20">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <span className="bg-primary/10 p-2 rounded-lg">
                    <Heart className="h-6 w-6 text-primary" />
                  </span>
                  Beyond Coding
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {interests.map((interest, index) => (
                    <motion.div
                      key={interest}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.6 + index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge variant="secondary" className="px-3 py-1 text-sm cursor-default">
                        {interest}
                      </Badge>
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.9 }}
                  className="mt-6 p-6 rounded-lg bg-primary/5 border border-primary/10"
                >
                  <p className="text-center text-muted-foreground italic">
                    "The best way to predict the future is to create it. I'm committed to building 
                    technology that empowers people and solves real-world problems."
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}