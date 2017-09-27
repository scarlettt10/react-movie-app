import React from 'react';
import axios from 'axios';
import { Button } from 'semantic-ui-react';

class MovieForm extends React.Component {
  state = {movies: ''}

  

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/movies/') 
    .then( res => {
      this.setState({ movies: res.data })
    })
    }
  
  

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.title}
          placeholder='Title'
          type='text'
          required
        />
        <input
          value={this.state.summary}
          placeholder='Description'
          type='text'
          required
        />
        <Button type='submit'>Submit</Button>
      </form>
    )
  }
}


export default MovieForm;