import { Body, Controller, ParseIntPipe, Post, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";
@Controller('auth')

export class AuthController {
    constructor(private authService: AuthService) { }
    // Creating endpoint for signup and login
    //  we can use diret request but it is not recomended 
    // @Post('signin')
    // signin(@Req() req: Request) {
    //     console.log(req.body);
    //     return this.authService.signin();
    // }
    // We use dto(Data Transfer object) to make sure correct body coming in requests)
    // @Post('signin')
    // signin(@Body('email') dto: AuthDto/*Here we will use an interface for the body data*/) {
    //     console.log({
    //         dto,
    //     });
    //     return this.authService.signin();
    // }
    // We can also use built in pipes to validate the type of the data 
    // @Post('signin')
    // signin(@Body('email') email: string, @Body('password', ParseIntPipe) password: string) {
    //     console.log({
    //         email,
    //         typeOfEmail: typeof email,
    //         password,
    //         typeOfPassword: typeof password,
    //     });
    //     return this.authService.signin();
    // }

    // Now we will add class validator to automate this piping  
    @Post('signin')
    signin(@Body() dto: AuthDto) {
        console.log({
          dto
        });
        return this.authService.signin();
    }



    @Post('signup')
    signup(@Body() dto: AuthDto) {
        return this.authService.signup(dto);
    }

    // OR 
    // authService: AuthService;
    // constructor( authService: AuthService) { 
    //     this.authService= authService;
    // }
}