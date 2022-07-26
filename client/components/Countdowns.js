import React from 'react';
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

const Countdowns = (props) => {
  return (
    <div>
      {dates.map((date) => {
        return (
          <div>
            <div>{date.name}</div>
            <Countdown date={date.date} />
          </div>
        );
      })}
    </div>
  );
};

export default Countdowns

//This will go in an AddCountdown component
{
  /* <input type="date" id="start" name="trip-start"
       value="0000-00-00"
       min="2000-01-01" max="2100-12-31"></input> */
}
