import express from 'express'
const app = express()
import cors from 'cors'
app.use(cors())
import product from './Routes/product.js'
app.use('/product/api/', product)

app.use('/', express.static('Uploads'))

const PORT = 5000
const server = app.listen(PORT, () => {
  console.log('App is running on port - ' + PORT)
})
