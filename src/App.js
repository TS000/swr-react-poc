import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import useSWR from "swr";
import { Profile } from "./pages/Profile";
import { Home } from "./pages/Home";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function App() {
  const [currentMember, setCurrentMember] = useState(1);

  function increment() {
    if (currentMember >= 1)
      return setCurrentMember(currentMember + 1);
  }

  function decrement() {
    if (currentMember <= 1){
      return;
    }
    return setCurrentMember(currentMember - 1);
  }

  const url = `https://rickandmortyapi.com/api/character/${currentMember}`;

  function randomMeeting(){
    const randomArr = Array.from({length: 3}, () => Math.floor(Math.random() * 3));

    return setCurrentMember(randomArr);
  }

  const { data, error } = useSWR(url, fetcher)
  console.log(data)

  if (error) return <h1>Email Anthony</h1>
  if (!data) return <h1>Loading...</h1>

  return (
    <>
      <Router>
        <div className="App">
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/profile">
            <button>Profile</button>
          </Link>
          <Link to="/meetings" onClick={() => randomMeeting()}>
            <button>Meetings</button>
          </Link>
          <Switch>
          <Route path="/profile">
            <Profile { ...data }  />
          </Route>
          <Route path="/meetings">
            <Profile { ...data }  />
          </Route>
          <Route path="/">
            <Home { ...data }  />
          </Route>
          </Switch>
        </div>
      </Router>
      
      <button onClick={() => decrement()}>Previous Member</button>
      <button onClick={() => increment()}>Next Member</button>
      </>
  );
}

export default App;
