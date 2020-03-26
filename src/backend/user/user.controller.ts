import {BadRequestException, Body, Controller, Delete, Get, Param, Post,} from '@nestjs/common';
import {UserService} from './user.service';
import {User} from './user.entity';

@Controller('profile')
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @Get(':id')
    async getProfile(@Param() params): Promise<any> {
        const user = await this.userService.getUser(params.id);

        if (user === undefined) {
            throw new BadRequestException('user id not found');
        }
        return user;
    }

    @Post()
    async createUser(@Body() params: User): Promise<User> {
        return await this.userService.createUser(params);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        this.userService.deleteUser(params);
    }

    @Post(':userid/upload')
    uploadFile(@Param('userid') userId, @Body() body) {
        console.log(body);

        this.userService.addImageToUser(userId, body.filename);
        console.log(userId);
        console.log('file: ' + body.filename);
    }

    @Get(':userId/image')
    async getUserImage(@Param('userId') userId) {
        const user = await this.userService.getUser(userId);
        if (user.imageName == undefined) {
            throw new BadRequestException('user has no image');
        }
        console.log(user.id);
        return user.imageName;
    }
}

@Controller()
export class RegisterController {
    constructor(private readonly userService: UserService) {
    }
}
