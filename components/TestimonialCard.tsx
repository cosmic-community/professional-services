import { Testimonial } from '@/types'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const clientPhoto = testimonial.metadata?.client_photo
  const rating = testimonial.metadata?.rating
  const relatedService = testimonial.metadata?.related_service

  // Render star rating
  const renderStars = (ratingKey: string) => {
    const stars = parseInt(ratingKey) || 5
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < stars ? 'text-yellow-400' : 'text-gray-300'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <div className="card h-full flex flex-col">
      {/* Rating */}
      {rating && (
        <div className="flex items-center mb-4">
          <div className="flex space-x-1">
            {renderStars(rating.key)}
          </div>
          <span className="ml-2 text-sm text-gray-600">{rating.value}</span>
        </div>
      )}
      
      {/* Testimonial text */}
      <blockquote className="flex-1 text-gray-700 leading-relaxed mb-6 italic">
        "{testimonial.metadata?.testimonial}"
      </blockquote>
      
      {/* Client info */}
      <div className="flex items-center space-x-4">
        {clientPhoto && (
          <img
            src={`${clientPhoto.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
            alt={testimonial.metadata?.client_name}
            width="48"
            height="48"
            className="w-12 h-12 rounded-full object-cover"
          />
        )}
        
        <div className="flex-1">
          <div className="font-semibold text-gray-900">
            {testimonial.metadata?.client_name}
          </div>
          <div className="text-sm text-gray-600">
            {testimonial.metadata?.client_title && (
              <span>{testimonial.metadata.client_title}</span>
            )}
            {testimonial.metadata?.client_title && testimonial.metadata?.company && (
              <span> at </span>
            )}
            {testimonial.metadata?.company && (
              <span className="font-medium">{testimonial.metadata.company}</span>
            )}
          </div>
        </div>
      </div>
      
      {/* Related service */}
      {relatedService && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
            Service Used
          </div>
          <div className="text-sm font-medium text-primary-600">
            {relatedService.metadata?.name || relatedService.title}
          </div>
        </div>
      )}
    </div>
  )
}