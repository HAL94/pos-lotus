import {
  Arg,
  Query,
  Mutation,
  Resolver,
  UseMiddleware,
  Authorized,
} from 'type-graphql';
import { LogAccess } from '../../middlewares';
import { Category } from './category.entity';

@Resolver()
export default class CategoryResolver {
  @Query(() => [Category])
  @UseMiddleware(LogAccess)
  @Authorized()
  categories(): Promise<Category[]> {
    return Category.find();
  }

  @Mutation(() => Category)
  @Authorized()
  createCategory(
    @Arg('title', () => String) title: string,
      @Arg('image', () => String) image: string,
  ): Promise<Category> {
    const category = new Category();
    category.title = title;
    category.image = image;

    return category.save();
  }
}
