import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoutesModule } from './routes/routes.module';
import { ServiceModule } from './service/service.module';

@Module({
  imports: [RoutesModule, ServiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
