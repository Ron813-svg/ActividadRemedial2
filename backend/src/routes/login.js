import express from 'express'
import loginControl from '../controller/login.js'

const router = express.Router()

router.route('/')
.post(loginControl.logIn)

export default router