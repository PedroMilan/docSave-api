// src/user/user.controller.ts
import { Controller, Get, Patch, Body } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { GetUser } from 'src/common/decorators/get-user.decorator';
import { EditProfileDto } from './dto/edit-profile.dto';
import { JwtPayload } from 'jsonwebtoken';

@ApiTags('Usuário')
@ApiBearerAuth()
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('me')
  @ApiOperation({ summary: 'Retorna os dados do usuário logado' })
  async getMe(@GetUser() user: JwtPayload) {
    return this.userService.getMe(user.sub as string);
  }

  @Patch('edit-profile')
  @ApiOperation({ summary: 'Editar dados do perfil' })
  async editProfile(@GetUser() user: JwtPayload, @Body() dto: EditProfileDto) {
    if (!user.sub) {
      throw new Error('ID do usuário não encontrado.');
    }
    return this.userService.editProfile(user.sub as string, dto);
  }
}
