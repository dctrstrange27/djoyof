
import Login from './Components/Login/Login'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom' 
function App() {
  return (
  <> 
    {/* <h1 class='font-semibold text-center' >Home</h1> */}
    <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/About' element={<About/>} />
        </Routes>
    </Router>

</>
  );
}

export default App;
