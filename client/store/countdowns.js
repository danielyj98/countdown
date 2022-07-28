import axios from 'axios'

const SET_COUNTDOWNS = 'SET_COUNTDOWNS'
const ADD_COUNTDOWN = 'ADD_COUNTDOWN'

export const setCountdowns = (countdowns) => {
  return {
    type: SET_COUNTDOWNS,
    countdowns: countdowns
  }
}

export const _addCountdown = (countdown) => {
  return {
    type: ADD_COUNTDOWN,
    countdown: countdown
  };
};

export const fetchCountdowns = () => {
  return async (dispatch) => {
    const { data: countdowns } = await axios.get('/api/countdowns');
    dispatch(setCountdowns(countdowns));
  };
};

export const addCountdown = (countdown) => {
  return async (dispatch) => {
    const { data: created } = await axios.post('/api/countdowns', countdown);
    dispatch(_addCountdown(created))
  }
}

export default function countdownsReducer(state = [], action) {
  switch (action.type) {
    case SET_COUNTDOWNS:
      return action.countdowns;
    case ADD_COUNTDOWN:
      return [...state, action.countdown];
    // case DELETE_CAMPUS:
    //   return state.filter((campus) => campus.id !== action.id);
    default:
      return state;
  }
}