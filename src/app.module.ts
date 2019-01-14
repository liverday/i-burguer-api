import { Module } from '@nestjs/common';
import { BurguersModule } from './burguers/burguers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './burguers/category/category.module';

@Module({
  imports: [
    BurguersModule,
    CategoryModule,
    TypeOrmModule.forRoot()
  ],
})
export class AppModule { }

