import { Router } from "express";
import CocktailController from "../../controllers/CocktailController";
import { CocktailOrderlDTO } from "../../dtos/Cocktail/CocktailOrderDTO";


class CocktailRouter {
  private _controller = CocktailController;

  constructor() {
    this._configure(this._controller);
  }

  private _router = Router();

  get router() {
    return this._router;
  }

  private _configure(controller: typeof CocktailController) {
    //GET ALL
    this._router.get("/", async function (req, res, next) {
      try {
        let cocktails = await controller.FetchAll();
        res.status(200).json(cocktails);
      } catch (e) {
        res.status(500).json({ error: e.message });
      }
    });

    //Get Not Delivered
    this._router.get<{}, CocktailOrderlDTO[] | {error: string}>("/ordered", async function (req, res, next) {
        try {
          let cocktails = await controller.FetchNotDelivered();
          res.status(200).json(cocktails);
        } catch (e) {
          res.status(500).json({ error: e.message });
        }
      });
  }
}

export = new CocktailRouter().router;
