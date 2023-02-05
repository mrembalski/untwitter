import { NestFactory } from '@nestjs/core';
import { UsersService } from './services/users/users.service';
import { UsersModule } from './users.module';

async function bootstrap() {
    const app = await NestFactory.create(UsersModule);

    /** Adding dev-entities */
    const usersService = app.get(UsersService);
    const usersRepository = usersService["userRepository"];

    await Promise.all(
        ["Gabrysia", "Michal", "Pawel", "Adam", "Natalia"].map(async userName => {
            console.log(userName)
            const doesExist = await usersRepository.findOne({ where: { username: userName } })

            if (doesExist !== undefined)
                return usersRepository.save({
                    username: userName,
                    password: userName,
                })

            return Promise.resolve()
        }
        ))

    await app.listen(3000);
}
bootstrap();
