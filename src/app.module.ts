import { Module } from '@nestjs/common';
import { BurguersModule } from './burguers/burguers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
require('./config/config');

@Module({
  imports: [
    BurguersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      url: process.env.CLEARDB_DATABASE_URL,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      extra: {
        ssl: true
      },
      synchronize: false
    })
  ],
})
export class AppModule {}

