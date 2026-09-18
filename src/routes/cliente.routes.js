import { Router } from "express";
import { agregateCliente, deleteCliente, idClientes, todayClient, updateClientes } from "../controllers/cliente.controllers.js";
import { validate } from "../middlewares/validate.js";
import { agregateClienteValidator, deleteClienteValidator, idClientesValidator, updateClienteValidator } from "../middlewares/validations/cliente.validation.js";
export const clienteRouter = Router()

clienteRouter.get("/clientes",todayClient)
clienteRouter.post("/clientes",agregateClienteValidator,validate,agregateCliente)
clienteRouter.get("/clientes/:id",idClientesValidator,validate,idClientes)
clienteRouter.put("/clientes/:id",updateClienteValidator,validate,updateClientes)
clienteRouter.delete("/clientes/:id",deleteClienteValidator,validate,deleteCliente)