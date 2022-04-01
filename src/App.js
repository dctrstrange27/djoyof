
import Home from '../src/Components/Home/Home'
import Login from '../src/Components/Login/Login'
import About from '../src/Components/About/About'

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom' 
import { Link } from "react-router-dom"

function App() {
    return (
    <>
    <div className="bg-[#24262B] w-full h-screen">
   <Router>
        <Routes>
          <Route path='/djoyof' exact element={<Home/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/About' element={<About/>} />
        </Routes>
    </Router>
    
    </div>
    </>
  );
}

export default App;
