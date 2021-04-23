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

  private _configure(controller: typeof OrderController) {
    //GET ALL
    this._router.get("/", async function (req, res, next) {
      try {
        let orders = await controller.FetchAll();
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
        let order = await controller.FetchOneById(parseInt(req.params.id));
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
        let order = await controller.UpdateOneById(parseInt(req.params.id), req.body);
        res.status(202).json({
          order: order,
        });
      } catch (e) {
        res.status(404).json({ error: e.message });
      }
    });


    this._router.get("/bill/:tableId", async function (req, res, next) {
      try {
        
        
       let order = await controller.GetBill(parseInt(req.params.tableId));
        res.status(202).json(order);
      } catch (e) {
        res.status(404).json({ error: e.message });
      }
    });

    this._router.post("/command", async function (req, res, next) {
      try {
        let order = await controller.AddCocktailsToOrder(req.body);
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
        await controller.DeleteOneById(parseInt(req.params.id));
        res.status(204);
      } catch (e) {
        res.status(404).json({ error: e.message });
      }
    });

    this._router.put("/complete/:id", async function (req, res, next) {
      try {
        await controller.completeOrder(parseInt(req.params.id));
        res.status(200).json({});
      } catch (e) {
        res.status(404).json({ error: e.message });
      }
    })
  }
}

export = new OrderRouter().router;
