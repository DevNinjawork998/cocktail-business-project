-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "longDescription" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "priceSubtext" TEXT NOT NULL,
    "imageColor" TEXT NOT NULL,
    "features" JSONB NOT NULL,
    "ingredients" JSONB,
    "productBrief" TEXT,
    "nutritionFacts" JSONB,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
