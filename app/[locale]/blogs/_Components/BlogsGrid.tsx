import { Blog } from "@/types/blog";
import BlogCard from "./BlogCard";

interface BlogsGridProps {
  blogs: Blog[];
}

export default function BlogsGrid({ blogs }: BlogsGridProps) {
  if (blogs.length === 0) {
    return (
      <div className="container mx-auto px-6 py-16 text-center">
        <p className="text-gray-600 text-lg">No blogs found. Check back soon for new content!</p>
      </div>
    );
  }

  return (
    <section className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <BlogCard key={blog.id} blog={blog} index={index} />
        ))}
      </div>
    </section>
  );
}
