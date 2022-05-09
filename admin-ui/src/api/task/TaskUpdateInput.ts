import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskUpdateInput = {
  description?: string | null;
  status?: Array<"Open" | "Done" | "InProgress">;
  title?: string | null;
  userId?: UserWhereUniqueInput | null;
};
