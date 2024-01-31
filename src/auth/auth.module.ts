import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { PrismaModule } from "src/prisma/prisma.module";


@Module({
    // imports:[PrismaModule],
    // We can also make the prisma module as a global modeule t acces it from any module in the app 
    controllers: [AuthController],
    providers:[AuthService]
})
export class AuthModule{}

