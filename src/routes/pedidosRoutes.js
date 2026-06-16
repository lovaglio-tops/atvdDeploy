import { Router } from "express";

import pedidoController from "../controllers/pedidoController.js";

const pedidoRoutes = Router();

pedidoRoutes.post('/', pedidoController.criar);
pedidoRoutes.get('/', pedidoController.selecionar);
pedidoRoutes.get('/:id', pedidoController.selecionarPorId);
pedidoRoutes.put('/:id', pedidoController.editar);
pedidoRoutes.delete('/:id', pedidoController.deletar);
pedidoRoutes.post("/:id/item", pedidoController.adicionarItem);
pedidoRoutes.put("/item/:itemId", pedidoController.editarItem);
pedidoRoutes.delete("/item/:itemId", pedidoController.deletarItem);


export default pedidoRoutes;