import { Router } from "express";
import TableController from "../../controllers/TableController";

class TableRouter {
  private _controller = TableController;

  constructor() {
    this._configure(this._controller);
  }

  private _router = Router();

  get router() {
    return this._router;
  }

  private _configure(controller) {
    //GET ALL
    this._router.get("/", function (req, res, next) {
      try {
        let tables = controller.FetchAll();
        res.status(200).json({ tables: tables });
      } catch (e) {
        res.status(500).json({ error: e.message });
      }
    });

    //GET ONE
    this._router.get("/:id", function (req, res, next) {
      try {
        let table = controller.FetchOne(req.params.id);
        res.status(200).json({ table: table });
      } catch (e) {
        res.status(404).json({ error: e.message });
      }
    });

    //POST ONE
    this._router.post("/create", function (req, res, next) {
      try {
        let table = controller.CreateOne(req.body);
        res.status(201).json({ table: table });
      } catch (e) {
        res.status(400).json({ error: e.message });
      }
    });

    //UPDATE ONE
    this._router.put("/:id", function (req, res, next) {
      try {
        let table = controller.UpdateOne(req.params.id, req.body.table);
        res.status(202).json({ table: table });
      } catch (e) {
        res.status(404).json({ error: e.message });
      }
    });

    //DELETE ONE
    this._router.delete("/:id", function (req, res, next) {
      try {
        controller.DeleteOne(req.params.id);
        res.status(204);
      } catch (e) {
        res.status(404).json({ error: e.message });
      }
    });
  }
}

export = new TableRouter().router;
