import "dotenv/config";
import { Application, Router } from "@oak/oak";
import { oakCors } from "@oak/cors";

import { userMiddleware } from "./middlewares/userMiddleware.ts";
import { authMiddleware } from "./middlewares/authMiddleware.ts";
import { getFavs, deleteFav, postFav, postLogin, postRegister } from "./routes.ts";

const { args } = Deno;

const DEFAULT_PORT = 8080;
const portArg = args.find(arg => arg.startsWith("--port="));
const port = portArg ? Number(portArg.split("=")[1]) : DEFAULT_PORT;

const app = new Application();
const router = new Router();

app.use(oakCors());
app.use(userMiddleware);

router
  .get("/favs", authMiddleware, getFavs)
  .delete("/favs/:id", authMiddleware, deleteFav)
  .post("/favs/:id", authMiddleware, postFav)
  .post("/login", postLogin)
  .post("/register", postRegister);

app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener("error", evt => {
  console.log(evt.error);
});

console.log(`Server running on port: ${port}`);
await app.listen({ port });
