import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MovieForm from './components/MovieForm';

class App extends Component {
  state = { movies: [] }
  
  
  
  render() {
    return (
      <div className="container">
        <MovieForm  />
      </div>
    );
  }
}

export default App;
