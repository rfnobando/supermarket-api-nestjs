import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';

@Resolver(() => Product)
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) { }

  @Mutation(() => Product)
  createProduct(@Args('createProductInput') createProductInput: CreateProductInput):Promise<Product> {
    return this.productsService.create(createProductInput);
  }

  @Query(() => [Product], { name: 'allProducts' })
  findAll() {
    return this.productsService.findAll();
  }

  @Query(() => Product, { name: 'oneProduct' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productsService.findOne(id);
  }

  @Mutation(() => Product)
  async updateProduct(@Args('updateProductInput') updateProductInput: UpdateProductInput):Promise<Product> {
    return this.productsService.update(updateProductInput.id, updateProductInput);
  }

  @Mutation(() => String)
  async removeProduct(@Args('id', { type: () => Int }) id: number):Promise<string> {
    return this.productsService.remove(id);
  }
}
