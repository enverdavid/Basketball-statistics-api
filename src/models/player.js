const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var PlayerSchema = Schema({
  playerName: { type: String },
  playerNumber: { type: String },
  playerImg: { type: String },
  playerPoints: { type: Number },
  teamName: { type: String },
  // teamColor: { type: String },
  // teamShadowColor: { type: String },
  // teamShadowHoverColor: { type: String },
});

const Player = mongoose.model('Persona', PlayerSchema);
module.exports = { Player };
