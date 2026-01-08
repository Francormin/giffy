import { Context } from "@oak/oak";
import { State } from "../types/state.ts";

export const authMiddleware = async (ctx: Context<State>, next: () => Promise<unknown>) => {
  if (!ctx.state.currentUser) {
    ctx.response.status = 401;
    return;
  }

  await next();
};
