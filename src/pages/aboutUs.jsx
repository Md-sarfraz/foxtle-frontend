import PageBanner from "../components/PageBanner";
import React from 'react'
import aboutBanner from "../assets/images/front-bg-image.gif"

const AboutUs = () => {
  return (
    <div>

        <>
      <PageBanner 
        title="About Us" 
        subtitle="Learn more about Foxtle and our journey in digital marketing."
        backgroundImage={aboutBanner}
      />
      {/* Rest of About Page */}
    </>
    </div>
  )
}

export default AboutUs