/*Подключаем и express и socketIo одновременно*/

require('./dbMongo/mongoose');                                                 /*импортируем конфиги mongoose*/
const http = require('http');                                                         /*подключаем модуль http, нодовский дефольный*/
const express = require('express');
const router = require('./router');
const cors = require('cors');                                                         /*подключаем middleware для cors origin resorses*/
const controller = require('./socketInit');
const handlerError = require('./handlerError/handler');


const PORT = process.env.PORT || 9632;                                                /*пдключаем порт, если в переменном окружении не указан то берем 9632*/
const app = express();                                                                /*создается экземпляр express*/

    /*монтируются middlewares*/
app.use(cors());
app.use(express.json());                                        /*middleware чтобы парсить json автоматически, десерриализовать*/
app.use('/public', express.static('public'));                     /*прописываем где будут находится статические файлы*/
app.use(router);                                                      /*монтируем маршрутизатор*/
app.use(handlerError);                                                /*монтируем обработчик который должен идти вконце*/

    /*В сервер засовывается app, а сервер засовывается в socketIo (controller)*/
const server = http.createServer(app);                                /*создаем сервер http передаем туда экспресс приложение, будет как обертка приложению*/
server.listen(PORT/*,
  () => console.log(`Example app listening on port ${ PORT }!`)*/);
controller.createConnection(server);                                  /*контроллеру socket передаем сервер*/


