import React from 'react';

class MovieForm extends React.Component {
  state = {name: ''}

  

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.name);
    this.setState({ name: '' })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder='Add A Movie'
          required
          value={this.state.name}
          onChange={this.handleChange}
        />
      </form>
    )
  }
}


export default MovieForm;