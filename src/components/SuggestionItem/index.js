// Write your code here

import './index.css'

const SuggestonItem = props => {
  const {suggestionDetails,getIntoUserinput} = props
  const {id, suggestion} = suggestionDetails
  const onSuggestionClick = () => {
    getIntoUserinput(suggestion)

  }
  return (
    <li className="list-styling">
      <p className="suggestion-text">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="img-styling"
        onClick ={onSuggestionClick}
      />
    </li>
  )
}

export default SuggestonItem
