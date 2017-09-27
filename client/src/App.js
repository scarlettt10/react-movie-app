import React, { Component } from 'react';

import MovieList from './components/MovieList';
import MovieForm from './components/MovieForm';

class App extends Component {
 
  
  
  
  render() {
    return (
      <div>
        <MovieForm />
        <MovieList  />
      </div>
    );
  }
}

export default App;
