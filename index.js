const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Root endpoint
app.get('/', (req, res) => {
    res.send('Бозори Бадахшон Сервер Ҳолати Кор!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Сервер кор мекунад дар http://localhost:${PORT}`);
});
