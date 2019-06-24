import React, { Component } from 'react'
import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
      const bandElements = this.props.bands.map((band, i) => (
          <li key={`band-${i}`}>{band.name}</li>
      ))
    return(
      <ul>
        {bandElements}
      </ul>
    )
  }
}

export default connect(state => (state) )(BandsContainer)
