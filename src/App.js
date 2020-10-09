import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import useSWR from "swr";
import { Profile } from "./components/Profile";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function App() {

    const url = 'https://rickandmortyapi.com/api/character/8';
    const { data, error } = useSWR(url, fetcher)
    console.log(data)




    if (error) return <h1>Something went wrong!</h1>
    if (!data) return <h1>Loading...</h1>

  return (
    <main className="App">
      <Router>
        <div className="nav">
          <Link to="/profile">
            <button>
                Profile
            </button>
          </Link>
          <Link to="/meetings">
            <button>
                Meetings
            </button>
          </Link>
          <Switch>
          <Route path="/profile">
            <Profile id={data.id} name={data.name} image={data.image}  />
          </Route>
          </Switch>
        </div>
      </Router>
    </main>
  );
}

export default App;
