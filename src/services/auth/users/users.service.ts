import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { Users } from '@prisma/client';

@Injectable()
export class UsersService {
    constructor(private readonly db: DbService) { }

    findOne(id: number) {
        return this.db.users.findFirst({ where: { id } })
    }

    create(user: Partial<Users>) {
        return this.db.users.create({
            data: {
                username: user.username,
                email: user.email,
                password: user.password
            }
        })
    }

    delete(id: number) {
        return this.db.users.delete({ where: { id } })
    }

    private hashPassword
}
