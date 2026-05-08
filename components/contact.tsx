// components/contact-minimal.tsx (Alternative minimalist version)
"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import {
  ChevronsLeftRight,
  MapPin,
  MessageCircle,
  Send,
  User,
} from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendMail = () => {
    const name = formData.name?.trim();
    const message = formData.message?.trim();

    if (!name || !message) {
      alert("Please fill in all fields");
      return;
    }

    const subject = encodeURIComponent(`${name} from your portfolio`);
    const body = encodeURIComponent(message);

    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=golammorshed004@gmail.com&su=${subject}&body=${body}`,
      "_blank",
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Open email client
    sendMail();

    // Reset form after a short delay
    setTimeout(() => {
      setFormData({ name: "", message: "" });
      setIsSubmitting(false);
    }, 500);
  };

  const contactItems = [
    {
      icon: ChevronsLeftRight,
      label: "GitHub",
      value: "/Morshed004",
      href: "https://github.com/Morshed004",
    },
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
            <h2 className="text-3xl font-bold mb-4">Let&apos;s Connect</h2>
            <p className="text-muted-foreground">
              Feel free to reach out for collaborations or just a friendly chat
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-start">
            {/* Contact Info Card - Using items-start to prevent stretching */}
            <Card className="border-none shadow-xl h-fit">
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
                        <p className="text-sm text-muted-foreground">
                          {item.value}
                        </p>
                      </div>
                    </div>

                    {"href" in item && (
                      <Button variant="ghost" size="sm" asChild>
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit
                        </a>
                      </Button>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Contact Form - This card can resize independently */}
            <Card className="border-none shadow-xl">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium flex items-center gap-2"
                    >
                      <User className="h-4 w-4 text-primary" />
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium flex items-center gap-2"
                    >
                      <MessageCircle className="h-4 w-4 text-primary" />
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                      required
                      rows={5}
                      className="w-full min-h-40 resize-y"
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Opening Email..."
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
