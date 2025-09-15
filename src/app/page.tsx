// import { CallToAction } from "@/components/ui/CallToAction"
import FeatureDivider from "@/components/ui/FeatureDivider"
import Features from "@/components/ui/Features"
import { Hero } from "@/components/ui/Hero"
import { Map } from "@/components/ui/Map/Map"
import Services from "@/components/ui/Services"
import { SolarAnalytics } from "@/components/ui/SolarAnalytics"
import Testimonial from "@/components/ui/Testimonial"
import Hello from "@/components/ui/Hello"


export default function Home() {
  return (
    <main className="relative mx-auto flex flex-col">
      <div className="pt-52">
        <Hero />
      </div>
      <div className="mt-32 px-4 xl:px-0">
        <Features />
      </div>

      <FeatureDivider className="my-12 max-w-6xl bg-gre" />
      <div className="px-4 xl:px-0">
        <Map />
      </div>

      <div className="mt-12 px-4 xl:px-0">
        <Services />
      </div>
      <FeatureDivider className="my-16 max-w-6xl mt-0" />
      
      <div className="mt-0 mb-16 px-4 xl:px-0">
        <SolarAnalytics />
      </div>

      <div className=" px-4 xl:px-0">
        <Testimonial />
      </div>
     
      <div className="mb-40 px-4 xl:px-0 pt-52">
        <Hello />
      </div>
    
    </main>
  )
}
