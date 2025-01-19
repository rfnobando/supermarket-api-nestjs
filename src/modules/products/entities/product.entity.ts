import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
@ObjectType()
export class Product {
  @PrimaryGeneratedColumn({ name: 'id', type: 'integer' })
  @Field(() => Int)
  id: number;

  @Column({ name: 'name', type: 'text' })
  @Field(() => String)
  name: string;

  @Column({ name: 'price', type: 'real' })
  @Field(() => Float)
  price: number;
}
