import { Context } from "@oak/oak";
import { verify } from "jsonwebtoken";

import { users } from "../types/user.ts";
import { State } from "../types/state.ts";
import { JwtPayload } from "../types/jwt.ts";

export const userMiddleware = async (ctx: Context<State>, next: () => Promise<unknown>) => {
  let jwt: string | null = null;

  const authHeader = ctx.request.headers.get("Authorization");
  if (authHeader) {
    jwt = authHeader;
  }

  if (!jwt && ctx.request.headers.get("content-type")?.includes("application/json")) {
    try {
      const body = ctx.request.body;
      const data = await body.json();
      jwt = data?.jwt ?? null;
    } catch (err) {
      console.debug("Invalid JSON body", err);
    }
  }

  if (!jwt) {
    ctx.state.currentUser = null;
    await next();
    return;
  }

  console.log("using:", { jwt });

  try {
    const payload = verify(jwt, Deno.env.get("JWT_KEY")!) as JwtPayload;
    const user = users.find(user => user.username === payload.iss);
    ctx.state.currentUser = user ?? null;
  } catch {
    ctx.state.currentUser = null;
  }

  await next();
};
