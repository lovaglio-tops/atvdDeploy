import { Router } from "express";
const routes = Router();

import produtoRoutes from "./produtoRoutes.js";
import pedidoRoutes from "./pedidosRoutes.js";
import categoriaRoutes from "./categoriaRoutes.js";


routes.use('/produtos', produtoRoutes)
routes.use('/pedidos', pedidoRoutes)
routes.use('/categoria', categoriaRoutes)

export default routes