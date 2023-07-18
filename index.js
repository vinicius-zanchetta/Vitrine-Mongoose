import express from 'express';
import { engine } from 'express-handlebars';

// Import Routes
import productsRoutes from './routes/productsRoutes.js'


import conn from './db/conn.js'

const app = express()

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({
    extended: true,
}))


app.use('/products', productsRoutes)
app.get('/', (req, res) => {
    res.redirect('/products')
})

const port = process.env.PORT || 8080;
app.listen(port);