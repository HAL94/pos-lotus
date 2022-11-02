import { Category } from '../modules/categories/category.entity';
import { Product } from '../modules/products/product.entity';
import { User } from '../modules/user/user.entity';
import { Bill } from '../modules/billing/bill.entity';
import { BillItem } from '../modules/billing/bill-item.entity';

export { User } from '../modules/user/user.entity';
export { Category } from '../modules/categories/category.entity';
export { Product } from '../modules/products/product.entity';
export { Bill } from '../modules/billing/bill.entity';
export { BillItem } from '../modules/billing/bill-item.entity';

export default [Category, User, Product, Bill, BillItem];
