import {
  Arg,
  Query,
  Mutation,
  Resolver,
  Authorized,
  Ctx,
} from 'type-graphql';
import { Context } from '../../interfaces/Context';
import { Product } from '../products/product.entity';
import { BillItem } from './bill-item.entity';
import { Bill } from './bill.entity';
import { CreateBillItem } from './dto/input/create-bill.input';
  
@Resolver(() => Bill)
export default class BillResolver {
  @Query(() => [Bill])
  @Authorized()
  bills(): Promise<Bill[]> {
    return Bill.find();
  }
  
  
  @Mutation(() => Bill)
  @Authorized()
  async createBill(@Arg('billItems', () => [CreateBillItem]) billsItems: CreateBillItem[],
    @Ctx() context: Context): Promise<Bill> {
    try {
      
      const user = context.req.user;

      const bill = new Bill();
      if (user) {
        bill.notes = '';
        bill.cashier = user;

        // await bill.save();

        billsItems.forEach(async payloadItem => {
          const product = await Product.findOneBy({ id: payloadItem.productId });
          if (product) {
            const grandTotal = product.sellingPrice * payloadItem.quantity;            
            const billItem = new BillItem();
            billItem.amountInclTax = grandTotal;
            billItem.unitPrice = product.price;
            billItem.taxAmount = (product.price * 0.15);
            billItem.quantity = payloadItem.quantity;

            bill.grandTotal += billItem.amountInclTax;
            bill.taxableTotal += billItem.unitPrice * payloadItem.quantity;
            bill.totalTax += (billItem.taxAmount * payloadItem.quantity);

            billItem.product = product;
            billItem.bill = bill;
            
            await billItem.save();
          } else {
            throw new Error('Failed to create bill');
          }      
        });      
      }
      await bill.save();

      return bill;
    } catch (error) {
      console.log('error creating bill', error);
      throw error;
    }
    
  }
}
  