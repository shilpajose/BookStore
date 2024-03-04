import React, { useState } from 'react'
import CarouselSlider from '../Components/CarouselSlider'
import ArticleAboutReading from '../Components/ArticleAboutReading'
import ParallaxEffect from '../Components/ParallaxEffect'
import AllBooks from './AllBooks'
import AddBook from '../Components/AddBook'

function Home() {
// state lifting for immdiate response after adding a book
const [addBookResponse,setAddBookResponse]=useState("")

  return (
    <>
    <CarouselSlider/>
    <ArticleAboutReading/>
    <ParallaxEffect/>
    <AddBook setAddBookResponse={setAddBookResponse}/>
    <AllBooks addBookResponse={addBookResponse}/>
    </>
  )
}

export default Home