import { BadRequestException } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

export const getRMQServiceResponse = async ({ clientRMQ, cmd, payload }) => {
  ///
  const serviceRes: any = await lastValueFrom(clientRMQ.send(cmd, payload));
  ///
  if (serviceRes?.error) {
    throw new BadRequestException(
      //
      {
        message:
          serviceRes.error.message ||
          serviceRes.error.description ||
          serviceRes.message ||
          'Error',
        status: serviceRes.status || 400,
      },
    );
  }
  return serviceRes;
};
