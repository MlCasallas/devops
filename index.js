const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hola nuestro nombre es: Nestor y milton');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});