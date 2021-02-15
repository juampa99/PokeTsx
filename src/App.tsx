import React from 'react';
import './style/home_page.css'
import './style/pokemon_card.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { HomePage } from './components/HomePage';
import { Pokemon } from "./components/Pokemon";

function App() {
  return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="app" >
            <Switch>
                <Route path="/pokemon/:id">
                    <Pokemon />
                </Route>
                <Route path="/">
                    <HomePage />
                </Route>
            </Switch>
        </div>
      </Router>
  );
}

export default App;
