import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateComponent from './components/CreateComponent';
import ReadComponent from './components/ReadComponent';
import UpdateComponent from './components/UpdateComponent';
import DeleteComponent from './components/DeleteComponent';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ReadComponent} />
        <Route path="/create" component={CreateComponent} />
        <Route path="/update/:id" component={UpdateComponent} />
        <Route path="/delete/:id" component={DeleteComponent} />
      </Switch>
    </Router>
  );
}

export default App;
