import { Router } from "express";
import TableController from "../../controllers/TableController";

class TableRouter {
  private _controller = TableController;

  constructor() {
    this._configure();
  }

  private _router = Router();

  get router() {
    return this._router;
  }

  private _configure() {
    //GET ALL
    this._router.get("/", function (req, res, next) {
      //TODO GET ALL
    });

    //GET ONE
    this._router.get("/:id", function (req, res, next) {
      //TODO GET ONE
    });

    //POST ONE
    this._router.post("/create", function (req, res, next) {
      //TODO CREATE ONE
    });

    //UPDATE ONE
    this._router.put("/:id", function (req, res, next) {
      //TODO UPDATE ONE
    });

    //DELETE ONE
    this._router.delete("/:id", function (req, res, next) {
      //TODO DELETE ONE
    });
  }
}

export = new TableRouter().router;
