const axios = require("axios");

module.exports = {
  list: async () => {
    return await axios.get("http://database:8004/Film").then((res) => res.data);
  },
  getById: async (id) => {
    return await axios
      .get(`http://database:8004/Film/${id}`)
      .then((res) => res.data);
  },
  create: async (film) => {
    return await axios
      .post(`http://database:8004/Film`, film)
      .then((res) => res.data);
  },
};
