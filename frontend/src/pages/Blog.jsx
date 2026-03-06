import { Link } from "react-router-dom";
import { blogPosts } from "../data/siteData";

function Blog() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <header className="mb-10">
        <h1 className="text-4xl font-semibold">Blog</h1>
        <p className="mt-3 max-w-2xl text-gray-600">
          Tips for Varanasi, travel comfort, and experiences around Assi Ghat.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="rounded-2xl bg-white p-8 shadow-md"
          >
            <div className="text-xs font-semibold tracking-wide text-gray-500">
              {post.date}
            </div>
            <h2 className="mt-2 text-2xl font-semibold text-gray-900">
              {post.title}
            </h2>
            <p className="mt-3 text-gray-600">{post.excerpt}</p>
            <div className="mt-6">
              <Link
                to={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 rounded-md bg-orange-500 px-5 py-2 text-sm font-medium text-white shadow hover:bg-orange-600"
              >
                Read more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

export default Blog;

