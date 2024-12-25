// urls	- URL-адреса подключения
// queue - Имя очереди, которую будет слушать ваш сервер
// prefetchCount - Устанавливает счетчик предварительной выборки для канала
// isGlobalPrefetchCount - Включает предварительную выборку для каждого канала
// noAck - Если false, включен режим ручного подтверждения.
// queueOptions - Дополнительные параметры очереди
// socketOptions - Дополнительные варианты сокетов
// headers - Заголовки для отправки вместе с каждым сообщением
// persistent: true  в параметрах подключения к RabbitMQ гарантирует,
// что сообщения, отправленные в очередь, будут сохранены на диске
// и не будут потеряны в случае сбоя или перезапуска системы.

// const recoveryQueue = 'recovery';

const rabbitMQUrl: string =
  process.env.NODE_ENV === 'production'
    ? process.env.RABBIT_MQ_URI
    : process.env.RABBIT_MQ_URI_DEV;

export const amqpClientOptions = {
  urls: [rabbitMQUrl],
  noAck: false,
  queueOptions: {
    durable: false,
    // deadLetterExchange: '', // setup the dead letter exchange to point to the default exchange
    // deadLetterRoutingKey: recoveryQueue, // dead letters from our burger-queue should be routed to the recovery-queue
    messageTtl: 30000, // set message time to live to 30s
  },
  persistent: true,
};
