import Home from "../src/Components/Home/Home";
import Login from "../src/Components/Login/Login";
import About from "./Components/About/About";
import Signup from "./Components/Login/Signup";
import NotFound from "./Components/error/NotFound";
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";


function App() {
  return (
    <>
      <div className="bg-[#323439] overflow-hidden">
        <Router basename="djoyof">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/djoyof" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/Login" component={Login} />
            <Route path="/Signup" component={Signup} />
            <Route path="/About" component={About} />
            <Route  component={NotFound} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
