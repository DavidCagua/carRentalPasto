import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { User } from "./entities/User";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    glob: "!(*.d).{js,ts}",
  },
  dbName: "lireddit",
  entities: [Post, User],
  user: "postgres",
  password: "muveke15",
  allowGlobalContext: true,
  debug: !__prod__,
  type: "postgresql",
} as Parameters<typeof MikroORM.init>[0];