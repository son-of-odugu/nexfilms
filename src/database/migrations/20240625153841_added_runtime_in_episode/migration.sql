/*
  Warnings:

  - You are about to drop the column `runtime` on the `Series` table. All the data in the column will be lost.
  - Added the required column `runtime` to the `Episode` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Episode" ADD COLUMN     "runtime" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Series" DROP COLUMN "runtime";
