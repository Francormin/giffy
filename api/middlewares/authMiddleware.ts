import { Context } from "@oak/oak";
import { State } from "../types/state.ts";

export const authMiddleware = async (ctx: Context<State>, next: () => Promise<unknown>) => {
  if (!ctx.state.currentUser) {
    ctx.response.status = 401;
    ctx.response.body = { msg: "not authorized" };
    return;
  }

  await next();
};
