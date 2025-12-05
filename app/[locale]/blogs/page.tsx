import HeroSection from './_Components/Hero';
import BlogsGrid from './_Components/BlogsGrid';
import { fetchBlogs } from '@/lib/services/drupal';
import FAQ from './_Components/FAQ';

export default async function BlogsPage() {
  const blogs = await fetchBlogs(12);

  return (
    <main className="flex-1">
      <HeroSection />
      <BlogsGrid blogs={blogs} />
      <FAQ />
    </main>
  );
}