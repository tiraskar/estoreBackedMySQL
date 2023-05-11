import express from 'express'
const product = express()
import connection from '../Database/index.js'

product.get('/getCategories', (req, res) => {
  let appData = {
    isError: false,
    data: [],
  }
  connection.getConnection((err, connection) => {
    if (err) {
      appData.isError = true
      appData.data = err
      res.status(500).json(appData)
    } else {
      connection.query('Select * from categories', (error, rows) => {
        if (error) {
          appData.isError = true
          appData.data = err
          res.status(500).json(appData)
        } else {
          appData.data = rows
          res.status(200).json(appData)
        }
      })
      connection.release()
    }
  })
})
product.get('/getProducts', (req, res) => {
  let appData = {
    isError: false,
    data: [],
  }
  connection.getConnection((err, connection) => {
    if (err) {
      appData.isError = true
      appData.data = err
      res.status(500).json(appData)
    } else {
      connection.query('Select * from products', (error, rows) => {
        if (error) {
          appData.isError = true
          appData.data = err
          res.status(500).json(appData)
        } else {
          appData.data = rows
          res.status(200).json(appData)
        }
      })
      connection.release()
    }
  })
})

export default product
