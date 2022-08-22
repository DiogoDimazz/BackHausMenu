require('dotenv').config()
const express = require('express');
const routes = require('./routes')
const cors = require('cors');

const app = express();

console.log('linha 8 - antes do cors');

app.use(express.json({ limit: '5mb' }));
app.use(cors());
app.use(routes);

console.log('linha 14 - passei do cors');

app.listen(process.env.PORT || 3000);