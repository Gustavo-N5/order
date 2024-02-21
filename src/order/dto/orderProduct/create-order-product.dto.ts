import { IsEmpty, IsNumber } from "class-validator"

export class OrderProduct{

    @IsEmpty()
    @IsNumber()
    productId:number

    @IsEmpty()
    @IsNumber()
    quantidade:number
}