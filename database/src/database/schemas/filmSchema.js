const { Schema } = require("mongoose");

const filmSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  opening_crawl: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  producer: String,
  release_date: Date,
  // Claves foráneas
  characters: [{ type: String, ref: "Character" }],
  planets: [{ type: String, ref: "Planet" }],
});

filmSchema.statics.list = async function () {
  return await this.find()
    .populate("characters", ["_id", "name"])
    .populate("planets", ["_id", "name"]);
};

filmSchema.statics.get = async function (id) {
  return await this.findById(id)
    .populate("characters", ["_id", "name"])
    .populate("planets", ["_id", "name"]);
};

filmSchema.statics.insert = async function (film) {
  return await this.create(film);
};

module.exports = filmSchema;
