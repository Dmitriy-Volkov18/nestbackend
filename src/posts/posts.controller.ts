import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor(private postService: PostsService){}

    @Post()
    @UseInterceptors(FileInterceptor("image"))
    create(@Body()dto: CreatePostDto, @UploadedFile() image){
        return this.postService.create(dto, image)
    }

    // @Get()
    // getAll(){
    //     return this.postService.getAllPosts()
    // }
}
