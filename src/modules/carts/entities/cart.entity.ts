import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Customer } from 'src/modules/customers/entities/customer.entity';

@Entity('carts')
@ObjectType()
export class Cart {
  @PrimaryGeneratedColumn({ name: 'id', type: 'integer' })
  @Field(() => Int)
  id: number;

  @Column({ name: 'checkout_date', type: 'text',  })
  @Field(() => String)
  checkOutDate: string;

  @Column({ name: 'checkout_time', type: 'text',  })
  @Field(() => String)
  checkOutTime: string;

  @Column({ name: 'customer_id', type: 'integer' })
  @Field(() => Int)  // Exponiendo solo el customer_id
  customerId: number;  // Almacenamos solo el ID del cliente

  @ManyToOne(() => Customer, { onDelete: 'CASCADE' }) // Relación con Customer que existe internamente
  @JoinColumn({ name: 'customer_id' }) // Especifica la clave foránea
  // @Field(() => Customer) // Exponiendo el objeto completo del cliente (no recomendado) a menos que se necesite.
  customer: Customer;
}
