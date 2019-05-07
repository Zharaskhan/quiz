export interface IUser {
  id: number;
  username: string;
}

export interface IContact {
  id: number;
  owner: IUser;
  name: string;
  phone: string;
}
