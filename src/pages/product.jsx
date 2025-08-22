import React from "react";
import PageBanner from "../components/PageBanner";
import productBanner from "../assets/images/front-bg-image.gif";

const Product = () => {
  return (
    <>
      <PageBanner
        title="Our Products"
        subtitle="Explore our innovative solutions tailored for you."
        backgroundImage={productBanner}
      />
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Product details */}
        <h2 className="text-xl font-semibold mb-4">Products List</h2>
        <p className="text-gray-600">Content about products...</p>
      </div>
    </>
  );
};

export default Product;
