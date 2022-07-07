import { IUserRequest } from "../interfaces/user.interface";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { hash } from "bcryptjs";
import { AppError } from "../errors/AppError";

const createUserService = async ({
  age,
  email,
  name,
  password,
}: IUserRequest): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const emailAlreadyUsed = await userRepository.findOneBy({ email: email });

  if (emailAlreadyUsed) {
    throw new AppError("Email already registered", 404);
  }

  const hashedPassword = await hash(password, 10);
  const user = userRepository.create({
    age,
    email,
    name,
    password: hashedPassword,
  });

  await userRepository.save(user);

  return user;
};

export default createUserService;
