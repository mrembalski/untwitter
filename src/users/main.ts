import { NestFactory } from '@nestjs/core';
import { UsersService } from './services/users/users.service';
import { UsersModule } from './users.module';

async function bootstrap() {
    const app = await NestFactory.create(UsersModule);
    await app.listen(3000);

    const usersService = app.get(UsersService)
    const usersRepository = usersService["userRepository"]

    usersRepository.create({

    })
}
bootstrap();
