import React from 'react';

class Search extends React.Component {
  constructor(props)
    super(props)
    this.state = {
      search: '',
    }
}

render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <input type="text" name="searchfield" id="search" onChange={this.handleChange}/>
      <input type="submit" name="submit" onChange={this.handleChange}/>
    </form>
  )
}