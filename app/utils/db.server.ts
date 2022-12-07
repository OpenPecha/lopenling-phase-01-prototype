import { PrismaClient } from "@prisma/client";
let db: PrismaClient;

// this is needed because in development we don't want to restart
// the server with every change, but we want to make sure we don't
// create a new connection to the DB with every change either.

import * as Sentry from "@sentry/remix";

if (process.env.NODE_ENV === "production") {
  db = new PrismaClient();

  Sentry.init({
    dsn: "https://02e27607d8b74813aa7a8372d73d7e47:aaa4980f4cc246bd98fd8e092473f406@o4504287133171712.ingest.sentry.io/4504287134351360",
    tracesSampleRate: 1,
    integrations: [new Sentry.Integrations.Prisma({ client: db })],
  });
} else {
  if (!global.__db) {
    global.__db = new PrismaClient();
  }
  db = global.__db;
}

export { db };
