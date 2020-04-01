/*Абстрактный клас для последующего его наследования в контроллерах для socket*/

const CONSTANTS = require('../../../constants');

class WebSocket{
  connect (namespace, io) {
    this.io = io.of(namespace);                       /*вызов для создания namespace и сохраняется в свойство текущий сокет для этого конткретного namespace*/
    this.listen();                                    /*и запускается прослушивание*/
  }

  listen () {
    this.io.on(CONSTANTS.SOCKET_CONNECTION, (socket) => {                 /*колбэк ф-ция, котороя выполнится на каждое подключение*/
      this.onSubscribe(socket);
      this.onUnsubscribe(socket);
      this.anotherSubscribes(socket);
    });
  }

  anotherSubscribes (socket) {

  }

  onSubscribe (socket) {
    socket.on(CONSTANTS.SOCKET_SUBSCRIBE, (id) => {
      socket.join(id);                                                /*юзер джоинится (подписывается) в namespace*/
    });
  }

  onUnsubscribe (socket) {
    socket.on(CONSTANTS.SOCKET_UNSUBSCRIBE, (id) => {
      socket.leave(id);                                                /*юзер покидает namespace*/
    });
  }
}

module.exports = WebSocket;
