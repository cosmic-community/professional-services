// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Service type
export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    name: string;
    short_description: string;
    description?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    starting_price?: string;
    features?: string[];
  };
}

// Team Member type
export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    name: string;
    job_title: string;
    bio?: string;
    photo?: {
      url: string;
      imgix_url: string;
    };
    email?: string;
    linkedin?: string;
    experience_years?: number;
    specialties?: string[];
  };
}

// Case Study type
export interface CaseStudy extends CosmicObject {
  type: 'case-studies';
  metadata: {
    title: string;
    client_name: string;
    industry?: {
      key: string;
      value: string;
    };
    challenge: string;
    solution: string;
    results?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    gallery?: Array<{
      url: string;
      imgix_url: string;
    }>;
    services_used?: Service[];
    duration?: string;
    metrics?: Record<string, any>;
  };
}

// Testimonial type
export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    client_name: string;
    company: string;
    client_title?: string;
    testimonial: string;
    rating?: {
      key: string;
      value: string;
    };
    client_photo?: {
      url: string;
      imgix_url: string;
    };
    related_service?: Service;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

// Type guards
export function isService(obj: CosmicObject): obj is Service {
  return obj.type === 'services';
}

export function isTeamMember(obj: CosmicObject): obj is TeamMember {
  return obj.type === 'team-members';
}

export function isCaseStudy(obj: CosmicObject): obj is CaseStudy {
  return obj.type === 'case-studies';
}

export function isTestimonial(obj: CosmicObject): obj is Testimonial {
  return obj.type === 'testimonials';
}