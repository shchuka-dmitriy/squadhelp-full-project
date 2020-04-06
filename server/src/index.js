require('./dbMongo/mongoose');

import httpServer from "./config/httpServer/httpServerConfig";

const controller = require('./socketInit');

controller.createConnection(httpServer);

