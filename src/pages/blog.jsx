import React from "react";
import PageBanner from "../components/PageBanner";
import blogBanner from "../assets/images/front-bg-image.gif";

const Blog = () => {
  return (
    <>
      <PageBanner
        title="Our Blog"
        subtitle="Read the latest updates and insights from our team."
        backgroundImage={blogBanner}
      />
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Blog content goes here */}
        <h2 className="text-xl font-semibold mb-4">Latest Articles</h2>
        <p className="text-gray-600">Content for blog page...</p>
      </div>
    </>
  );
};

export default Blog;
