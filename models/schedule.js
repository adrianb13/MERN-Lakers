const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scheduleSchema = new Schema ({
  date: {
    type: String,
    required: true,
    unique: true
  },
  home: {
    type: Boolean,
    required: true
  },
  opponent: {
    type: String,
    required: true
  },
  game: {
    type: String,
    required: true
  },
  score: {
    type: String,
    required: true
  },
  win: {
    type: Boolean
  }
});

const Schedule = mongoose.model("Schedule", scheduleSchema);

module.exports = Schedule;