import CategoryResolver from '../modules/categories/category.resolver';
import AuthResolver from '../modules/auth/auth.resolver';
import ProductResolver from '../modules/products/product.resolver';
import { NonEmptyArray } from 'type-graphql';

const resolvers = [CategoryResolver, AuthResolver, ProductResolver];
export default resolvers as NonEmptyArray<any>;
