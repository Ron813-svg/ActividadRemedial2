import express from 'express'
import registerControl from '../controller/register.js'

const router = express.Router()


router.route('/').post(registerControl.Register)

export default router