
import "./singleWord"
import './App.css'
import Menubar from "./components/Menubar.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home.tsx";
import About from "./components/About.tsx";
import Edit from "./components/Edit.tsx";
import Flashcards from "./components/Flashcards.tsx";
import Login from "./components/Login.tsx";
import {useState} from "react";
import ProtectedRoute from "./components/ProtectedRoute.tsx";


function App() {

    const [user, setUser] = useState<string>("anonym");



  return (
      <>


      <div className="container">
          <div className="nav">
              <Menubar/>

          </div>


          <div className="main">


              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/Login" element={<Login setUser={setUser}/>}/>
                  <Route element={<ProtectedRoute user={user}/>}>
                      <Route path="/edit" element={<Edit/>}/>
                  </Route>
                  <Route path="/flashcards" element={<Flashcards/>}/>
              </Routes>


          </div>


      </div>

          <footer>
              <div>
                  <p className="rights">©2024 All Rights reserved Frenk Shabani </p>
              </div>
          </footer>
      </>
  )

}

export default App
