import { Router } from "express";
import userController from "../controllers/UserController.js";
import loginRequired from "../middlewares/loginRequired.js";

const router = new Router();

// Não deveria existir
 router.get("/", loginRequired, userController.index); // Lista usuários
// router.get("/:id", userController.show); // Lista usuário

// Existiria
router.post("/", loginRequired, userController.store);
router.put("/", loginRequired, userController.update);
router.delete("/", loginRequired, userController.delete);

export default router;

/*
index -> Mostra todos os usuarios -> get
store ou create -> cria 1 usuario -> post
delete -> Apaga 1 usuario -> DELete
update -> att um usuario -> patch ou put
show -> mostra 1 usuario -> get

se seu controller fizer mais q esses 5 metodos provavelemente tem algo errado
e deveria criar outro
*/
