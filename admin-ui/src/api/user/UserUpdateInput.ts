import { GroupUpdateManyWithoutUsersInput } from "./GroupUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  firstName?: string;
  group?: GroupUpdateManyWithoutUsersInput;
  lastName?: string;
  password?: string;
  profilePicture?: string | null;
  roles?: InputJsonValue;
  username?: string;
};
