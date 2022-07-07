import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/AppError";
import { IUser } from "../interfaces/user.interface";
import { hash } from "bcryptjs";

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

  const hashedPassword = await hash(password, 10);

  const updatedUser = {
    ...user,
    age: age,
    name: name,
    email: email,
    password: password ? hashedPassword : password,
    updated_at: new Date(),
  };

  const userUpdated = await userRepository.save(updatedUser);
};

export default updateUserService;
