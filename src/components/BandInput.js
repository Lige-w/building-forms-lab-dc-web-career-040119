// Add BandInput component
import React, { Component } from 'react'
import { connect } from "react-redux";
import { addBand } from "../actions/bandActions";

class BandInput extends Component {

  state = {
    name: ''
  }

  handleChangeName = e => {
    this.setState({name: e.target.value})
  }

  submitBand = e => {
    e.preventDefault()
    this.props.addBand(this.state)
    this.setState({name: ''})
  }

  render() {
    return(
      <div>
        <form onSubmit={this.submitBand}>
          <label htmlFor="name">Band Name</label>
          <input type="text" onChange={this.handleChangeName} placeholder='Enter Band Name Here...'/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default connect(null, {addBand})(BandInput)
