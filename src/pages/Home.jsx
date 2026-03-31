import React from 'react'
import Banner from '../components/Home/Banner'
import Category from '../components/Home/Category'
import FlashDeals from '../components/Home/FlashDeals'
import FeaturedProduct from '../components/Home/FeaturedProduct'

const Home = () => {
  return (
    <>
      <Banner/>
      <Category/>
      <FlashDeals/>
      <FeaturedProduct/>
    </>
  )
}

export default Home