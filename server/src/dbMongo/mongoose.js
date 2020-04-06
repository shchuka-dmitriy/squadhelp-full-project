/*--Это установка и настройка конфигурации mongoose--*/

const mongoose = require('server/src/dbMongo/mongoose');                                               /*устанавливаем mongoose*/
const path = require('path');
const env = process.env.NODE_ENV || 'development';                                      /*определяется какой режим в зависимости от переменной окружения NODE_ENV. По дефолту development*/
const configPath = path.join(__dirname, '..',                                           /*определяем где находится файл конфигурации*/
  'config/mongoConfig.json');
const config = require(configPath)[ env ];                                              /*вычисляемым свойством достали из mongoConfig.json нужное переменное окружение - env*/

mongoose.connect(
  `mongodb://${ config.host }:${ config.port }/${ config.database }`,               /*вычислили строку подключения*/
  { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
      process.exit(1);                                                            /*если ошибка то выйдем*/
    }
  });

mongoose.set('debug', env === 'development');                                           /*если development то debug = true, включаем ?????*/

module.exports = mongoose;
