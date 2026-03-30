import { Router } from 'express'
import userController from '../controllers/UserController.js'

const router = new Router()

router.post('/', userController.store)

export default router

/*
index -> Mostra todos os usuarios -> get
store ou create -> cria 1 usuario -> post
delete -> Apaga 1 usuario -> DELete
update -> att um usuario -> patch ou put
show -> mostra 1 usuario -> get

se seu controller fizer mais q esses 5 metodos provavelemente tem algo errado
e deveria criar outro
*/
