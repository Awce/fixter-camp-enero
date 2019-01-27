const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {
    required: "Este campo es requerido",
    type: String
  },
  img: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  duration: {
    type: Number
  }
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
})


module.exports = mongoose.model("Movie", movieSchema);