import express from 'express';

import homepage from './middleware/homepage';
import login from './middleware/login';
import authenticate from './middleware/authenticate';
import dashboard from './middleware/dashboard';

function setupRoutes(app) {
    app.get('/', homepage);
    app.get('/login', login);
    app.get('/dashboard',
        authenticate,
        dashboard
    );
}

function start(port = 8080) {
    const app = express();

    setupRoutes(app);

    const server = app.listen(port, () => {
        console.log(`Server running on: ${port}`);
    });

    return server;
}

export {
    start
};
