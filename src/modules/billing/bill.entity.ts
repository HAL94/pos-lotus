import { Field, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../user/user.entity';
import { BillItem } from './bill-item.entity';

@Entity()
@ObjectType()
export class Bill extends BaseEntity {
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
  @Generated('increment')
  @Field(() => Number)
    billNo!: number;

  @Column({ default: 0, type: 'float' })
  @Field(() => Number)
    taxableTotal!: number;

  @Column({ default: 0, type: 'float' })
  @Field(() => Number)
    grandTotal!: number;
  
  @Column({ default: 0, type: 'float' })
  @Field(() => Number)
    totalTax!: number;

  @Column()
  @Field(() => String)
    notes!: string;
  
  @Column({ name: 'cashierId', nullable: false })
    cashierId!: number;

  @ManyToOne(() => User, (user) => user.bills)
  @JoinColumn({ name: 'cashierId' })
    cashier!: User;

  @OneToMany(() => BillItem, (bi) => bi.bill)
    billItems!: BillItem[];
}
