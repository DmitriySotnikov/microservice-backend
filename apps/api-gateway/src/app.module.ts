import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthModule } from './auth-guard.module/auth.module';
import { ProductModule } from './services/product/product.module';

@Module({
  imports: [
    ///
    AuthModule,
    ProductModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply().forRoutes(AppModule);
  }
}
