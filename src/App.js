import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import useSWR, { cache } from "swr";
import { Profile } from "./pages/Profile";
import { Home } from "./pages/Home";

//TODO add map to cache.get

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const App = () => {
  const [ currentMember, setCurrentMember ] = useState(1);
  const url = `https://rickandmortyapi.com/api/character/${currentMember}`;
  let nuString = JSON.stringify(cache.get(url))
    console.log(`member cache: ${nuString}`)
  const { data, error } = useSWR(url, fetcher);
  // const [ isLoading, setIsLoading ] = useState(true)
  const stringLengths = (...args) => args.map(x => x.length);

  if(data){
  console.log(stringLengths(nuString))
  }

  // function cacheCheck() {
  //   if(data){
  //     if(nuString.includes("false")){
  //       setIsLoading(true)
  //     }
  //     console.log(nuString)
  //     console.log(`New profile: ${isLoading}`)
  //   }
  // }

  const increment = () => {
    if (currentMember >= 1) {
      setCurrentMember(currentMember + 1);
      // cacheCheck();
    }
}

  const decrement = () =>  {
    if (currentMember <= 1) {
      return;
    }else{
    setCurrentMember(currentMember - 1);
    // cacheCheck();
  }
}

if (error) return <div>failed to load</div>

  return (
    <>
      <button onClick={() => decrement()}>Previous Member</button>
      <button onClick={() => increment()}>Next Member</button>
      <button onClick={() => cache.clear()}>Clear Cache</button>

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
              <Profile {...data } />
            </Route>
            <Route path="/profile-with-cache">
              <Profile {...data } />
            </Route>
            <Route path="/">
              <Home {...data} />
            </Route>
            
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
