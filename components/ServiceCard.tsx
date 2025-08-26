import { Service } from '@/types'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const featuredImage = service.metadata?.featured_image
  const features = service.metadata?.features || []

  return (
    <div className="card h-full flex flex-col">
      {featuredImage && (
        <div className="mb-6 -mx-6 -mt-6">
          <img
            src={`${featuredImage.imgix_url}?w=600&h=300&fit=crop&auto=format,compress`}
            alt={service.metadata?.name || service.title}
            width="400"
            height="200"
            className="w-full h-48 object-cover rounded-t-xl"
          />
        </div>
      )}
      
      <div className="flex-1 flex flex-col">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          {service.metadata?.name || service.title}
        </h3>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          {service.metadata?.short_description}
        </p>
        
        {features.length > 0 && (
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
            <ul className="space-y-2">
              {features.slice(0, 4).map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-accent-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="mt-auto flex items-center justify-between">
          {service.metadata?.starting_price && (
            <div className="text-2xl font-bold text-primary-600">
              {service.metadata.starting_price}
            </div>
          )}
          
          <button className="btn btn-primary">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}