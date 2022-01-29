const express = require("express");
const app = express();
const PORT = 8080;
const HOST = '0.0.0.0';
const path = require('path')

app.use('/', express.static(path.join(__dirname, 'public')))

app.listen(process.env.PORT || PORT, () =>
  console.log(`Server running on http://${process.env.HOST || HOST}:${PORT}`, 'hello')
);
