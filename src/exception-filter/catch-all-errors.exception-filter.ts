import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { BaseExceptionFilter } from "@nestjs/core";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

@Catch()
export class CatchAllErrorsExceptionFilter extends BaseExceptionFilter {


    catch(exception: any, host: ArgumentsHost) {
        return super.catch(exception, host);
    }

}