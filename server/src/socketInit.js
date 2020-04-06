

const socketio = require('socket.io');
const ChatController = require('./controllers/sockets/ChatController');
const NotificationController = require('./controllers/sockets/NotificationController');

    /*!!!!! плохое решение так использовать переменные*/
let notificationController;
let chatController;

module.exports.createConnection = (httpServer) => {                           /*в ф-цию connection передается httpServer, созданный в index.js*/
  const io = socketio.listen(httpServer);                                     /*прослушивание сервера*/
      /*создаются контроллеры*/
  notificationController = new NotificationController();
  notificationController.connect('/notifications', io);           /*в метод connect указывается namespace и передается экземпляр socketIo, нэймспэйс /notifications - эно наверное какието оповещения от сервера*/
  chatController = new ChatController();
  chatController.connect('/chat', io);                            /*в метод connect указывается namespace и передается экземпляр socketIo*/
};

    /*геттеры контроллеров*/
module.exports.getChatController = () => {
  return chatController;
};

module.exports.getNotificationController = () => {
  return notificationController;
};
