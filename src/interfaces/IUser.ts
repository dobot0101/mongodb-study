export interface IUser {
  name: string
  email: string
  password: string
  createdAt: Date
}

export interface IUserInputDTO {
  name: string
  email: string
  password: string
}

export interface userUniqueSearchInput {
  email: string
}
