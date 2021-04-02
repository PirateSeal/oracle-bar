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
    this._router.get("/", function (req, res, next) {
      //TODO GET ALL
      res.send("Order");
    });

    //GET ONE
    this._router.get("/:id", function (req, res, next) {
      //TODO GET ONE
    });

    //POST ONE
    this._router.post("/", function (req, res, next) {
      try {
        let order = controller.CreateOne(req.body.order);
        res
          .json({
            order: order,
          })
          .sendStatus(201);
      } catch (e) {
        res.json({ error: e.message });
      }
    });

    //UPDATE ONE
    this._router.put("/:id", function (req, res, next) {
      //TODO UPDATE ONE
      try {
        let order = controller.UpdateOne(req.body.order);
        res
          .json({
            order: order,
          })
          .sendStatus(200);
      } catch (e) {
        res.json({ error: e.message });
      }
    });

    //DELETE ONE
    this._router.delete("/:id", function (req, res, next) {
      //TODO DELETE ONE
    });
  }
}

export = new OrderRouter().router;
