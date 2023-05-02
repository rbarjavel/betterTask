import { GroupCreateNestedManyWithoutUsersInput } from "./GroupCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  firstName: string;
  group?: GroupCreateNestedManyWithoutUsersInput;
  lastName: string;
  password: string;
  profilePicture?: string | null;
  roles: InputJsonValue;
  username: string;
};
