const express = require('express');
const app = express();

app.use(express.static('./work', {}));

app.listen('8080', () => {
  console.log('Ready on port 8080');
});