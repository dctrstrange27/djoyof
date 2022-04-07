import Home from "../src/Components/Home/Home";
import Login from "../src/Components/Login/Login";
import About from "./Components/About/About";
import Signup from "./Components/Login/Signup";
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import { useState } from "react"

function App() {

  return (
    <>
      <div className="bg-[#323439] overflow-hidden relative">
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/djoyof" exact component={Home} />
            <Route path="/home" exact>
                <Home />
            </Route>
            <Route path="/Login" component={Login} />
            <Route path="/Signup" component={Signup} />
            <Route path="/About" component={About} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
