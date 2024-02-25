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
    
    let currentDirection = "up"; // Define initial direction

    const sendSnakeMovement = () => {
      conn.write(`Move: ${currentDirection}`);
    };

    setInterval(sendSnakeMovement, 500);

    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on("data", (key) => {
      if (key === '\u0003') {
        process.exit();
      } else if (key === 'w') {
        currentDirection = "up";
      } else if (key === 'a') {
        currentDirection = "left";
      } else if (key === 's') {
        currentDirection = "down";
      } else if (key === 'd') {
        currentDirection = "right";
      }
    });
  });

  return conn;
};

module.exports = { connect };
