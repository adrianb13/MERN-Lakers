import * as types from "../actions/types";

const initialState = {
  info: [],
  retired: [],
  roster: [],
  stats: [],
  trivia: [],
  schedule: []
};

let rootReducer = (state = initialState, action) => {
  switch(action.type){
    case types.LOAD_INFO_SUCCESS:
      return Object.assign({}, state, {
        info: state.info.concat(action.info)
      });
    case types.LOAD_RETIRED_SUCCESS:
      return Object.assign({}, state, {
        retired: state.retired.concat(action.retired)
      });
    case types.LOAD_ROSTER_SUCCESS:
      return Object.assign({}, state, {
        roster: state.roster.concat(action.roster)
      })
    case types.LOAD_STATS_SUCCESS: 
      return Object.assign({}, state, {
        stats: state.stats.concat(action.stats)
      })
    case types.LOAD_TRIVIA_SUCCESS:
      return Object.assign({}, state, {
        trivia: state.trivia.concat(action.trivia)
      })
    case types.GET_SCHEDULE_SUCCESS:
      return Object.assign({}, state, {
        schedule: state.schedule.concat(action.schedule)
      })
    default:
      return state;
  }
};

export default rootReducer;