require('dotenv').config()
const express = require('express');
const routes = require('./routes')
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

console.log(process.env);

app.listen(3000);