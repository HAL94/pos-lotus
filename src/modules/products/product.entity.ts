import { Field, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BillItem } from '../billing/bill-item.entity';
import { Category } from '../categories/category.entity';

@Entity()
@ObjectType()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
    id!: string;

  @CreateDateColumn()
  @Field(() => String)
    created!: Date;

  @UpdateDateColumn()
  @Field(() => String)
    updated!: Date;

  @Column()
  @Field(() => String)
    name!: string;

  @Column()
  @Field(() => String)
    arName!: string;

  @Column()
  @Field(() => String)
    description!: string;

  @Column({ type: 'float', default: 0 })
  @Field(() => Number)
    price!: number;

  @Column({ type: 'float', default: 0 })
  @Field(() => Number)
    sellingPrice!: number;

  @Column()
  @Field(() => String)
    image!: string;

  @Column({ name: 'categoryId', nullable: false })
    categoryId!: number;

  @ManyToOne(() => Category, (cat) => cat.products)
  @JoinColumn({ name: 'categoryId' })
    category!: Category;

  @OneToMany(() => BillItem, (bi) => bi.product)
    billItem!: BillItem;
}
