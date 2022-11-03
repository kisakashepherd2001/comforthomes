require("dotenv").config();
const { pool } = require("./dbConfig");
const { pool } = require("pg");
const isProduction =process.env.NODE.ENV === "production";

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB-DATABASE}`;

const pool = new Pool({
    connectionString: isProduction ? process.env.DATABASE_URL : connectionString

});






