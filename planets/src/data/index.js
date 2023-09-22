const axios = require("axios");

module.exports = {
  list: async () => {
    return await axios
      .get("http://database:8004/Planet")
      .then((res) => res.data);
  },
  getById: async (id) => {
    return await axios
      .get(`http://database:8004/Planet/${id}`)
      .then((res) => res.data);
  },
  create: async (character) => {
    return await axios
      .post(`http://database:8004/Planet`, character)
      .then((res) => res.data);
  },
};
