// Write your code here

import './index.css'

import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getIntoUserinput = (suggestion) =>{
    this.setState({searchInput:suggestion})

  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchResult = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )
    return (
      <div className="main-bg">
        <div className="content-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-logo"
          />
          <div className="searchbar-list-container">
            <div className="search-bar">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-icon"
              />
              <input
                type="search"
                onChange={this.onSearchInput}
                value={searchInput}
                placeholder="Search Google"
                className="input-section"
              />
            </div>
            <ul className="unordered-styling">
              {searchResult.map(eachSuggestion => (
                <SuggestionItem
                  key={eachSuggestion.id}
                  suggestionDetails={eachSuggestion}
                  getIntoUserinput = {this.getIntoUserinput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
