/* Código que se considera 'Bug Fantasma' porque no lo consume el módulo frontend */

import { Router } from "express";
import { ProductWarehouseController } from "../controllers/productWarehouse.controller.js";

const router = Router();

/* Rutas creadas para vistas dirigidas al administrador de la página pero no se ha implementado en el módulo del frontend */
router.get("/", ProductWarehouseController.getProducts);
router.get("/:id", ProductWarehouseController.getProduct);
router.post("/", ProductWarehouseController.createProduct);
router.patch("/:id", ProductWarehouseController.partiallyUpdateProduct);
router.put("/:id", ProductWarehouseController.fullyUpdateProduct);
router.delete("/:id", ProductWarehouseController.deleteProduct);

export { router };
