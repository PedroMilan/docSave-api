import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { DocumentModule } from './document/document.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // torna o ConfigService disponível em toda a aplicação
    }),
    PrismaModule,
    AuthModule,
    UserModule,
    DocumentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
