const app = require('./index')
let port = process.env.PORT||3000;
app.listen(port, (err) => {
    if (err) throw err
    console.log('Server running in http://127.0.0.1:' + port)
})