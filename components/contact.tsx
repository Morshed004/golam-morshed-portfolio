// components/contact-minimal.tsx (Alternative minimalist version)
"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckCircle, ChevronsLeftRight, Copy, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("golammorshed004@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactItems = [
    { icon: Mail, label: "Email", value: "golammorshed004@gmail.com", action: copyEmail, actionLabel: "Copy" },
    { icon: ChevronsLeftRight, label: "GitHub", value: "/Morshed004", href: "https://github.com/Morshed004" },
    { icon: MapPin, label: "Location", value: "Dhaka, Bangladesh" },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Get in Touch
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
            <p className="text-muted-foreground">
              Feel free to reach out for collaborations or just a friendly chat
            </p>
          </div>

          <Card className="border-none shadow-xl">
            <CardContent className="p-6 space-y-4">
              {contactItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between p-4 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{item.label}</p>
                      <p className="text-sm text-muted-foreground">{item.value}</p>
                    </div>
                  </div>
                  
                  {'action' in item ? (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={item.action}
                      className="gap-2"
                    >
                      {copied ? (
                        <>
                          <CheckCircle className="h-4 w-4" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" />
                          {item.actionLabel}
                        </>
                      )}
                    </Button>
                  ) : 'href' in item ? (
                    <Button variant="ghost" size="sm" asChild>
                      <a href={item.href} target="_blank" rel="noopener noreferrer">
                        Visit
                      </a>
                    </Button>
                  ) : null}
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}