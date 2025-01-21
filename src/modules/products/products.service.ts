import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>
  ) { }

  async create(createProductInput: CreateProductInput): Promise<Product> {
    const newProduct = this.productRepository.create(createProductInput)
    return this.productRepository.save(newProduct);
  }

  findAll() {
    return this.productRepository.find();
  }

  findOne(id: number) {
    return this.productRepository.findOne({
      where:{id},// busca por el id
    })
  }

  async update(id: number, updateProductInput: UpdateProductInput): Promise<Product> {
    const product = await this.productRepository.findOneBy({id});
    if(!product){
      throw new Error(`Product with ID ${id} not found`);
    }

    const updateProduct = {...product,...updateProductInput}
    return this.productRepository.save(updateProduct);
  }

  async remove(id: number): Promise<string> {
    const result = await this.productRepository.delete(id);
    if(result.affected === 0){
      throw new Error(`Product with ID #${id} not found`);
    }
    return `Product whith iD #${id} has been removed`;
  }
}
