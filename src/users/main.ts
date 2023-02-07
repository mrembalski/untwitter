import { NestFactory } from '@nestjs/core';
import { UsersService } from './services/users/users.service';
import { UsersModule } from './users.module';

async function bootstrap() {
    const app = await NestFactory.create(UsersModule);

    /** Adding users */
    const usersService = app.get(UsersService);
    const usersRepository = usersService["userRepository"];

    /** Wait for the replication to hit */
    await new Promise(r => setTimeout(r, 15000));

    await Promise.all(
        ["Gabrysia", "Michal", "Pawel", "Adam", "Natalia"].map(async userName => {
            const doesExist = await usersRepository.findOne({ where: { username: userName } })

            if (doesExist !== undefined) {
                console.log(`Creating user ${userName}.`)
                return usersRepository.save(
                    usersRepository.create({
                        username: userName,
                        password: userName,
                    }))
            }

            return Promise.resolve()
        }
        ))

    await app.listen(3000);
}
bootstrap();
