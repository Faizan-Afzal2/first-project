import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";

@Injectable()

export class AuthService {
    constructor(private prisma: PrismaService) {

    }
    async signup(dto: AuthDto) {
        const user = await this.prisma.user.create({
            data: {
                email: dto.email,
                password: dto.password
            },
        // We can eliminate teh fields we dont want to send to response either by select or delete user.(field)
            // select: {
            //     id: true,
            //     email: true,
            //     createdAt: true
            // }
        });
        delete user.password;
        return user
        
    }
    signin() {
        // const user= this.prisma.user.crae

    }

}
