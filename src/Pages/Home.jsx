import React from 'react'
import CarouselSlider from '../Components/CarouselSlider'
import ArticleAboutReading from '../Components/ArticleAboutReading'
import ParallaxEffect from '../Components/ParallaxEffect'
import AllBooks from './AllBooks'

function Home() {
  return (
    <>
    <CarouselSlider/>
    <ArticleAboutReading/>
    <ParallaxEffect/>
    <AllBooks/>
    </>
  )
}

export default Home