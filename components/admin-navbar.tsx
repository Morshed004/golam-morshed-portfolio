"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export function AdminNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md border-b border-border/50"
          : "py-5 bg-[#1d181a] border-b border-gray-700"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="shrink-0"
          >
            <Link href="/" className="group flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold text-xl shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                G
              </div>

              <span className="hidden sm:block text-xl font-bold tracking-tighter">
                Morshed
              </span>
            </Link>
          </motion.div>

          <div className="md:flex items-center space-x-4">
            <Link href={"/"}>
              <Button variant="outline" className="cursor-pointer">Go to website</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
