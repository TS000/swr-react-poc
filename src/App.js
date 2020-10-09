import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import useSWR from "swr";
import { Profile } from "./components/Profile";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function App() {

    const url = 'https://rickandmortyapi.com/api/character/8';
    const { data, error } = useSWR(url, fetcher)

  if (error) return <h1>Email Anthony</h1>
  if (!data) return <h1>Loading...</h1>

  return (
      <Router>
        <div className="App">
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/profile">
            <button>Profile</button>
          </Link>
          <Link to="/meetings">
            <button>Meetings</button>
          </Link>
          <Switch>
          <Route path="/profile">
            <Profile { ...data }  />
          </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
