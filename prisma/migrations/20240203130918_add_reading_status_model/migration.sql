-- CreateTable
CREATE TABLE "BookReadingStatus" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Book" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "readingStatus" TEXT NOT NULL,
    "description" TEXT,
    "comment" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "ownerId" TEXT NOT NULL,
    "statusId" TEXT,
    CONSTRAINT "Book_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Book_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "BookReadingStatus" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Book" ("author", "comment", "createdAt", "description", "id", "ownerId", "readingStatus", "title", "updatedAt", "year") SELECT "author", "comment", "createdAt", "description", "id", "ownerId", "readingStatus", "title", "updatedAt", "year" FROM "Book";
DROP TABLE "Book";
ALTER TABLE "new_Book" RENAME TO "Book";
CREATE INDEX "Book_ownerId_idx" ON "Book"("ownerId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "BookReadingStatus_name_key" ON "BookReadingStatus"("name");

INSERT INTO BookReadingStatus VALUES('cls63g0690000jp6fjm020nvv','Want to read',1706965934049,1706965934049);
INSERT INTO BookReadingStatus VALUES('cls63g06b0001jp6fwk185ipa','Reading',1706965934052,1706965934052);
INSERT INTO BookReadingStatus VALUES('cls63g06c0002jp6fwkekuzne','Have read',1706965934052,1706965934052);
