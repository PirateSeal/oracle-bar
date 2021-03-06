import dotenv from "dotenv";

import express, { NextFunction, Request, Response } from "express";
import MasterRouter from "./routes/MasterRouter";
import ErrorHandler from "./controllers/ErrorHandler";
import { Sequelize } from "sequelize-typescript";
import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "./swagger.json";
var cors = require("cors");

dotenv.config({
  path: ".env",
});

const bp = require("body-parser");

const db = new Sequelize({
  database: process.env.DB_NAME,
  dialect: "postgres",
  logging: console.log,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: "localhost",
  port: 5432,
  models: [__dirname + "/models"], // or [Player, Team],
});

class Server {
  public app = express();
  public router = MasterRouter;
}

db.authenticate()
  .then(() => console.log("Connected to database successfully"))
  .catch((err) => console.log("ERROR: " + err));

db.sync()
  .then(() => console.log("Database sync complete"))
  .catch((err) => console.log("ERROR: " + err));

const server = new Server();

server.app.use(cors());

server.app.use(bp.json());
server.app.use(bp.urlencoded({ extended: true }));
server.app.use("/api", server.router);
server.app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

server.app.use(
  (err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
    res.status(err.statusCode || 500).json({
      status: "error",
      statusCode: err.statusCode,
      message: err.message,
    });
  }
);

((port = process.env.APP_PORT || 3001) => {
  server.app.listen(port, () => console.log(`> Listening on port ${port}`));
})();
