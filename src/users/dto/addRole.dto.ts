import { IsInt, IsString } from "class-validator";

export class AddRoleDto{
    @IsString({message: "must be string"})
    readonly value: string;
    @IsInt({message: "must be int"})
    readonly userId: number;
}