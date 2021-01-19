import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { NavBar } from './app/cmps/NavBar'
import { Home } from './app/pages/Home'
import { UserProfile } from './app/pages/UserProfile'
import { SearchResults } from './app/pages/SearchResults'
import { GigDetails } from './app/pages/GigDetails'
import { GigEdit } from './app/pages/GigEdit'
import './App.scss';

function App() {
  return (
    <div className="App">hello kalman.js
    
      <Router>
      <NavBar />
        <Switch>
          <Route path="/gig/edit/:id?" component={GigEdit} />
          <Route path="/gig/results/:q?" component={SearchResults} />
          <Route path="/gig/:id" component={GigDetails} />
          <Route path="/user/:id" component={UserProfile} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>

  );
}

export default App;
