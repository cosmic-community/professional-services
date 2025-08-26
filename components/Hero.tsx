import Link from 'next/link'

export default function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Transform Your Business with
            <span className="text-gradient block">Expert Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed animate-fade-in-up">
            We deliver exceptional web development, digital marketing, and business consulting services 
            that drive real results for companies of all sizes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
            <Link href="#services" className="btn btn-primary text-lg px-8 py-4">
              Explore Our Services
            </Link>
            <Link href="#case-studies" className="btn btn-secondary text-lg px-8 py-4">
              View Case Studies
            </Link>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">5+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}