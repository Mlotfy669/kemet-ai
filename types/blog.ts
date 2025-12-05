export interface DrupalBlogImage {
  uri: {
    url: string;
  };
  alt?: string;
  title?: string;
}

export interface DrupalBlogAuthor {
  name: string;
  field_image?: DrupalBlogImage;
}

export interface DrupalBlogNode {
  id: string;
  type: string;
  drupal_internal__nid: number;
  title: string;
  body?: {
    value: string;
    processed: string;
    summary?: string;
  };
  created: string;
  changed: string;
  field_image?: DrupalBlogImage;
  field_tags?: Array<{
    name: string;
  }>;
  uid?: DrupalBlogAuthor;
}

export interface Blog {
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

export interface DrupalJsonApiResponse {
  data: DrupalBlogNode[];
  included?: unknown[];
  links?: {
    next?: {
      href: string;
    };
  };
}
