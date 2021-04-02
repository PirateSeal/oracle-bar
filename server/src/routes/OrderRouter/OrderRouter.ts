import { Router } from "express";
import OrderController from "../../controllers/OrderController";

class OrderRouter {
  private _controller = OrderController;

  constructor() {
    this._configure(this._controller);
  }

  private _router = Router();

  get router() {
    return this._router;
  }

  private _configure(controller) {
    //GET ALL
    this._router.get("/", async function (req, res, next) {
      try {
        let orders: number = await controller.FetchAll();
        res.status(200).json({
          orders: orders,
        });
      } catch (e) {
        res.status(500).json({ error: e.message });
      }
    });

    //GET ONE
    this._router.get("/:id", async function (req, res, next) {
      try {
        let order = await controller.FetchById(req.params.id);
        res.status(200).json({
          order: order,
        });
      } catch (e) {
        res.status(404).json({ error: e.message });
      }
    });

    //POST ONE
    this._router.post("/", async function (req, res, next) {
      try {
        let order = await controller.CreateOne(req.body);
        res.status(201).json({
          order: order,
        });
      } catch (e) {
        res.status(400).json({ error: e.message });
      }
    });

    //UPDATE ONE
    this._router.put("/:id", async function (req, res, next) {
      try {
        let order = await controller.UpdateOne(req.params.id, req.body);
        res.status(202).json({
          order: order,
        });
      } catch (e) {
        res.status(404).json({ error: e.message });
      }
    });

    //DELETE ONE
    this._router.delete("/:id", async function (req, res, next) {
      try {
        await controller.DeleteOne(req.params.id);
        res.status(204);
      } catch (e) {
        res.status(404).json({ error: e.message });
      }
    });
  }
}

export = new OrderRouter().router;
