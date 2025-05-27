import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'


//CRUDS Routes:

import casinoRoutes from './src/routes/casino.js'
import clientesRoutes from './src/routes/clientes.js'
import login from './src/routes/login.js'

const corsOption = {
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true 
}

const app = express()
app.use(cors(corsOption))
app.use(express.json())
app.use(cookieParser())


//CRUDS Routes:
app.use('/api/casino', casinoRoutes)
app.use('/api/clientes', clientesRoutes)

//LOGIN and REGISTER Routes:
app.use('/api/login', login)

export default app
