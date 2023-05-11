import mysql from 'mysql'

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'estore',
  port: 3306,
  multipleStatements: true,
})

export default connection
