"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function WorksSection() {
  const projects = [
     {
       id: 1,
       title: "Denja",
       description: "A modern online store with seamless shopping experience",
       image: "/images/image_2025-07-27_16-47-29.png",
     },
    {
      id: 2,
      title: "Mental Health Tracker",
      description: "A clean, empathetic UI for a mental health tracking web app. Users can log moods, track emotional trends over time, and view personalized insights. The design focuses on minimal distractions and calm visuals to support mental well-being.",
      image: "/images/image_2025-07-27_16-52-49.png",
    },
    {
      id: 3,
      title: "Food Menu",
      description: "A stylish food menu interface for a cafe or delivery app. Users can filter by type, price, and ingredients. The layout balances modern visuals with functional UX.",
      image: "/images/image_2025-07-26_14-28-02.png",
    },
    // {
    //   id: 4,
    //   title: "Music App",
    //   description: "A mobile-first music discovery app UI focused on dreamy, ambient, and indie albums. Designed for smooth navigation, with a dark, immersive aesthetic and bold cover visua",
    //   image: "/images/image_2025-07-27_11-12-44.png",
    // },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="works" className="py-20 bg-white">
      <div className="container space-y-16">
        <div className="text-left space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">My Works</h2>
          <p className="text-muted-foreground max-w-2xl">Explore my recent projects and creative endeavors.</p>
        </div>

        <motion.div
          className="space-y-20"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div key={project.id} variants={item}>
              <div
                className={`grid lg:grid-cols-3 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={`space-y-4 ${index % 2 === 1 ? "lg:col-start-3" : ""}`}>
                  <h3 className="text-xl md:text-2xl font-bold">{project.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
                <div className={`lg:col-span-2 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div className="relative overflow-hidden rounded-2xl group h-[600px] md:h-[700px]">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
