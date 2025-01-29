import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCartInput } from './dto/create-cart.input';
import { UpdateCartInput } from './dto/update-cart.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Cart } from './entities/cart.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CartsService {
  constructor(
    @InjectRepository(Cart)
    private cartRepository: Repository<Cart>,
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  async create(createCartInput: CreateCartInput): Promise<Cart> {
    const { checkoutDate, checkOutTime, customerId } = createCartInput;

    // Validar que el customer exista
    const customer = await this.customerRepository.findOne(customerId);
    if (!customer) {
      throw new HttpException('Customer not found', HttpStatus.NOT_FOUND);
    }

    // Crear y guardar el carrito
    const cart = this.cartRepository.create({ checkoutDate, checkOutTime, customerId });
    return this.cartRepository.save(cart);
  }

  findAll() {
    return `This action returns all carts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cart`;
  }
  //actualizar un carrito
  update(id: number, updateCartInput: UpdateCartInput) {
    return `This action updates a #${id} cart`;
  }

  remove(id: number) {
    return `This action removes a #${id} cart`;
  }
}
