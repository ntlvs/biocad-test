import { UsersService } from "./users.service";
import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";
import { UsersController } from "./users.controller";
import { JwtModule } from "src/jwt/jwt.module";

@Module({
  imports: [PrismaModule, JwtModule],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
