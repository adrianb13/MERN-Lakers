import axios from "axios";

const API = {
  getSchedule: () => {
    return axios.get("/api/schedule/")
  },
  addGame: (game) => {
    return axios.post("/api/schedule/", game)
  },
  updateGame: (game) => {
    return axios.put("/api/schedule/" + game._id, game)
  },
  deleteGame: (gameId) => {
    return axios.delete("/api/schedule" + gameId)
  }
};

export default API;