# Professional Services Company Website

![Professional Services Website](https://imgix.cosmicjs.com/0b9fbec0-8248-11f0-8dcc-651091f6a7c0-photo-1498050108023-c5249f4df085-1756190638235.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, professional company website built with Next.js 15 and powered by Cosmic CMS. Showcases your services, team, case studies, and client testimonials with a clean, responsive design that converts visitors into clients.

## Features

- **Service Portfolio** - Dynamic showcase of your business services with detailed descriptions
- **Team Directory** - Professional profiles of your team members with expertise and contact info
- **Case Studies** - Detailed project showcases with challenges, solutions, and results
- **Client Testimonials** - Social proof with ratings and client photos
- **Responsive Design** - Mobile-optimized experience across all devices
- **SEO Optimized** - Built-in search engine optimization
- **Fast Performance** - Optimized images and efficient data fetching
- **Easy Content Management** - Update content easily through Cosmic dashboard

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=68ad56f8c7fc1dab4b81dfca&clone_repository=68ad58cdc7fc1dab4b81dff0)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> Create a content model for a company website with services, team members, testimonials, and case studies

### Code Generation Prompt

> Build a Next.js website that uses my existing objects in this bucket

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Content Management**: Cosmic CMS
- **TypeScript**: Full type safety and validation
- **Image Optimization**: Imgix integration
- **Deployment**: Vercel-ready configuration

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with your content

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   bun install
   ```

3. Set up your environment variables:
   ```bash
   cp .env.example .env.local
   ```
   
   Add your Cosmic credentials:
   ```
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

4. Start the development server:
   ```bash
   bun dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Cosmic SDK Examples

### Fetching Services
```typescript
import { cosmic } from '@/lib/cosmic'

export async function getServices() {
  try {
    const response = await cosmic.objects
      .find({ type: 'services' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as Service[]
  } catch (error) {
    if (error.status === 404) return []
    throw error
  }
}
```

### Fetching Team Members
```typescript
export async function getTeamMembers() {
  try {
    const response = await cosmic.objects
      .find({ type: 'team-members' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as TeamMember[]
  } catch (error) {
    if (error.status === 404) return []
    throw error
  }
}
```

## Cosmic CMS Integration

This website integrates with your existing Cosmic content model:

- **Services** - Showcase your business services with descriptions, features, and pricing
- **Team Members** - Display team profiles with photos, bios, and specialties
- **Case Studies** - Present detailed project success stories with metrics
- **Testimonials** - Feature client testimonials with ratings and photos

All content is dynamically fetched from your Cosmic bucket and can be updated through the Cosmic dashboard without code changes.

## Deployment Options

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Add your environment variables in the Vercel dashboard
3. Deploy with automatic builds on every push

### Netlify
1. Connect your repository to Netlify
2. Set build command: `bun run build`
3. Set publish directory: `out` (for static export) or `.next` (for server-side)
4. Add environment variables in Netlify dashboard

### Manual Deployment
```bash
bun run build
bun run start
```

For static deployment:
```bash
bun run build
# Deploy the `out` folder to your hosting provider
```

The application is production-ready and optimized for performance with proper caching, image optimization, and SEO features.
<!-- README_END -->