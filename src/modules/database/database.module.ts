import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "../products/entities/product.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './src/modules/database/supermarket.db',
      entities: [Product],
      synchronize: false,
    }),
  ],
})
export class DatabaseModule { }