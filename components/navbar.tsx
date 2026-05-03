"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ModeToggle } from "./mode-toggle";
// Note: ModeToggle is used as a placeholder below since it's a separate file in your project
// If you have it, you can swap the placeholder button with <ModeToggle />

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md border-b border-border/50"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with Motion */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="shrink-0"
          >
            <a href="#home" className="group flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold text-xl shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                G
              </div>
              <span className="text-xl font-bold tracking-tighter hidden sm:block">
                Morshed
              </span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center bg-secondary/50 border border-border/40 px-2 py-1.5 rounded-full backdrop-blur-sm">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveItem(item.name)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${
                  activeItem === item.name 
                    ? "text-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
                {activeItem === item.name && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-background shadow-sm rounded-full -z-10"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {/* Replace this with your actual <ModeToggle /> */}
            <Button variant="ghost" size="icon" className="rounded-full">
              <div className="h-5 w-5 rounded-full border-2 border-primary border-t-transparent animate-spin-slow hidden" />
              <ModeToggle />
            </Button>
            
            <Button size="sm" className="rounded-full px-5 gap-2 group">
              Contact
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center space-x-2 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full relative z-50 bg-secondary/50"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }}>
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="absolute left-4 right-4 top-20 md:hidden bg-background/95 backdrop-blur-xl border border-border/50 rounded-3xl p-6 shadow-2xl z-40"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className={`text-2xl font-bold tracking-tight py-2 border-b border-border/40 ${
                      activeItem === item.name ? "text-primary" : "text-muted-foreground"
                    }`}
                    onClick={() => {
                      setActiveItem(item.name);
                      setIsOpen(false);
                    }}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <div className="pt-4 flex justify-between items-center">
                  <span className="text-sm font-medium text-muted-foreground">Appearance</span>
                  {/* ModeToggle placeholder */}
                  <Button variant="outline" size="sm" className="rounded-full">
                    <ModeToggle />
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}