import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Inserindo livros no banco...')

  await prisma.livro.deleteMany()

    await prisma.livro.createMany({
        data: [
            {
                "titulo": "O Último Suspiro do Dragão",
                "autor": "Elara Silvestre",
                "saga": "Crônicas de Aerthos",
                "subgenero": "Alta Fantasia",
                "paginas": 680,
                "anoPublicacao": 2018,
                "editora": "Arcana Books",
                "avaliacao": 4.5
            },
            {
                "titulo": "A Lâmina da Traição",
                "autor": "Kaelen Thorne",
                "saga": "O Ciclo das Sombras",
                "subgenero": "Fantasia Sombria",
                "paginas": 452,
                "anoPublicacao": 2021,
                "editora": "Nightfall Press",
                "avaliacao": 4.2
            },
            {
                "titulo": "Os Jardins de Cristal",
                "autor": "Lyra Moonstone",
                "saga": "Contos de Faerie",
                "subgenero": "Fantasia Urbana",
                "paginas": 315,
                "anoPublicacao": 2019,
                "editora": "Aurora Editora",
                "avaliacao": 4.7
            },
            {
                "titulo": "O Enigma do Mago Errante",
                "autor": "Silas Ember",
                "saga": "Nenhuma",
                "subgenero": "Fantasia de Aventura",
                "paginas": 550,
                "anoPublicacao": 2016,
                "editora": "Peregrino Livros",
                "avaliacao": 3.9
            },
            {
                "titulo": "As Muralhas de Éter",
                "autor": "Anya Vesper",
                "saga": "A Guerra Celeste",
                "subgenero": "Steampunk Fantástico",
                "paginas": 720,
                "anoPublicacao": 2023,
                "editora": "Chronos Publicações",
                "avaliacao": 4.8
            },
            {
                "titulo": "A Canção do Povo do Mar",
                "autor": "Merek Tidal",
                "saga": "Os Profundos",
                "subgenero": "Fantasia Mitológica",
                "paginas": 410,
                "anoPublicacao": 2017,
                "editora": "Oceano Edições",
                "avaliacao": 4.1
            },
            {
                "titulo": "O Feitiço Proibido de Eldoria",
                "autor": "Zara Nightshade",
                "saga": "Nenhuma",
                "subgenero": "Fantasia Histórica",
                "paginas": 380,
                "anoPublicacao": 2020,
                "editora": "Fênix Livros",
                "avaliacao": 4.4
            },
            {
                "titulo": "Herdeiros da Estrela Cadente",
                "autor": "Caspian Reed",
                "saga": "O Legado Astral",
                "subgenero": "Space Opera/Fantasia",
                "paginas": 605,
                "anoPublicacao": 2022,
                "editora": "Galáxia Editorial",
                "avaliacao": 4.6
            },
            {
                "titulo": "O Ladrão de Memórias",
                "autor": "Riona Swift",
                "saga": "As Máscaras de Kael",
                "subgenero": "Fantasia 'Heist' (Assalto)",
                "paginas": 490,
                "anoPublicacao": 2015,
                "editora": "Ladrão de Sonhos Publicações",
                "avaliacao": 4.3
            },
            {
                "titulo": "As Torres Silenciosas",
                "autor": "Jareth Stone",
                "saga": "Crônicas de Aerthos",
                "subgenero": "Fantasia Militar",
                "paginas": 530,
                "anoPublicacao": 2019,
                "editora": "Arcana Books",
                "avaliacao": 4.0
            }
            ],
        })

    console.log('✨ 10 livros inseridos com sucesso!');
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })