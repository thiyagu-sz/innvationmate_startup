import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopExpertise from '../components/TopExpertise'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div>
      <Header />
      <SpecialityMenu />
      {/* <TopExpertise /> */}
      <Banner />
    </div>
  )
}

export default Home