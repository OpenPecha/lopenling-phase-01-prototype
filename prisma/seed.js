import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getUsers().map((user) => {
      return db.user.create({ data: user });
    })
  );
}

seed();

function getUsers() {
  // shout-out to https://icanhazdadjoke.com/

  return [
    {
      name: "tenzin",
      email: "tenzin@gmail.com",
      isAdmin: false,
    },
    {
      name: "kalden",
      email: "kalden@gmail.com",
      isAdmin: true,
    },
  ];
}
