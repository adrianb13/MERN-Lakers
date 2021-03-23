import React from 'react';
import { Router, Switch, Route } from "react-router-dom";
//import { createBrowserHistory } from "history";
import history from "./history/history";
import './App.css';

import Home from "./components/Home";
import Info from "./components/Info";
import Roster from "./components/Roster";
import Stats from "./components/Stats";
import TeamHistory from "./components/TeamHistory";
import Trivia from "./components/Trivia";
import Champs from "./components/Champs";

class App extends React.Component {
  render(){
    return(
      <Router history={history}>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/schedule" component={Info} />
            <Route exact path="/history" component={TeamHistory} />
            <Route exact path="/roster" component={Roster} />
            <Route exact path="/roster/:id" component={Stats} />
            <Route exact path="/trivia" component={Trivia} />
            <Route exact path="/champs" component={Champs} />
            <Route component={Home} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
