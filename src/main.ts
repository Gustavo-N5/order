import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaExceptionFilter } from './exception-filter/exception-filter';
import { InvalidRelationExceptionFilter } from './exception-filter/invalid-relations.exception-filter';
import { ValidationPipe } from '@nestjs/common';
import { CatchAllErrorsExceptionFilter } from './exception-filter/catch-all-errors.exception-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(
    new CatchAllErrorsExceptionFilter(httpAdapter),
    new PrismaExceptionFilter(),
    new InvalidRelationExceptionFilter()
  );

  app.useGlobalPipes(new ValidationPipe({
    errorHttpStatusCode: 422
  }))

  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  await app.listen(3000);
}
bootstrap();
