const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path')
const port = 2003;

app.use(cors());
app.use(express.static(path.join(__dirname, '/../public/')))

app.listen(port, () => { console.log(`node is listening on port ${port}`) })