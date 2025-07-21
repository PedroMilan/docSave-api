import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { DocumentService } from './document.service';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { GetUser } from 'src/common/decorators/get-user.decorator';
import { JwtPayload } from 'src/auth/interfaces/user-payload.interface';

@ApiTags('Documents')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('documents')
export class DocumentController {
  constructor(private readonly documentService: DocumentService) {}

  @Post()
  create(@Body() dto: CreateDocumentDto, @GetUser('sub') userId: any) {
    return this.documentService.create(userId.sub as string, dto);
  }

  @Get()
  findAll(@GetUser() user: any) {
    return this.documentService.findAll(user.sub);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @GetUser() user: JwtPayload) {
    return this.documentService.findOne(id, user.sub);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @GetUser('id') userId: string,
    @Body() dto: UpdateDocumentDto,
  ) {
    return this.documentService.update(id, userId, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @GetUser('id') userId: string) {
    return this.documentService.remove(id, userId);
  }
}
