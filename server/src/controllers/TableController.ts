import ErrorHandler from "./ErrorHandler";

class TableController {
  defaultMethod() {
    throw new ErrorHandler(501, "Not implemented method");
  }
}

export = new TableController();
