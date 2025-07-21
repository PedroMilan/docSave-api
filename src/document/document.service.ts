import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';

@Injectable()
export class DocumentService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userId: string, dto: CreateDocumentDto) {
    return this.prisma.document.create({
      data: {
        ...dto,
        userId,
      },
    });
  }

  async findAll(userId: string) {
    return this.prisma.document.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
  async findOne(id: string, userId: string) {
    const document = await this.prisma.document.findFirst({
      where: {
        id,
        userId,
      },
    });

    if (!document) {
      throw new NotFoundException('Documento não encontrado');
    }

    return document;
  }
  async update(id: string, userId: string, dto: UpdateDocumentDto) {
    const document = await this.findOne(id, userId);
    return this.prisma.document.update({
      where: { id: document.id },
      data: dto,
    });
  }

  async remove(id: string, userId: string) {
    const document = await this.findOne(id, userId);
    return this.prisma.document.delete({
      where: { id: document.id },
    });
  }
}
