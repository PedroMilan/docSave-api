// src/user/user.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { EditProfileDto } from './dto/edit-profile.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getMe(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, fullname: true, email: true, createdAt: true },
    });

    if (!user) throw new NotFoundException('Usuário não encontrado.');

    return user;
  }

  async editProfile(userId: string, dto: EditProfileDto) {
    return this.prisma.user.update({
      where: { id: userId },
      data: { ...dto },
      select: { id: true, fullname: true, email: true },
    });
  }
}
