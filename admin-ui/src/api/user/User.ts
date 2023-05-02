import { Group } from "../group/Group";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  firstName: string;
  group?: Array<Group>;
  id: string;
  lastName: string;
  profilePicture: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
