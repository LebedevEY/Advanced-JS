const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Привет от сервера!');
});

app.listen(PORT, () => {
    console.log('Тест');
});