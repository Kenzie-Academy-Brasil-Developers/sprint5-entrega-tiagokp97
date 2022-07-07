import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/AppError";
import { IUser } from "../interfaces/user.interface";

const updateUserService = async ({
  age,
  email,
  name,
  id,
  password,
}: IUser): Promise<void> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: id });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const updatedUser = {
    ...user,
    age: age,
    name: name,
    email: email,
    password: password,
  };

  const userUpdated = await userRepository.save(updatedUser);
};

export default updateUserService;
