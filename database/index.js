const server = require("./src/server.js");

const PORT = 8004;

server.listen(PORT, () => {
  console.log(`Database service running on PORT ${PORT}`);
});
