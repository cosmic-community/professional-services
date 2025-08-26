import { TeamMember } from '@/types'
import TeamMemberCard from '@/components/TeamMemberCard'

interface TeamSectionProps {
  teamMembers: TeamMember[]
}

export default function TeamSection({ teamMembers }: TeamSectionProps) {
  if (!teamMembers || teamMembers.length === 0) {
    return (
      <section id="team" className="section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-gray-600">Team information coming soon.</p>
        </div>
      </section>
    )
  }

  return (
    <section id="team" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our talented professionals bring years of experience and a passion for excellence 
            to every project. Get to know the people behind your success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}