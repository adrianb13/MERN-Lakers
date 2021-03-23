const db = require("../models");

module.exports = {
  getSchedule: (req, res) => {
    db.Schedule
      .find({})
      .then(dbModel => {res.json(dbModel)})
      .catch(err => {res.status(422).json(err)});
  },
  addGame: (req, res) => {
    db.Schedule
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .cath(err => res.status(422).json(err));
  },
  updateGame: (req, res) => {
    db.Schedule
      .findAndModify({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .cath(err => res.status(422).json(err));
  },
  deleteGame: (req, res) => {
    db.Schedule
      .remove({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .cath(err => res.status(422).json(err));
  }
};