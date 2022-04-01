import Home from "../src/Components/Home/Home";
import Login from "../src/Components/Login/Login";
import About from "./Components/About/About";

import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";


function App() {
  return (
    <>
      <div className="bg-[#24262B] w-full h-max">
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/djoyof" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/Login" component={Login} />
            <Route path="/About" component={About} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
