import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Get(':id')
    findeOneUser(@Param('id') id: number) {
        return this.userService.findOne(id)
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number) {
        return this.userService.delete(id)
    }
}
