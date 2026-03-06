import { Link, useParams } from "react-router-dom";
import { blogPosts } from "../data/siteData";
import NotFound from "./NotFound";

function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <NotFound />;

  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <div className="text-xs font-semibold tracking-wide text-gray-500">
        {post.date}
      </div>
      <h1 className="mt-3 text-4xl font-semibold">{post.title}</h1>
      <p className="mt-4 text-gray-600">{post.excerpt}</p>

      <div className="mt-10 space-y-5 rounded-2xl bg-white p-8 shadow-md">
        {post.content.map((para, i) => (
          <p key={i} className="text-gray-700 leading-relaxed">
            {para}
          </p>
        ))}
      </div>

      <div className="mt-10">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-5 py-2 text-sm font-medium text-gray-800 shadow-sm hover:border-gray-400"
        >
          <span aria-hidden="true">←</span> Back to Blog
        </Link>
      </div>
    </div>
  );
}

export default BlogPost;

