import { User } from "../user/User";

export type Task = {
  createdAt: Date;
  description: string | null;
  id: string;
  status?: Array<"Open" | "Done" | "InProgress">;
  title: string | null;
  updatedAt: Date;
  userId?: User | null;
};
