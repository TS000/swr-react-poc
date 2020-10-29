import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";

const App = () => {
  const [currentMember, setCurrentMember] = useState(null);
  const data = null;
  
const login = () => {
  setCurrentMember(1)
}

  return (
    <div style={{ padding: 40 }}>
      <div className="App">
        <h3>Smarties Grocery Store Empoyee Portal</h3>
        <button onClick={() => login()}>Login</button>
        <Router>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Switch>
            <Route path="/">
              <Home {...data} />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
