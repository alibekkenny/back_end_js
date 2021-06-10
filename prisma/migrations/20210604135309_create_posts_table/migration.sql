-- CreateTable
CREATE TABLE "Posts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT,
    "content" TEXT NOT NULL,
    "users_id" INTEGER NOT NULL,
    FOREIGN KEY ("users_id") REFERENCES "Users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
