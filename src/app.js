import express from 'express'
import cors from 'cors'
import cartRouter from './routes/cart.routes.js'
import productsRouter from './routes/products.routes.js'
import authRouter from './routes/auth.routes.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use([cartRouter, productsRouter, authRouter])

app.listen(5000, () => {
    console.log('server rodando')
})