"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = {
  Frontend: ["React", "Next.js", "TanStack Start", "shadcn/ui", "Tailwind CSS"],
  Backend: ["Express.js", "Hono.js"],
  Databases: ["PostgreSQL", "MongoDB", "Redis", "Convex"],
  "Auth / Services": ["Better Auth", "Clerk"],
};

// Variants for staggered entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Delays each card by 0.1s
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {Object.entries(skillCategories).map(([category, skills]) => (
            <motion.div key={category} variants={itemVariants}>
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50 group">
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary"
                        className="transition-transform hover:scale-105 cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}