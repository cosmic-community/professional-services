import { getServices, getTeamMembers, getCaseStudies, getTestimonials } from '@/lib/cosmic'
import Hero from '@/components/Hero'
import ServicesSection from '@/components/ServicesSection'
import TeamSection from '@/components/TeamSection'
import CaseStudiesSection from '@/components/CaseStudiesSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ContactSection from '@/components/ContactSection'

export default async function HomePage() {
  // Fetch all data in parallel
  const [services, teamMembers, caseStudies, testimonials] = await Promise.all([
    getServices(),
    getTeamMembers(),
    getCaseStudies(),
    getTestimonials(),
  ])

  return (
    <div className="min-h-screen">
      <Hero />
      
      <ServicesSection services={services} />
      
      <TeamSection teamMembers={teamMembers} />
      
      <CaseStudiesSection caseStudies={caseStudies} />
      
      <TestimonialsSection testimonials={testimonials} />
      
      <ContactSection />
    </div>
  )
}