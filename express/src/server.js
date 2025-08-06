const express = require('express');
const server = express();   

server.get('/', (req, res) => {
    res.send('você esta na pagina inicial feita com express');
})

server.get('/sobre', (req, res) => {
    res.send('você esta na pagina sobre feita com express');
})

const PORT = 3003;
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});