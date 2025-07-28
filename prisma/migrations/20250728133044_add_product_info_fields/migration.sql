-- AlterTable
ALTER TABLE "products" ADD COLUMN "ingredients" JSONB;
ALTER TABLE "products" ADD COLUMN "nutritionFacts" JSONB;
ALTER TABLE "products" ADD COLUMN "productBrief" TEXT;
