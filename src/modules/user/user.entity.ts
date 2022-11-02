import { Field, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Bill } from '../billing/bill.entity';

@Entity('users')
@ObjectType()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
    id?: string;

  @CreateDateColumn()
  @Field(() => String)
    created!: Date;

  @UpdateDateColumn()
  @Field(() => String)
    updated!: Date;

  @Column({ unique: true })
  @Field(() => String)
    username!: string;

  @Column({ nullable: false })
    password?: string;

  @Column('int', { default: 0 })
    tokenVersion!: number;

  @OneToMany(() => Bill, (bill: Bill) => bill.cashier)
    bills!: Bill[];
}
