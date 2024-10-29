// api-gateway/gateway.js
const gateway = require('fast-gateway');
const port = 9001;

const server = gateway({
    routes: [
        {
            prefix: '/',  
            target: 'http://localhost:9002', 
            hooks: {}
        },
        {
            prefix: '/movies', 
            target: 'http://localhost:9003',
            hooks: {}
        },
        {
            prefix: '/reviews', 
            target: 'http://localhost:9004',
            hooks: {}
        }
    ]
});

server.start(port).then(() => {
    console.log(`Gateway ejecutándose en el puerto: ${port}`);
});
