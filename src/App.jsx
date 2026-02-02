import Navbar from "./Components/Navbar"
import NewsBoard from "./Components/NewsBoard"
import { useState } from "react";
import "./App.css";


const App = () => {
  const[category,setCategory]=useState("general")
  return (
    <div>
      <Navbar setCategory={setCategory}/>
   <NewsBoard category={category}/>
    </div>
  )
}

export default App
