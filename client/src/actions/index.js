import * as types from "./types";
import API from "../utils/API";
import info from "../assets/data/info.json";
import retired from "../assets/data/retiredNumbers.json";
import roster from "../assets/data/roster.json";
import stats from "../assets/data/stats.json";
import trivia from "../assets/data/trivia.json";

export const loadInfo = () => {
  return {type: types.LOAD_INFO_SUCCESS, info}
};

export const loadRetired = () =>{
  return {type: types.LOAD_RETIRED_SUCCESS, retired}
};

export const loadRoster = () =>{
  return {type: types.LOAD_ROSTER_SUCCESS, roster}
};

export const loadStats = () =>{
  return {type: types.LOAD_STATS_SUCCESS, stats}
};

export const loadTrivia = () =>{
  return {type: types.LOAD_TRIVIA_SUCCESS, trivia}
};

export const getSchedule = () => {
  return (dispatch) => {
    return API.getSchedule()
      .then(res => {
        console.log("res", res)
        dispatch(getScheduleSuccess(res.data))
      })
      .catch(err => console.log("error",err))
  };
};

const getScheduleSuccess = (schedule) => {
  return { type: types.GET_SCHEDULE_SUCCESS, schedule}
};