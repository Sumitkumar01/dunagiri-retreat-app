import React from 'react'
import LastSection from '../features/home/LastSection'
import Banner from '../features/home/Banner'
import Footer from '../features/footer/Footer'
import ForthSection from '../features/home/ForthSection'
import FifthSection from '../features/home/FifthSection'

function HomePage() {
  return (
    <div>
      <Banner/>
      <ForthSection/>
      <FifthSection/>
      <LastSection/>
      <Footer />
    </div>
  )
}

export default HomePage