import { Module } from '@nestjs/common';
import { CartsService } from './carts.service';
import { CartsResolver } from './carts.resolver';

@Module({
  providers: [CartsResolver, CartsService],
})
export class CartsModule {}
