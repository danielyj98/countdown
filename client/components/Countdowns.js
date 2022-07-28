import React from 'react';
import { connect } from 'react-redux';
import { fetchCountdowns } from '../store/countdowns';
import Countdown from 'react-countdown';

function dateConverter(num) {
  switch (num) {
    case 1:
      return 'Jan';
    case 2:
      return 'Feb';
    case 3:
      return 'Mar';
    case 4:
      return 'Apr';
    case 5:
      return 'May';
    case 6:
      return 'Jun';
    case 7:
      return 'Jul';
    case 8:
      return 'Aug';
    case 9:
      return 'Sep';
    case 10:
      return 'Oct';
    case 11:
      return 'Nov';
    case 12:
      return 'Dec';
  }
}

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
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCountdowns();
  }

  render() {
    console.log(this.props.countdowns);
    const { countdowns } = this.props;
    return (
      <div>
        {countdowns.map((date) => {
          let clock = `${date.day} ${dateConverter(date.month)} ${date.year} 00:00:00 GMT`
          return (
            <div key={date.id}>
              <div>{date.name}</div>
              <Countdown date={Date.parse(clock)} />
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
  return { countdowns: reduxState.countdowns };
};

const mapDispatch = (dispatch) => {
  return {
    fetchCountdowns: () => dispatch(fetchCountdowns())
  };
};

export default connect(mapState, mapDispatch)(Countdowns);
