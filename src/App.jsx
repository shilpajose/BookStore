import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import AllBooks from './Pages/AllBooks'
import BookHistory from './Pages/BookHistory'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/allbooks' element={<AllBooks/>}></Route>
  <Route path='/bookhistory' element={<BookHistory/>}></Route>
</Routes>
    <Footer/>
    </>
  )
}

export default App
