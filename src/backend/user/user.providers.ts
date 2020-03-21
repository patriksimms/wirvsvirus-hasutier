import { Connection, Repository } from 'typeorm';
import { user } from './user.entity';

export const userProviders = [
    {
        provide: 'USER_REPOSITORY',
        userFatory: (connection: Connection) => connection.getRepository(user),
        inject: ['DATABASE_CONNECTION'],
    }
]

