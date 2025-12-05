"use client";

import { Blog } from "@/types/blog";
import { motion } from "framer-motion";
import Image from "next/image";
import { useFormatter } from "next-intl";

interface BlogCardProps {
  blog: Blog;
  index: number;
}

export default function BlogCard({ blog, index }: BlogCardProps) {
  const format = useFormatter();

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-[240px] w-full overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.imageAlt}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-6">
        {blog.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {blog.tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
          {blog.title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-3">{blog.summary}</p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="flex items-center gap-3">
            {blog.authorImage ? (
              <Image
                src={blog.authorImage}
                alt={blog.author}
                width={40}
                height={40}
                className="rounded-full"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                {blog.author.charAt(0).toUpperCase()}
              </div>
            )}
            <span className="text-sm font-medium text-gray-700">{blog.author}</span>
          </div>

          <time className="text-sm text-gray-500">
            {format.dateTime(blog.createdAt, {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </time>
        </div>
      </div>
    </motion.article>
  );
}
