import React from 'react';
import { connect } from 'react-redux';
import { fetchCountdowns } from '../store/countdowns';
import Countdown from 'react-countdown';

const dates = [
  {
    name: 'Birthday',
    date: Date.parse('13 Aug 2022 00:00:00 GMT')
  },

  {
    name: 'Natalies Wedding',
    date: Date.parse('22 Oct 2022 00:00:00 GMT')
  }
];

export class Countdowns extends React.Component {
  constructor(props){
    super(props)
  }
  
  componentDidMount() {
    this.props.fetchCountdowns()
    // console.log(this.props.countdowns)
  }
  
  render() {
    console.log(this.props.countdowns)
    const { countdowns } = this.props
    return (
      <div>
        {countdowns.map((date, key) => {
          return (
            <div key={key}>
              <div>{date.name}</div>
              <div>{date.day}</div>
              {/* <Countdown date={date.date} /> */}
            </div>
          );
        })}
      </div>
    );
  }
}

//This will go in an AddCountdown component
{
  /* <input type="date" id="start" name="trip-start"
       value="0000-00-00"
       min="2000-01-01" max="2100-12-31"></input> */
}

const mapState = (reduxState) => {
  return {countdowns: reduxState.countdowns}
}

const mapDispatch = (dispatch) => {
  return {
    fetchCountdowns: () => dispatch(fetchCountdowns())
  }
}

export default connect(mapState, mapDispatch)(Countdowns)