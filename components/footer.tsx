import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer id="contact" className="bg-white text-black py-20">
      <div className="container text-center space-y-6">
        <h2 className="text-4xl md:text-6xl font-bold">Let's work together</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Have a project in mind? I'd love to hear about it.
        </p>
        <a href="https://www.linkedin.com/in/camelia-ghasemi-13758b354/">
          <Button size="lg" className="mt-8 rounded-full">
            Contact Me
          </Button>
        </a>
      </div>
    </footer>
  )
}
