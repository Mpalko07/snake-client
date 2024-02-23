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
  conn.on('data', (data) => {
    console.log('Message from server:', data);
  });

  return conn;
};

module.exports = { connect };