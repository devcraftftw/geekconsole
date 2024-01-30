-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Password" (
    "hash" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Password_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "UserImage" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "altText" TEXT,
    "contentType" TEXT NOT NULL,
    "blob" BLOB NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "UserImage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Book" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "readingStatus" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "comment" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "ownerId" TEXT NOT NULL,
    CONSTRAINT "Book_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "BookImage" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "altText" TEXT,
    "contentType" TEXT NOT NULL,
    "blob" BLOB NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "bookId" TEXT NOT NULL,
    CONSTRAINT "BookImage_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CarSpending" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL,
    "value" INTEGER NOT NULL,
    "comment" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "typeId" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    CONSTRAINT "CarSpending_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "CarSpendingType" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "CarSpending_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CarSpendingType" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Permission" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "action" TEXT NOT NULL,
    "entity" TEXT NOT NULL,
    "access" TEXT NOT NULL,
    "description" TEXT DEFAULT '',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Role" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT DEFAULT '',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "expirationDate" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Verification" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" TEXT NOT NULL,
    "target" TEXT NOT NULL,
    "secret" TEXT NOT NULL,
    "algorithm" TEXT NOT NULL,
    "digits" INTEGER NOT NULL,
    "period" INTEGER NOT NULL,
    "charSet" TEXT NOT NULL,
    "expiresAt" DATETIME
);

-- CreateTable
CREATE TABLE "Connection" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "providerName" TEXT NOT NULL,
    "providerId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Connection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_PermissionToRole" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_PermissionToRole_A_fkey" FOREIGN KEY ("A") REFERENCES "Permission" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_PermissionToRole_B_fkey" FOREIGN KEY ("B") REFERENCES "Role" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_RoleToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_RoleToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Role" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_RoleToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Password_userId_key" ON "Password"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserImage_userId_key" ON "UserImage"("userId");

-- CreateIndex
CREATE INDEX "Book_ownerId_idx" ON "Book"("ownerId");

-- CreateIndex
CREATE INDEX "BookImage_bookId_idx" ON "BookImage"("bookId");

-- CreateIndex
CREATE UNIQUE INDEX "Permission_action_entity_access_key" ON "Permission"("action", "entity", "access");

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");

-- CreateIndex
CREATE INDEX "Session_userId_idx" ON "Session"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Verification_target_type_key" ON "Verification"("target", "type");

-- CreateIndex
CREATE INDEX "Connection_userId_idx" ON "Connection"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Connection_providerName_providerId_key" ON "Connection"("providerName", "providerId");

-- CreateIndex
CREATE UNIQUE INDEX "_PermissionToRole_AB_unique" ON "_PermissionToRole"("A", "B");

-- CreateIndex
CREATE INDEX "_PermissionToRole_B_index" ON "_PermissionToRole"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_RoleToUser_AB_unique" ON "_RoleToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_RoleToUser_B_index" ON "_RoleToUser"("B");

--------------------------------- Manual Seeding --------------------------

INSERT INTO Role VALUES('clrofzp2g000own3rv59txniy','admin','',1705898617001,1705898617001);
INSERT INTO Role VALUES('clrofzp2i000pwn3ruid150ug','user','',1705898617003,1705898617003);

INSERT INTO CarSpendingType VALUES('clrofzp2j000qwn3rgbkaj7dw','Fuel',1705898617004,1705898617004);
INSERT INTO CarSpendingType VALUES('clrofzp2k000rwn3rbcaogcvf','Repair',1705898617004,1705898617004);
INSERT INTO CarSpendingType VALUES('clrofzp2k000swn3re3znr4d1','New purchase',1705898617004,1705898617004);

INSERT INTO Permission VALUES('clrofzp1u0000wn3rcotncfi0','create','user','own','',1705898616978,1705898616978);
INSERT INTO Permission VALUES('clrofzp1y0001wn3r022totmr','create','user','any','',1705898616983,1705898616983);
INSERT INTO Permission VALUES('clrofzp1z0002wn3rcoxzkhwe','read','user','own','',1705898616984,1705898616984);
INSERT INTO Permission VALUES('clrofzp200003wn3rdjqwygu7','read','user','any','',1705898616984,1705898616984);
INSERT INTO Permission VALUES('clrofzp220004wn3rte4070jg','update','user','own','',1705898616986,1705898616986);
INSERT INTO Permission VALUES('clrofzp220005wn3rxv3vtezy','update','user','any','',1705898616987,1705898616987);
INSERT INTO Permission VALUES('clrofzp230006wn3rzp7z96dq','delete','user','own','',1705898616987,1705898616987);
INSERT INTO Permission VALUES('clrofzp230007wn3r5vcsla5u','delete','user','any','',1705898616988,1705898616988);
INSERT INTO Permission VALUES('clrofzp250008wn3r9salu63d','create','book','own','',1705898616990,1705898616990);
INSERT INTO Permission VALUES('clrofzp260009wn3r723gfx03','create','book','any','',1705898616990,1705898616990);
INSERT INTO Permission VALUES('clrofzp27000awn3r9lvc6lr3','read','book','own','',1705898616991,1705898616991);
INSERT INTO Permission VALUES('clrofzp27000bwn3rdpq26b7f','read','book','any','',1705898616992,1705898616992);
INSERT INTO Permission VALUES('clrofzp28000cwn3rcdk25y2g','update','book','own','',1705898616992,1705898616992);
INSERT INTO Permission VALUES('clrofzp28000dwn3rz240ee9a','update','book','any','',1705898616993,1705898616993);
INSERT INTO Permission VALUES('clrofzp29000ewn3rdp3mleol','delete','book','own','',1705898616993,1705898616993);
INSERT INTO Permission VALUES('clrofzp29000fwn3r15uc2nu5','delete','book','any','',1705898616994,1705898616994);
INSERT INTO Permission VALUES('clrofzp2a000gwn3rs53r8dvl','create','carSpending','own','',1705898616994,1705898616994);
INSERT INTO Permission VALUES('clrofzp2a000hwn3rmvvwx534','create','carSpending','any','',1705898616995,1705898616995);
INSERT INTO Permission VALUES('clrofzp2b000iwn3rsekd6tux','read','carSpending','own','',1705898616995,1705898616995);
INSERT INTO Permission VALUES('clrofzp2c000jwn3rh2dtfnyh','read','carSpending','any','',1705898616996,1705898616996);
INSERT INTO Permission VALUES('clrofzp2c000kwn3rusq9upjx','update','carSpending','own','',1705898616997,1705898616997);
INSERT INTO Permission VALUES('clrofzp2d000lwn3rwv6jh2vn','update','carSpending','any','',1705898616997,1705898616997);
INSERT INTO Permission VALUES('clrofzp2d000mwn3rt5vtc5ak','delete','carSpending','own','',1705898616998,1705898616998);
INSERT INTO Permission VALUES('clrofzp2e000nwn3rxrvgq3i3','delete','carSpending','any','',1705898616998,1705898616998);

INSERT INTO _PermissionToRole VALUES('clrofzp1y0001wn3r022totmr','clrofzp2g000own3rv59txniy');
INSERT INTO _PermissionToRole VALUES('clrofzp200003wn3rdjqwygu7','clrofzp2g000own3rv59txniy');
INSERT INTO _PermissionToRole VALUES('clrofzp220005wn3rxv3vtezy','clrofzp2g000own3rv59txniy');
INSERT INTO _PermissionToRole VALUES('clrofzp230007wn3r5vcsla5u','clrofzp2g000own3rv59txniy');
INSERT INTO _PermissionToRole VALUES('clrofzp260009wn3r723gfx03','clrofzp2g000own3rv59txniy');
INSERT INTO _PermissionToRole VALUES('clrofzp27000bwn3rdpq26b7f','clrofzp2g000own3rv59txniy');
INSERT INTO _PermissionToRole VALUES('clrofzp28000dwn3rz240ee9a','clrofzp2g000own3rv59txniy');
INSERT INTO _PermissionToRole VALUES('clrofzp29000fwn3r15uc2nu5','clrofzp2g000own3rv59txniy');
INSERT INTO _PermissionToRole VALUES('clrofzp2a000hwn3rmvvwx534','clrofzp2g000own3rv59txniy');
INSERT INTO _PermissionToRole VALUES('clrofzp2c000jwn3rh2dtfnyh','clrofzp2g000own3rv59txniy');
INSERT INTO _PermissionToRole VALUES('clrofzp2d000lwn3rwv6jh2vn','clrofzp2g000own3rv59txniy');
INSERT INTO _PermissionToRole VALUES('clrofzp2e000nwn3rxrvgq3i3','clrofzp2g000own3rv59txniy');
INSERT INTO _PermissionToRole VALUES('clrofzp1u0000wn3rcotncfi0','clrofzp2i000pwn3ruid150ug');
INSERT INTO _PermissionToRole VALUES('clrofzp1z0002wn3rcoxzkhwe','clrofzp2i000pwn3ruid150ug');
INSERT INTO _PermissionToRole VALUES('clrofzp220004wn3rte4070jg','clrofzp2i000pwn3ruid150ug');
INSERT INTO _PermissionToRole VALUES('clrofzp230006wn3rzp7z96dq','clrofzp2i000pwn3ruid150ug');
INSERT INTO _PermissionToRole VALUES('clrofzp250008wn3r9salu63d','clrofzp2i000pwn3ruid150ug');
INSERT INTO _PermissionToRole VALUES('clrofzp27000awn3r9lvc6lr3','clrofzp2i000pwn3ruid150ug');
INSERT INTO _PermissionToRole VALUES('clrofzp28000cwn3rcdk25y2g','clrofzp2i000pwn3ruid150ug');
INSERT INTO _PermissionToRole VALUES('clrofzp29000ewn3rdp3mleol','clrofzp2i000pwn3ruid150ug');
INSERT INTO _PermissionToRole VALUES('clrofzp2a000gwn3rs53r8dvl','clrofzp2i000pwn3ruid150ug');
INSERT INTO _PermissionToRole VALUES('clrofzp2b000iwn3rsekd6tux','clrofzp2i000pwn3ruid150ug');
INSERT INTO _PermissionToRole VALUES('clrofzp2c000kwn3rusq9upjx','clrofzp2i000pwn3ruid150ug');
INSERT INTO _PermissionToRole VALUES('clrofzp2d000mwn3rt5vtc5ak','clrofzp2i000pwn3ruid150ug');