"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react"

export default function IntroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const skills = ["UI/UX Design","HTML/CSS", "JavaScript"]

  return (
    <section id="intro" className="min-h-screen pt-20 flex flex-col justify-center relative overflow-hidden">
      <div className="container grid lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-primary">Hello there,</span> I'm Camelia
          </h1>
          <p className="text-lg text-muted-foreground max-w-md">
            I create engaging digital experiences with a focus on user-centered design and modern web technologies.
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="outline" className="px-3 py-1">
                {skill}
              </Badge>
            ))}
          </div>
          <div className="flex gap-4 pt-4">
          </div>
          <div className="flex gap-4 pt-2">
            {/* <Button variant="ghost" size="icon" className="rounded-full" asChild>
              <a href="https://www.linkedin.com/in/camelia-ghasemi-13758b354/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button> */}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative h-[400px] w-[400px] mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl" />
            <Image
              src="/images/erasebg-transformed (1).png"
              alt="Profile illustration"
              width={400}
              height={400}
              className="relative z-10 rounded-3xl object-cover"
              priority
            />
            <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl animate-bounce">
              <span>Hi!</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <Button variant="ghost" size="icon" className="rounded-full" asChild>
          <a href="#works">
            <ArrowDown className="h-6 w-6" />
            <span className="sr-only">Scroll down</span>
          </a>
        </Button>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 h-20 w-20 rounded-full bg-primary/10 blur-xl" />
      <div className="absolute bottom-20 right-10 h-32 w-32 rounded-full bg-secondary/10 blur-xl" />
    </section>
  )
}
