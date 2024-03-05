const { IP, PORT } = require("./constants");
const net = require("net");

const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: MAP");
  });

  conn.on("data", (data) => {
    console.log('server say: ', data)
  })
  
  return conn;
};

module.exports = { connect };
