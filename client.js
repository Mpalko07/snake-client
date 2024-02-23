const net = require("net");

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: '172.22.181.232',
    port: '50541',
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // Event listener for incoming data
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: MAP");
  });

  return conn;
};

module.exports = { connect };