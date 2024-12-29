import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { corsOptions, serverConfig } from './configs/common.config';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  if (!serverConfig.isProd) {
    ///
    const config = new DocumentBuilder()
      .setTitle('Welcome to Api')
      .setDescription('Auto Part API')
      .setVersion('1.0')
      .addTag('ApiGateway')
      .build();

    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('api', app, document);
  }

  app.enableCors(corsOptions);
  app.setGlobalPrefix(serverConfig.PREFIX);
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(serverConfig.PORT);
}

((): void => {
  bootstrap()
    .then(() =>
      process.stdout.write(`Listening on port ${serverConfig.PORT}...\n`),
    )
    .catch((err) => {
      process.stderr.write(`Error: ${err.message}\n`);
      process.exit(1);
    });
})();
