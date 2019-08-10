import { User } from './user.model';
export class Post {
  constructor(
    public id: number,
    public category: string,
    public title: string,
    public description: string,
    public created: number,
    public user: User
  ) {}
}
