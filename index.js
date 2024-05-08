const express = require('express')
const path = require('path')
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

// app.get('/', function (req, res) {
//     res.send('<h1>Hello World!</h1>')
//     console.log('Top page accessed')
//     console.log(req)
// })

// app.get('/about', function (req, res) {
//     res.send('Aboutページ');
//     console.log('About page accessed')
// })

app.post('/api/v1/quiz', function (req, res) {
    const answer = req.body.answer;
    if (answer === "2") {
        //res.send("<h3>正解◎</h3>")
        res.redirect("/correct.html")
    } else {
        //res.send("<h3>不正解×</h3>")
        res.redirect("/wrong.html")
    }
})

var listener = app.listen(3000, () => {
    console.log(listener.address().port)
    console.log('Running...')
})