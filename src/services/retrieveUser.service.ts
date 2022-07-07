import { User } from "../entities/user.entity";
import AppDataSource from "../data-source";

const retrieveUserService = async (id: string): Promise<User[]> => {
  const userRepository = AppDataSource.getRepository(User);

  //   const user = await userRepository.find({
  //     where: {
  //       id: id,
  //     },
  //   });

  const user = await userRepository.findBy({ id: id });

  return user;
};

export default retrieveUserService;
