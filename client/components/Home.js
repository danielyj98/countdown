import React from 'react'
import {connect} from 'react-redux'
import Countdown from 'react-countdown'
import Countdowns from './Countdowns'


/**
 * COMPONENT
 */
export const Home = props => {
  const {username} = props

  return (
    <div>
      <Countdowns />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    username: state.auth.username
  }
}

export default connect(mapState)(Home)
