import React, { Component } from 'react';
import axios from 'axios';
import { Card, Image } from 'semantic-ui-react';

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
    })
  }

  
    
    

  render() {
    return(
      <Card.Group>
      { this.state.movies.map( movies =>
        <Card>
          <Image src='https://robohash.org/set_set4' />
          <Card.Header>
            {movies.title}
          </Card.Header>
          <Card.Description>
            {movies.summary}
          </Card.Description>
        </Card>
        ) 
      }
    </Card.Group>
    )
  }
}  


export default MovieList;