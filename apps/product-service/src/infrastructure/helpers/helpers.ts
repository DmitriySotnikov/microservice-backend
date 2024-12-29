import { Transaction } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import { RmqContext } from '@nestjs/microservices';

export const getTransaction =
  (
    { message, sequelize }: { message: string; sequelize: Sequelize },
    callback: (transaction: Transaction) => any,
  ) =>
  async (): Promise<any> => {
    return sequelize.transaction(
      { isolationLevel: Transaction.ISOLATION_LEVELS.READ_COMMITTED },
      async (transaction: Transaction): Promise<any> => {
        try {
          return await callback(transaction);
        } catch (error) {
          ///
          await transaction.rollback();

          if (process.env.NODE_ENV === 'production') {
            throw new Error('Internal server error');
          }

          // Вывод ошибки в dev режиме
          console.log('ВЫВОД ОШИБКИ В ОБЕРКЕ НАД ТРАНЗАКЦИЕЙ - ', error);

          throw new Error(
            error?.message || error?.stack || error?.detail || message,
          );
        }
      },
    );
  };

export const getErrorObject = (error) => {
  ///
  if (process.env.NODE_ENV === 'production') {
    return {
      error: 'Error',
      message: 'Internal server error',
    };
  }

  return {
    error: error?.name || 'Error',
    message: error?.message || error?.stack || error?.detail,
  };
};

export function ack(context: RmqContext) {
  const channel = context.getChannelRef();
  const originalMessage = context.getMessage();
  return channel.ack(originalMessage);
}
