const { connect } = require("./client");
const { setupInput, handleUserInput } = require("./input");

console.log("Connecting ...");
const conn = connect();

setupInput(conn);