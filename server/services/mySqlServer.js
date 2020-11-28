const mysql = require('mysql')

// создаем соединение с нашей базой данных
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '258852',
  database: 'blog'
})

// открываем наше соединение с базой данных
connection.connect((err) => {
  if (err) throw err
  console.log('успешно соединено с базой данных')
})

export default connection
