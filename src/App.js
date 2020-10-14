import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import useSWR, { cache, mutate } from "swr";
import { Profile } from "./pages/Profile";
import { Home } from "./pages/Home";
import { ProfileWCache } from "./pages/ProfileWCache";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const App = () => {
  const [currentMember, setCurrentMember] = useState(1);
  const url = `https://rickandmortyapi.com/api/character/${currentMember}`;

  // config

  const { data, error } = useSWR(url, fetcher);
  if (error) return <div>failed to load</div>;
  if (!data)
    return (
      <h1>
        <strong>loading...</strong>
      </h1>
    );

  // requests

  const increment = () => {
    if (currentMember >= 1) {
      setCurrentMember(currentMember + 1);
    }
  };

  const decrement = () => {
    if (currentMember <= 1) {
      return;
    } else {
      setCurrentMember(currentMember - 1);
    }
  };

  // mutations

  const mutations = (key) => {
    mutate(
      key,
      fetch(key).then((res) => res.json())
    );
  };

  const futureCache = () => {
    if (currentMember >= 1) {
      const crystalBall = currentMember + 2;
      mutations(`https://rickandmortyapi.com/api/character/${crystalBall}`);
      setCurrentMember(currentMember + 1);
    }
  };

  // log cache

  const getCache = () => {
    const nuString = cache.get(url);
    console.table(nuString, ["Value"]);
  };

  return (
    <>
      <button onClick={() => decrement()}>Previous Member</button>
      <button onClick={() => increment()}>Next Member</button>
      <button onClick={() => futureCache()}>Next Member w/ pre-cache</button>
      <button onClick={() => cache.clear()}>Clear Cache</button>
      {/* <button onClick={() => mutations()}>Logout</button> */}
      <button onClick={() => getCache()}>Get Current Cache</button>

      <Router>
        <div className="App">
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/profile">
            <button onClick={() => increment()}>Profile - No Cache</button>
          </Link>
          <Link to="/profile-with-cache">
            <button>Profile - With Cache</button>
          </Link>

          <Switch>
            <Route path="/profile">
              <Profile {...data} />
            </Route>
            <Route path="/profile-with-cache">
              <ProfileWCache {...data} />
            </Route>
            <Route path="/">
              <Home {...data} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
