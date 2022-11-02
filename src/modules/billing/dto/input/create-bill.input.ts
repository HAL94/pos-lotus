import { InputType, Field, ObjectType } from 'type-graphql';
import { ID, Int } from 'type-graphql';

@ObjectType()
export class BillItemInputObject {
  @Field(() => ID)
    id!: string;

  @Field(() => Int)
    quantity!: number;
}

@InputType()
export class CreateBillItem {
  @Field(() => String, { nullable: false })
    productId!: string;

  @Field(() => Number, { nullable: false })
    quantity!: number;  
}
