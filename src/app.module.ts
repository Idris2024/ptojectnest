import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookApiModule } from './book-api/module/book-api.module';
import { AuthModule } from './auth/modules/auth.module';
import { SharedModule } from './shared/shared.module';
import { ExtractTokenMiddleWare } from './shared/extractTokenMiddleware';
import { BorrowedBookModule } from './borrowed-book/borrowed-book.module';

@Module({
  imports: [BookApiModule,AuthModule, SharedModule, BorrowedBookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ExtractTokenMiddleWare).exclude('/auth/*').forRoutes('*');
  }

}
