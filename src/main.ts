import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { JwtAuthGuard } from './auth/guard/jwt-auth.guard';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Pipes globais
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  // Guard global com Reflector (para respeitar @Public)
  const reflector = app.get(Reflector);
  app.useGlobalGuards(new JwtAuthGuard(reflector));

  // Swagger com suporte a Bearer Token
  const config = new DocumentBuilder()
    .setTitle('DocSave API')
    .setDescription('API para organização de documentos pessoais')
    .setVersion('1.0')
    .addBearerAuth() // importante: ativa o botão "Authorize" no Swagger
    .build();

  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') || 3000;

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
}
bootstrap();
