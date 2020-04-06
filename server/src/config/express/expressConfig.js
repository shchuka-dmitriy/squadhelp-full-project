const express = require('express');
const router = require('./../router');
const cors = require('cors');
const handlerError = require('./../handlerError/handler');

const expressConfig = express();

expressConfig.use(cors());
expressConfig.use(express.json());
expressConfig.use('/public', express.static('public'));
expressConfig.use(router);
expressConfig.use(handlerError);

export default expressConfig;
