import { Field, Int, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Product } from '../products/product.entity';

@Entity()
@ObjectType()
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
    id!: number;

  @CreateDateColumn()
  @Field(() => String)
    created!: Date;

  @UpdateDateColumn()
  @Field(() => String)
    updated!: Date;

  @Column()
  @Field(() => String)
    title!: string;

  @Column()
  @Field(() => String)
    image!: string;

  @OneToMany(() => Product, (product: Product) => product.category)
    products!: Product[];
}
