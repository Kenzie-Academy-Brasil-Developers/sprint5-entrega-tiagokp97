import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/AppError";
import { IUser, IUserUpdated } from "../interfaces/user.interface";
import { hash } from "bcryptjs";

const updateUserService = async (
  { age, email, name }: IUserUpdated,
  id: string
) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: id });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  c;
  const updated = { age, email, name };

  await userRepository.update({ id: id }, updated);

  return user;
};

export default updateUserService;
