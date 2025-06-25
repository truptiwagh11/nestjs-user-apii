import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async create(data: Partial<User>): Promise<User> {
    const user = this.userModel.build(data as any);
    return await user.save();
  }

  async findOne(id: number): Promise<User | null> {
    return this.userModel.findByPk(id);
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }
}
