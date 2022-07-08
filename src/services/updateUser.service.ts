import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/AppError";
import { IUserUpdated } from "../interfaces/user.interface";

const updateUserService = async (
  { age, email, name }: IUserUpdated,
  id: string
): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);
  const updated = { age, email, name };
  await userRepository.update({ id: id }, updated);
  const allUsers = await userRepository.find();

  const exists = allUsers.find((element) => element.id === id);

  if (!exists) {
    throw new AppError("User not found", 404);
  }

  return exists;
};

export default updateUserService;
