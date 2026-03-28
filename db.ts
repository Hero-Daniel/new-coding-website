// import Database from "better-sqlite3";
// export const db = new Database("./sqlite.db");

// db.js
const Database = require("better-sqlite3");

const db = new Database("./sqlite.db");

module.exports = { db };