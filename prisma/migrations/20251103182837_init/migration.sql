-- CreateTable
CREATE TABLE "livros" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "saga" TEXT NOT NULL,
    "subgenero" TEXT NOT NULL,
    "paginas" DOUBLE PRECISION NOT NULL,
    "anoPublicacao" DOUBLE PRECISION NOT NULL,
    "editora" TEXT NOT NULL,
    "avaliacao" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "livros_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "livros_titulo_key" ON "livros"("titulo");
