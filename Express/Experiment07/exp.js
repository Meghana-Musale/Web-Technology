const express = require('express');
const app = express();

const PORT = 3002;

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;   // Access parameter
    res.send(`User ID is: ${userId}`);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});