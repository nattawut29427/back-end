"use client"

import { useParams } from 'next/navigation';

const BlogPost = () => {
  const params = useParams();
  const slug = params?.slug  as string;

  const formattext = slug.replace(/-/g," ")

  return (
    <p className="text-2xl">
      Showing the blog post for the slug <strong>{formattext}</strong>
    </p>
  );
}

export default BlogPost;
