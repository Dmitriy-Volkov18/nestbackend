import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto{
    @ApiProperty({example: "user@gmail.com", description: "Unique email"})
    @IsString({message: "Must be string type"})
    @IsEmail({}, {message: "Invalid email"})
    readonly email: string;

    @ApiProperty({example: "123123", description: "password"})
    @IsString({message: "Must be string type"})
    @Length(4, 16, {message: "Must be between 4 and 16 characters"})
    readonly password: string;
}