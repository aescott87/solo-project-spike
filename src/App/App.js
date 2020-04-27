import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route} from 'react-router-dom';
//import components
import { withRouter } from 'react-router';
import Home from '../Pages/Home/Home';
import SearchList from '../Pages/SearchList/SearchList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path='/' component={Home} />
          <Route path='/list' component={SearchList} />
        </Router>
      </div>
    );
  }
}

export default withRouter(App);
