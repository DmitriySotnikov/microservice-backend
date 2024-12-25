import { BadRequestException } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

export const getRMQServiceResponse = async ({ clientRMQ, cmd, payload }) => {
  ///
  const serviceRes: any = await lastValueFrom(clientRMQ.send(cmd, payload));
  ///
  if (serviceRes?.error) {
    throw new BadRequestException(
      //
      serviceRes?.message || 'Service error',
      {
        cause: new Error(),
        description: serviceRes?.description || 'Произошла ошибка в сервисе',
      },
    );
  }
  return serviceRes;
};
