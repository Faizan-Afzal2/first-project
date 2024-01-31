// This interface will be use as the interfaces for validating data types 
// import {IsEmail, IsNotEmpty, IsString } from 'class-validator'
import {IsNotEmpty, IsEmail,IsString} from 'class-validator'
// export interface AuthDto{
//     email: String
//     password: String
// }

// To imply class validator we use class 
//  we have to applt validator pipes globaly in main.ts
export class AuthDto{
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}
