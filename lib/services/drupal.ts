import { Blog, DrupalBlogNode, DrupalJsonApiResponse } from "@/types/blog";

const DRUPAL_BASE_URL = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL || "https://dev-kemet-ai.pantheonsite.io";

/**
 * Transform Drupal blog node to Blog interface
 */
function transformDrupalBlog(node: DrupalBlogNode): Blog {
  const baseUrl = DRUPAL_BASE_URL;

  return {
    id: node.id,
    nid: node.drupal_internal__nid,
    title: node.title,
    summary: node.body?.summary || node.body?.value.substring(0, 200) + "..." || "",
    body: node.body?.processed || node.body?.value || "",
    image: node.field_image?.uri?.url ? `${baseUrl}${node.field_image.uri.url}` : "/assets/shared/placeholder-blog.jpg",
    imageAlt: node.field_image?.alt || node.title,
    author: node.uid?.name || "Kemet AI",
    authorImage: node.uid?.field_image?.uri?.url ? `${baseUrl}${node.uid.field_image.uri.url}` : undefined,
    tags: node.field_tags?.map(tag => tag.name) || [],
    createdAt: new Date(node.created),
    updatedAt: new Date(node.changed),
  };
}

/**
 * Fetch all blogs from Drupal CMS
 */
export async function fetchBlogs(limit: number = 12): Promise<Blog[]> {
  try {
    const url = `${DRUPAL_BASE_URL}/jsonapi/node/article?include=uid,field_image,field_tags&sort=-created&page[limit]=${limit}`;

    const response = await fetch(url, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch blogs: ${response.status} ${response.statusText}`);
    }

    const data: DrupalJsonApiResponse = await response.json();

    return data.data.map(transformDrupalBlog);
  } catch (error) {
    console.error("Error fetching blogs from Drupal:", error);
    return [];
  }
}

/**
 * Fetch a single blog by ID
 */
export async function fetchBlogById(id: string): Promise<Blog | null> {
  try {
    const url = `${DRUPAL_BASE_URL}/jsonapi/node/article/${id}?include=uid,field_image,field_tags`;

    const response = await fetch(url, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch blog: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    return transformDrupalBlog(data.data);
  } catch (error) {
    console.error(`Error fetching blog ${id} from Drupal:`, error);
    return null;
  }
}

/**
 * Fetch blogs by tag
 */
export async function fetchBlogsByTag(tag: string, limit: number = 12): Promise<Blog[]> {
  try {
    const url = `${DRUPAL_BASE_URL}/jsonapi/node/article?include=uid,field_image,field_tags&filter[field_tags.name]=${encodeURIComponent(tag)}&sort=-created&page[limit]=${limit}`;

    const response = await fetch(url, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch blogs by tag: ${response.status} ${response.statusText}`);
    }

    const data: DrupalJsonApiResponse = await response.json();

    return data.data.map(transformDrupalBlog);
  } catch (error) {
    console.error(`Error fetching blogs by tag "${tag}" from Drupal:`, error);
    return [];
  }
}
