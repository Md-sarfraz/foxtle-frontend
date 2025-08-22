import React from "react";

function PageBanner({ title, subtitle, backgroundImage }) {
  return (
    <section
      className="relative bg-center bg-cover bg-no-repeat text-center py-12 sm:py-16 md:py-20 lg:py-28"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark Overlay + Gradient */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#171C28]/70 to-[#FF3B00]/60 z-20"></div>

      {/* Content */}
      <div className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="pt-16 text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-4 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-sm sm:text-base md:text-lg lg:text-base text-white/80 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

export default PageBanner;
