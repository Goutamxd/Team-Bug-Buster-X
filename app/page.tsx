import Hero from "@/components/Hero"
import FeatureSection from "@/components/FeatureSection"
import AppointmentSection from "@/components/AppointmentSection"
import BedAvailabilitySection from "@/components/BedAvailabilitySection"
import MedicineSection from "@/components/MedicineSection"
import HealthTipsSection from "@/components/HealthTipsSection"
import EmergencySection from "@/components/EmergencySection"
import TestimonialsSection from "@/components/TestimonialsSection"
import DownloadAppSection from "@/components/DownloadAppSection"

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <Hero />
      <FeatureSection />
      <AppointmentSection />
      <BedAvailabilitySection />
      <MedicineSection />
      <HealthTipsSection />
      <EmergencySection />
      <TestimonialsSection />
      {/* <DownloadAppSection /> */}
    </div>
  )
}

