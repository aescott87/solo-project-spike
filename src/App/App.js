import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import { Divider } from 'muicss/react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h2>Search our list of retailers to find brands that will fit you perfectly.</h2>
        <h3>Want to see the full list of retailers? You can find that here.</h3>
        <Divider />
        <SearchForm />
      </div>
    );
  }
}

export default App;
