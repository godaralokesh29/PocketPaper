
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import NewsBoard from './components/NewsBoard'
import Newsitem from './components/Newsitem'



function App() {
  const [category,setCategory]=useState("general")


  return <div>
    <Navbar setCategory={setCategory}/>
    <div>
<h1 className="text-center fs-9  px-20 py-2 mx-4" > Latest <span className="badge text-bg-danger px-10 py-4"> News</span></h1>
</div>
    <NewsBoard category={category}/>
   

  </div>
}

export default App
