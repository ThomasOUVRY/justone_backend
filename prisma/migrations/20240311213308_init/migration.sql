-- CreateTable
CREATE TABLE "Game" (
    "code" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "status" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Player" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "gameCode" TEXT NOT NULL,
    CONSTRAINT "Player_gameCode_fkey" FOREIGN KEY ("gameCode") REFERENCES "Game" ("code") ON DELETE RESTRICT ON UPDATE CASCADE
);
