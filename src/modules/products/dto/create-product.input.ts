import { InputType, Int, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field(() => String, { description: 'name of product' })
  name: string;
  
  @Field(() => Float, { description: 'price of product' })
  price: number;
}
