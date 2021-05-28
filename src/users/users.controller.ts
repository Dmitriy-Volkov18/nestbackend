import { Body, Controller, Get, Post, UseGuards, UsePipes } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthQuard } from 'src/auth/jwt-auth.quard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesQuard } from 'src/auth/roles.quard';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { AddRoleDto } from './dto/addRole.dto';
import { BanUserDto } from './dto/ban-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';
import { UsersService } from './users.service';

@ApiTags("Users")
@Controller('users')
export class UsersController {

    constructor(private userService: UsersService){}

    @ApiOperation({summary: "Creating user"})
    @ApiResponse({status: 200, type: User})
    @Post()
    // @UsePipes(new ValidationPipe())
    create(@Body()userDto: CreateUserDto){
        return this.userService.createUser(userDto);
    }


    @ApiOperation({summary: "Getting all users"})
    @ApiResponse({status: 200, type: [User]})
    @Roles("Admin")
    @UseGuards(RolesQuard)
    @Get()
    getAll(){
        return this.userService.getAllUsers();
    }

    @ApiOperation({summary: "giving roles"})
    @ApiResponse({status: 200})
    @Roles("Admin")
    @UseGuards(RolesQuard)
    @Post("/role")
    addRole(@Body() dto: AddRoleDto){
        return this.userService.addRole(dto);
    }

    @ApiOperation({summary: "ban user"})
    @ApiResponse({status: 200})
    @Roles("Admin")
    @UseGuards(RolesQuard)
    @Post("/ban")
    ban(@Body() dto: BanUserDto){
        return this.userService.ban(dto);
    }
}
