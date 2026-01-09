import { RouterContext } from "@oak/oak";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";

import { users } from "./types/user.ts";
import { favs } from "./types/favs.ts";
import { State } from "./types/state.ts";

type Ctx = RouterContext<string, Record<string, string>, State>;

export const getFavs = (ctx: Ctx) => {
  const { username } = ctx.state.currentUser!;
  ctx.response.status = 200;
  ctx.response.body = { favs: favs[username] };
};

export const deleteFav = (ctx: Ctx) => {
  const { id } = ctx.params;
  const { username } = ctx.state.currentUser!;

  favs[username] = favs[username].filter(favId => favId !== id);

  ctx.response.status = 200;
  ctx.response.body = { favs: favs[username] };
};

export const postFav = (ctx: Ctx) => {
  const { id } = ctx.params;
  const { username } = ctx.state.currentUser!;

  if (!favs[username].includes(id)) {
    favs[username].push(id);
  }

  ctx.response.status = 201;
  ctx.response.body = { favs: favs[username] };
};

export const postLogin = async (ctx: Ctx) => {
  const body = ctx.request.body;
  const { username, password } = await body.json();

  const user = users.find(user => user.username === username);

  if (!user || !bcrypt.compareSync(password, user.password)) {
    ctx.response.status = 401;
    ctx.response.body = { msg: "invalid credentials" };
    return;
  }

  const jwt = sign(
    { iss: user.username },
    Deno.env.get("JWT_KEY")!,
    { expiresIn: "1h" }
  );

  ctx.response.status = 201;
  ctx.response.body = { jwt };
};

export const postRegister = async (ctx: Ctx) => {
  const body = ctx.request.body;
  const { username, password } = await body.json();

  if (users.some(user => user.username === username)) {
    ctx.response.status = 409;
    ctx.response.body = { msg: "user already exists" };
    return;
  }

  users.push({
    username,
    password: bcrypt.hashSync(password, 10)
  });

  favs[username] = [];
  ctx.response.status = 201;
  ctx.response.body = { msg: "user created successfully" };
};
