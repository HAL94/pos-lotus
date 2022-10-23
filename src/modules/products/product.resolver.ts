import {
  Arg,
  Query,
  Mutation,
  Resolver,
  UseMiddleware,
  Authorized,
  FieldResolver,
  Root,
} from 'type-graphql';
import { LogAccess } from '../../middlewares';
import { Category } from '../categories/category.entity';
import { CreateProductInput } from './dto/input/create-product.input';
import { Product } from './product.entity';

@Resolver(() => Product)
export default class ProductResolver {
  @Query(() => [Product])
  @UseMiddleware(LogAccess)
  @Authorized()
  products(): Promise<Product[]> {
    return Product.find();
  }

  @Query(() => [Product])
  @UseMiddleware(LogAccess)
  @Authorized()
  productsByCategory(
    @Arg('catId', () => Number) categoryId: number,
  ): Promise<Product[]> {
    return Product.find({
      where: {
        categoryId,
      },
    });
  }

  @Mutation(() => Product)
  @Authorized()
  async createProduct(
    @Arg('productInput', () => CreateProductInput)
      productInput: CreateProductInput,
  ): Promise<Product> {
    const product = new Product();
    product.name = productInput.name;
    product.arName = productInput.arName;
    product.description = productInput.description;
    product.image = productInput.image;
    product.price = productInput.price;
    product.sellingPrice = productInput.sellingPrice;
    const catId = productInput.catId;

    const category = await Category.findOneBy({ id: catId });
    if (!category) {
      throw new Error('Could not create product, wrong cat Id');
    }

    product.category = category;

    return product.save();
  }

  @FieldResolver(() => Category, { nullable: true })
  async category(@Root() product: Product): Promise<Category | null> {
    try {
      const category = await Category.findOneBy({ id: product.categoryId });
      //   console.log('category', category);
      if (!category) {
        throw new Error('Could not create product, wrong cat Id');
      }
      return category;
    } catch (error) {
      return null;
    }
  }
}
