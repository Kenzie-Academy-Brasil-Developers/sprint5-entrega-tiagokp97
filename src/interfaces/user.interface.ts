export interface IUserRequest {
  name: string;
  email: string;
  password: string;
  age: number;
}

export interface IUser extends IUserRequest {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IUserUpdated {
  name?: string;
  email?: string;
  password?: string;
  age?: number;
}
