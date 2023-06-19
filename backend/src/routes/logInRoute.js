import { postLogin } from '../controladores/logInController.js'
import { Router } from 'express'

const router = Router()

router.post('/', postLogin)

export default router