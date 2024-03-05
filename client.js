const { IP, PORT } = require("./constants");
const net = require("net");

const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log("Successfully connected to game server\n Commands\n - w: To move up\n - a: To move down\n - s: To move left\n - d: To move right\n - 1: sssssee ya!\n - 2: nomnomnom\n - 3: ready to lose?\n - Control + C: to exit game");
    conn.write("Name: MAP");
  });

  conn.on("data", (data) => {
    console.log('server say: ', data)
  })

  return conn;
};

module.exports = { connect };
