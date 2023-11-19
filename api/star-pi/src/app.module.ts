import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Test } from './test/test.entity';
import { StarCartController } from './star-cart/star-cart.controller';
import { StarCartService } from './star-cart/star-cart.service';
import { StarCartModule } from './star-cart/star-cart.module';
import { StarGeneralController } from './star-general/star-general.controller';
import { StarGeneralService } from './star-general/star-general.service';
import { StarGeneralModule } from './star-general/star-general.module';
import { User } from './star-general/star-general.entity';
@Module({
  imports: [
      TestModule,
      StarCartModule,
      StarGeneralModule,
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'test',
        entities: [Test, User],
        synchronize: true,
      }),
  
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
