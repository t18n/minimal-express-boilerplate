import { Get, Route } from 'tsoa';

import { IUser } from './user.type';

const users: IUser[] = [
  {
    id: '0',
    name: 'John Doe',
    email: 'johndoe@example.com'
  },
  {
    id: '1',
    name: 'Jane Doe',
    email: 'janedoe@example.com'
  }
];

@Route('user')
export default class UserController {
  @Get('/')
  public async get(): Promise<IUser[]> {
    return users;
  }

  @Get('/:id')
  public async getById(id: string): Promise<IUser | undefined> {
    return users.find(user => user.id === id);
  }
}
