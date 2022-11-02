import { Field, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Product } from '../products/product.entity';
import { Bill } from './bill.entity';

@Entity()
@ObjectType()
export class BillItem extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
    id!: string;

  @CreateDateColumn()
  @Field(() => String)
    created!: Date;

  @UpdateDateColumn()
  @Field(() => String)
    updated!: Date; 

  @Column({ default: 0, type: 'float' })
  @Field(() => Number)
    unitPrice!: number;

  @Column({ default: 0, type: 'float' })
  @Field(() => Number)
    amountInclTax!: number;
  
  @Column({ default: 0, type: 'float' })
  @Field(() => Number)
    taxAmount!: number;
    
  @Column({ default: 0 })
  @Field(() => Number)
    quantity!: number;

  @Column({ name: 'billId', nullable: false })
    billId!: string;

  @Column({ name: 'productId', nullable: false })
    productId!: string;

  @ManyToOne(() => Bill, (bill) => bill.billItems)
  @JoinColumn({ name: 'billId' })
    bill!: Bill;

  @ManyToOne(() => Product, (product) => product.billItem)
  @JoinColumn({ name: 'productId' })
    product!: Product;
}
