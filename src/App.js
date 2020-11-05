import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import useMember from "./hooks/useMember";
import { cache } from "swr";

const App = () => {
  const [currentMember, setCurrentMember] = useState(null);
  const urlKey = `https://rickandmortyapi.com/api/character/${currentMember}`;

  const { data, isLoading, isError, mutate } = useMember(urlKey);
  console.log(data);

  if (isLoading) {
    return <h1>Please wait, loading.</h1>;
  }

  if (isError) {
    return <h1>Oh no, ERROR!</h1>;
  }

  const login = () => {
    setCurrentMember(1);
  };

  const clearCache = () => {
    console.log(cache.get(urlKey))
    cache.clear();
    console.log(cache.get(urlKey))
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
