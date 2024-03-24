import { Routes, BrowserRouter, Route } from "react-router-dom";
import './App.css'
import All from './All'
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Navbar";
import Fsd from "./Fsd";
import DataScience from "./DataScience";
import "./App.css"
import Cyber from "./Cyber";
import Career from "./Career";
function App() {
  // const data = [{
  //   Name: "udhay",
  //   Age: 21,
  //   place: "Sholinghur"

  // },
  // {
  //   Name: "udhay",
  //   Age: 21,
  //   place: "Sholinghur"

  // },
  // {
  //   Name: "udhay",
  //   Age: 21,
  //   place: "Sholinghur"

  // }]



  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/All" element={<All/>}
            //  {data.map((item,index) => {
            //   <All  key={ index } item={item}/>
            // })} 
          

          ></Route>
          <Route path="/Fsd" element={<Fsd />}></Route>
          <Route path="/datascience" element={<DataScience />}></Route>
          <Route path="/cyberSecurity" element={<Cyber />}></Route>
          <Route path="/career" element={<Career />}></Route>

        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
