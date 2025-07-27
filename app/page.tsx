import Header from "@/components/header"
import IntroSection from "@/components/intro-section"
import WorksSection from "@/components/works-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f5f8ff]">
      <Header />
      <main>
        <IntroSection />
        <WorksSection />
      </main>
      <Footer />
    </div>
  )
}
