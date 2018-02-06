import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { city: '' }

    this.onCityInputChange = this.onCityInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onCityInputChange(event) {
    this.setState({ city: event.target.value })
  }

  onFormSubmit(event) {
    event.preventDefault()
    this.props.fetchWeather(this.state.city)
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          search for 5-day forecast
        </div>
        <div className="row">
          <form onSubmit={this.onFormSubmit} className="input-group">
            <div className="col-md-4">
              <input
                placeholder="enter city"
                className="form-control"
                value={this.state.city}
                onChange={this.onCityInputChange}
              />
            </div>
            <div className="col-md-4">
              <span className="input-group-btn">
                <button type="submit" className="btn btn-secondary">Submit</button>
              </span>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)
