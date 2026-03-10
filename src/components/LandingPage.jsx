import React from 'react'
import Hero from './Hero'
import WhatWeDo from './WhatWeDo'
import Impact from './Impact'
import FeaturedInitiatives from './FeaturedInitiatives'
import Partners from './Partners'
import CallToCollaborate from './CallToCollaborate'
import GallerySection from './GallerySection'
import ShowcaseSection from './ShowcaseSection'

const LandingPage = () => {
  return (
    <div>
      <Hero/>
      <WhatWeDo/>
      <Impact/>
      <FeaturedInitiatives/>
      <GallerySection/>
      <ShowcaseSection/>
      {/* <Partners/> */}
     
    </div>
  )
}

export default LandingPage
