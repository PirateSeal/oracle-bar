import { Router } from "express";
import People from "./OrderRouter/OrderRouter";
import Table from "./TableRouter/TableRouter";

class MasterRouter {
  private _peopleRoute = People;
  private _tableRoute = Table;

  constructor() {
    this._configure();
  }

  private _router = Router();

  get router() {
    return this._router;
  }

  private _configure() {
    this._router.use("/people", this._peopleRoute);
    this._router.use("/table", this._tableRoute);

    this._router.get("/", function (req, res, next) {
      res.send("This is the API 👍");
    });
  }
}

export = new MasterRouter().router;
