var faker = require('faker');

module.exports = function (socket) {

  // Gera um nome para o usuario que esta entrando
  // Aqui seria um usuario logado com seu proprio nome
  var user = {
    username: faker.name.firstName(),
    avatar: faker.image.avatar()
  };

  socket.emit('init', user);

  // Quando o usuario envia uma mensagem
  socket.on('tweeting', function (data) {

    // Mostra a mensagem para todos os outros usuarios
    socket.broadcast.emit('tweeted', {
      user: data.user,
      tweet: data.tweet
    });

  });

  socket.on('disconnect', function () {
    //
  });
};
