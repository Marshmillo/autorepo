import { utc } from 'moment';
import { IUser } from '../interfaces/user';
import userModel from '../models/user.model';

class UserController {
  // Create new User
  async save(cliente: IUser) {
    const dataUser = {
      ...cliente,
      createAt: utc().toDate(),
      updateAt: utc().toDate(),
    };
    const result = await userModel.create(dataUser);
    return { _id: result._id };
  }

  // List of users
  async list() {
    const result: IUser[] | null = await userModel.find();
    return result;
  }
}

export default new UserController();
