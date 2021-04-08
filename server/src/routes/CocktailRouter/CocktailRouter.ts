import { Router } from "express";
import CocktailController from "../../controllers/CocktailController";

//TODO
class CocktailRouter {
  private _controller = CocktailController;

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
        let cocktails: number = await controller.FetchAll();
        res.status(200).json(cocktails);
      } catch (e) {
        res.status(500).json({ error: e.message });
      }
    });
  }
}

export = new CocktailRouter().router;
