import { InputType, Field } from 'type-graphql';

@InputType()
export class CreateProductInput {
  @Field(() => String, { nullable: false })
    name!: string;

  @Field(() => String, { nullable: false })
    arName!: string;

  @Field(() => String, { nullable: false })
    description!: string;

  @Field(() => Number, { nullable: false })
    price!: number;

  @Field(() => Number, { nullable: false })
    sellingPrice!: number;

  @Field(() => String, { nullable: false })
    image!: string;

  @Field(() => Number, { nullable: false })
    catId!: number;
}
