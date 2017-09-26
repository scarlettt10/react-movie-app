import React, { Component } from 'react';
import axios from 'axios';

class MovieList extends Component {
  state = {movies: []}
 
  // movies = (state) => {
  //     return() => {
  //       axios.get('/api/movies')
  //       .then( res => this.setState( {movies: res.data} )
  //     );
  //   }
  // } 

  componentDidMount() {
    axios.get('/api/movies')
    .then( res => {
      this.setState({ movies: res.data })
    })
    .catch( err => {
      debugger
    })
  }

  
    
    

  render() {
    return(
      <div>
      { this.state.movies.map( movies =>
        <ul>
          <li>{movies.title}</li>
          <li>{movies.summary}</li>
        </ul>
        ) 
      }
      </div>
    )
  }
}  


export default MovieList;