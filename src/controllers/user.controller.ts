import { Request, Response } from "express";
import { IUser } from "../interfaces/user.interface";
import { instanceToInstance } from "class-transformer";
import deleteUserService from "../services/deleteUser.service";
import listUserService from "../services/listUser.service";
import retrieveUserService from "../services/retrieveUser.service";
import updateUserService from "../services/updateUser.service";
import createUserService from "../services/user.service";

const createUserController = async (req: Request, res: Response) => {
  const { name, email, password, age } = req.body;
  const newUser = await createUserService({ age, email, password, name });
  return res.json(instanceToInstance(newUser));
};

const listUserController = async (req: Request, res: Response) => {
  const users = await listUserService();
  return res.json(instanceToInstance(users));
};

const deleteUserController = async (req: Request, res: Response) => {
  const id = req.params.id;
  await deleteUserService(id);
  return res.status(204).send();
};

const retrieveUserController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const user = await retrieveUserService(id);
  return res.json(user);
};

const updateUserController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const { name, email, password, age }: IUser = req.body;

  const user = await updateUserService({ age, email, name, password }, id);

  return res.json(user);
};

export {
  createUserController,
  listUserController,
  deleteUserController,
  retrieveUserController,
  updateUserController,
};
