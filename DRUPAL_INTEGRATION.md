# Drupal CMS Integration for Blogs

This document explains how the Drupal CMS integration works for the blogs page.

## Overview

The blogs page fetches content from your Drupal CMS using the JSON:API module. The integration is designed to work with Drupal's standard article content type.

## Configuration

### Environment Variables

Add the following to your `.env.local` file:

```env
NEXT_PUBLIC_DRUPAL_BASE_URL=https://dev-kemet-ai.pantheonsite.io
```

### Drupal Requirements

Your Drupal site must have:

1. **JSON:API module** enabled (included in Drupal 8.7+ core)
2. **Article content type** with the following fields:
   - `title` (default)
   - `body` (default)
   - `field_image` (image field)
   - `field_tags` (taxonomy reference)
   - `uid` (author, default)
   - `created` (timestamp, default)
   - `changed` (timestamp, default)

### Drupal Configuration Steps

1. Enable JSON:API module:
   ```bash
   drush en jsonapi -y
   ```

2. Configure permissions:
   - Go to `/admin/people/permissions`
   - Grant "View published content" permission to Anonymous users
   - Grant "View user information" permission if you want to display author info

3. Configure JSON:API resource types:
   - Go to `/admin/config/services/jsonapi`
   - Ensure the "article" resource is enabled

## File Structure

```
app/[locale]/blogs/
  ├── page.tsx                 # Main blogs page (server component)
  └── _Components/
      ├── Hero.tsx             # Hero section
      ├── BlogCard.tsx         # Individual blog card component
      └── BlogsGrid.tsx        # Grid layout for blogs

lib/services/
  └── drupal.ts               # Drupal API service

types/
  └── blog.ts                 # TypeScript types for blog data
```

## API Endpoints

The integration uses the following Drupal JSON:API endpoints:

### Fetch All Blogs
```
GET /jsonapi/node/article?include=uid,field_image,field_tags&sort=-created&page[limit]=12
```

### Fetch Single Blog
```
GET /jsonapi/node/article/{id}?include=uid,field_image,field_tags
```

### Fetch Blogs by Tag
```
GET /jsonapi/node/article?include=uid,field_image,field_tags&filter[field_tags.name]={tag}&sort=-created&page[limit]=12
```

## Data Transformation

The service automatically transforms Drupal's JSON:API response format to a simplified `Blog` interface:

```typescript
interface Blog {
  id: string;
  nid: number;
  title: string;
  summary: string;
  body: string;
  image: string;
  imageAlt: string;
  author: string;
  authorImage?: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}
```

## Features

- **Server-Side Rendering**: Blogs are fetched at build time and on-demand
- **Revalidation**: Content revalidates every 60 seconds
- **Error Handling**: Gracefully handles API errors and returns empty array
- **Image Support**: Automatically constructs full image URLs from Drupal
- **Fallback Images**: Uses placeholder if blog image is missing
- **Multilingual Support**: Supports both English and Arabic

## Usage Examples

### Fetch Blogs in a Server Component

```typescript
import { fetchBlogs } from '@/lib/services/drupal';

export default async function BlogsPage() {
  const blogs = await fetchBlogs(12);

  return <BlogsGrid blogs={blogs} />;
}
```

### Fetch Single Blog

```typescript
import { fetchBlogById } from '@/lib/services/drupal';

export default async function BlogDetailPage({ params }: { params: { id: string } }) {
  const blog = await fetchBlogById(params.id);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return <BlogDetail blog={blog} />;
}
```

### Fetch Blogs by Tag

```typescript
import { fetchBlogsByTag } from '@/lib/services/drupal';

export default async function TagPage({ params }: { params: { tag: string } }) {
  const blogs = await fetchBlogsByTag(params.tag);

  return <BlogsGrid blogs={blogs} />;
}
```

## Testing

To test the integration:

1. Ensure your Drupal site has some published articles
2. Verify the environment variable is set correctly
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Navigate to `/blogs` or `/ar/blogs`

## Troubleshooting

### No blogs are displayed

1. Check if `NEXT_PUBLIC_DRUPAL_BASE_URL` is set correctly
2. Verify JSON:API module is enabled in Drupal
3. Check browser console and server logs for errors
4. Verify articles are published in Drupal
5. Test the API endpoint directly in your browser:
   ```
   https://dev-kemet-ai.pantheonsite.io/jsonapi/node/article
   ```

### Images not loading

1. Verify `field_image` exists on article content type
2. Check if images are uploaded to articles
3. Verify image styles are configured in Drupal
4. Check CORS settings if images are blocked

### CORS Issues

If you encounter CORS errors, add the following to your Drupal `settings.php`:

```php
$settings['cors.config'] = [
  'enabled' => TRUE,
  'allowedOrigins' => ['http://localhost:3000', 'https://yourdomain.com'],
  'allowedMethods' => ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  'allowedHeaders' => ['Content-Type', 'Authorization'],
  'exposedHeaders' => [],
  'maxAge' => 1000,
  'supportsCredentials' => FALSE,
];
```

## Performance Optimization

- Content is cached using Next.js ISR (Incremental Static Regeneration)
- Revalidation period: 60 seconds
- Images use Next.js Image component for optimization
- Only necessary fields are fetched from Drupal

## Security

- All API calls are made server-side
- No authentication tokens exposed to client
- CORS properly configured
- Environment variables used for configuration
