import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const encontreTodos = async () => {
    return await prisma.livro.findMany({
        orderBy: { id: 'asc' }
    });
}

export const encontreUm = async (id) => {
    return await prisma.livro.findUnique({
        where: { id: Number(id) }
    })
}

export const criar = async (dado) => {
    return await prisma.livro.create({
        data: {
            titulo: dado.titulo,
            autor: dado.autor,
            saga: dado.saga,
            paginas: dado.paginas,
            editora: dado.editora,
            avaliacao: dado.avaliacao
        }
    })
}

export const deletar = async (id) => {
    return await prisma.livro.delete({
        where: { id: Number(id) }
    })
}

export const atualizar = async (id, dado) => {
    return await prisma.livro.update({
        where: { id: Number(id) },
        data: {
            ...(dado.titulo && { titulo: dado.titulo }),
            ...(dado.autor && { autor: dado.autor }),
            ...(dado.saga && { saga: dado.saga }),
            ...(dado.paginas && { paginas: dado.paginas }),
            ...(dado.editora && { editora: dado.editora }),
            ...(dado.avaliacao && { avaliacao: dado.avaliacao })
        }
    })
}