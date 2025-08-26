import { CaseStudy } from '@/types'

interface CaseStudyCardProps {
  caseStudy: CaseStudy
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const featuredImage = caseStudy.metadata?.featured_image
  const industry = caseStudy.metadata?.industry
  const servicesUsed = caseStudy.metadata?.services_used || []
  const metrics = caseStudy.metadata?.metrics || {}

  // Extract key metrics for display
  const keyMetrics = Object.entries(metrics).slice(0, 3)

  return (
    <div className="card h-full flex flex-col">
      {featuredImage && (
        <div className="mb-6 -mx-6 -mt-6">
          <img
            src={`${featuredImage.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
            alt={caseStudy.metadata?.title || caseStudy.title}
            width="600"
            height="300"
            className="w-full h-64 object-cover rounded-t-xl"
          />
        </div>
      )}
      
      <div className="flex-1 flex flex-col">
        <div className="flex items-center gap-4 mb-4">
          <h3 className="text-2xl font-bold text-gray-900">
            {caseStudy.metadata?.title || caseStudy.title}
          </h3>
          {industry && (
            <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
              {industry.value}
            </span>
          )}
        </div>
        
        <p className="text-gray-600 mb-4">
          <strong>Client:</strong> {caseStudy.metadata?.client_name}
        </p>
        
        {caseStudy.metadata?.duration && (
          <p className="text-gray-600 mb-6">
            <strong>Duration:</strong> {caseStudy.metadata.duration}
          </p>
        )}
        
        {/* Challenge snippet */}
        {caseStudy.metadata?.challenge && (
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
            <div 
              className="text-gray-600 text-sm line-clamp-3"
              dangerouslySetInnerHTML={{ 
                __html: caseStudy.metadata.challenge.replace(/<[^>]*>/g, '').substring(0, 200) + '...'
              }}
            />
          </div>
        )}
        
        {/* Key metrics */}
        {keyMetrics.length > 0 && (
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">Key Results</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {keyMetrics.map(([key, value], index) => (
                <div key={index} className="text-center p-3 bg-primary-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-600 mb-1">
                    {String(value)}
                  </div>
                  <div className="text-xs text-gray-600 capitalize">
                    {key.replace(/_/g, ' ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Services used */}
        {servicesUsed.length > 0 && (
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">Services Used</h4>
            <div className="flex flex-wrap gap-2">
              {servicesUsed.map((service, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                >
                  {service.metadata?.name || service.title}
                </span>
              ))}
            </div>
          </div>
        )}
        
        <div className="mt-auto">
          <button className="btn btn-primary w-full">
            View Full Case Study
          </button>
        </div>
      </div>
    </div>
  )
}