import { ArgumentsHost, Catch } from "@nestjs/common";
import { BaseExceptionFilter } from "@nestjs/core";
import { InvalidRelationsError } from "src/errors/invalid-relation-errors";

@Catch(InvalidRelationsError)
export class InvalidRelationExceptionFilter extends BaseExceptionFilter{
    catch(exception: InvalidRelationsError, host: ArgumentsHost): void {
        

        const ctx = host.switchToHttp();
        const response = ctx.getResponse();

        return response.status(422).json({
            statusCode: 422,
            message: exception.message
        })
    }
}