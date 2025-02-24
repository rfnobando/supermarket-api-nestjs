// Propósito: Define las clases de entrada para crear un carrito de compras.
// Estas clases se utilizan para definir la estructura de los datos que se deben enviar al crear un carrito de compras.
import { InputType, Int, Field } from '@nestjs/graphql';
import { IsInt, Min, ValidateNested, ArrayMinSize } from 'class-validator';
import { Type } from 'class-transformer';

@InputType()
class CreateCartItemInput { 
  //Esta clase define la estructura de un elemento del carrito de compras

  @Field(() => Int)
  @IsInt()// Valida que el campo sea un entero
  @Min(1)// Valida que el valor mínimo del campo sea 1
  productId: number;

  @Field(() => Int)
  @IsInt()
  @Min(1)
  quantity: number;
}

@InputType()
export class CreateCartInput { 
  //Esta clase define la estructura del carrito de compras. 
  //Contiene una lista de CreateCartItemInput,
  //Asegurando que cada elemento de la lista sea validado y transformado correctamente.

  @Field(() => [CreateCartItemInput])// Define un campo GraphQL que es una lista de CreateCartItemInput
  @Type(() => CreateCartItemInput)// Transforma cada elemento de la lista en una instancia de CreateCartItemInput
  @ValidateNested({ each: true })// Valida cada elemento de la lista segun las reglas definidas en CreateCartItemInput
  @ArrayMinSize(1)// Valida que la lista tenga al menos un elemento para no crear un carrito vacio
  items: CreateCartItemInput[];
}