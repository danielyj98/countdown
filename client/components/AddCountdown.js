import React from 'react';
import { connect } from 'react-redux';
import { addCountdown } from '../store/countdowns';
import { Link } from 'react-router-dom';

export class AddCountdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      year: '',
      month: '',
      day: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  } 

  handleSubmit(evt) {
    evt.preventDefault()
    console.log("State", this.state)
    this.props.addCountdown({...this.state})
  }

  render() {
    const { name, year, month, day } = this.state
    const { handleSubmit, handleChange } = this;
    return (
      <div>
        <h2>Add Countdown</h2>
        <form id="countdown-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Event Name:</label>
          <input name="name" onChange={handleChange} value={name} />

          <label htmlFor="year">Year:</label>
          <input name="year" onChange={handleChange} value={year} />

          <label htmlFor="month">Month:</label>
          <input name="month" onChange={handleChange} value={month} />

          <label htmlFor="day">Day:</label>
          <input name="day" onChange={handleChange} value={day} />

          <button type="submit">Submit</button>
          <Link to="/">back</Link>
        </form>
      </div>
    );
  }
}

//This will go in an AddCountdown component (Maybe)
{
  /* <input type="date" id="start" name="trip-start"
       value="0000-00-00"
       min="2000-01-01" max="2100-12-31"></input> */
}

const mapDispatch = (dispatch) => {
  return {
    addCountdown: (countdown) => dispatch(addCountdown(countdown))
  };
};

export default connect(null, mapDispatch)(AddCountdown);
