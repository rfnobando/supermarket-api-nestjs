import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCartInput {
  @Field(() => String)
  checkoutDate: string;

  @Field(() => String)
  checkOutTime: string;

  @Field(() => Int)
  customerId: number;
}