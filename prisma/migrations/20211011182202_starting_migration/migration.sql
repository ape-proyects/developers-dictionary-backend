-- CreateEnum
CREATE TYPE "TagType" AS ENUM ('project', 'technology', 'language', 'architecture', 'tools');

-- CreateTable
CREATE TABLE "Error" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "dateCreated" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "log" TEXT,
    "images" TEXT[],
    "userId" TEXT NOT NULL,

    CONSTRAINT "Error_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Solution" (
    "id" TEXT NOT NULL,
    "text" VARCHAR(255) NOT NULL,
    "link" VARCHAR(255),
    "dateCreated" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "images" TEXT[],
    "errorId" TEXT,

    CONSTRAINT "Solution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "type" "TagType" NOT NULL,
    "errorId" TEXT,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Solution" ADD CONSTRAINT "Solution_errorId_fkey" FOREIGN KEY ("errorId") REFERENCES "Error"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_errorId_fkey" FOREIGN KEY ("errorId") REFERENCES "Error"("id") ON DELETE SET NULL ON UPDATE CASCADE;
