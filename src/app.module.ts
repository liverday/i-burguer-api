import { Module } from '@nestjs/common';
import { BurguersModule } from './burguers/burguers.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    BurguersModule,
    TypeOrmModule.forRoot()
  ],
})
export class AppModule { }

