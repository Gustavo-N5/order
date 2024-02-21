import { OrderProduct } from "@prisma/client";
import { IsEmpty, IsNotEmpty, IsNumber, IsString, MaxLength, Validate } from "class-validator";

export class CreateOrderDto {

    @IsNotEmpty()
    @IsString()
    @MaxLength(20)
    status:string;

    @IsNotEmpty()
    valor_total:number;

    @IsNotEmpty()
    client_id:number;

    @IsNotEmpty()
    orderProduct: OrderProduct[];
}
