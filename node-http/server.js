const http = require('node:http');

const server = http.createServer((req, res) => {
    const path = req.url;
    switch (path) {
        case '/':
            res.writeHead(200);
            res.write('você esta na pagina inicial');
            break;  
        case '/sobre':
            res.writeHead(200);
            res.write('você esta na pagina sobre');
            break;
        default:
            res.writeHead(404);
            res.write('Página não encontrada');
            break;
}
    res.end();
});

server.listen(3002, () => {
    console.log("Servidor rodando em http://localhost:3002");
});