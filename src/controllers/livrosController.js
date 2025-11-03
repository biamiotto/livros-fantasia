import * as livrosController from './../models/livrosModel.js'

export const listarTodos = async (req, res) => {
    try {
        const livro = await livrosController.encontreTodos();

        if(!livro || livro.length === 0){
            res.status(404).json({
                total: 0,
                mensagem: 'Não há livros na lista',
                livro
            })
        }

        res.status(200).json({
            total: livro.length,
            mensagem: 'Lista de livros',
            livro
        })
    } catch (error) {
        res.status(500).json({
            erro: 'Erro interno de servidor',
            detalhes: error.message,
            status: 500
        });
    }
}

export const listarUm = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const livro = await livrosController.encontreUm(id);

        if(!livro){
            return res.status(404).json({
                erro: "Livro não encontrado",
                mensagem: 'Verifique o id do livro',
                id: id
            })
        }

        res.status(200).json({
            message: 'Livro encontrado',
            livro
        })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro interno de servidor',
            detalhes: error.message,
            status: 500
        })
    }
}

export const criar = async (req, res) => {
    try {
        const { titulo, autor, saga, paginas, editora, avaliacao, anoPublicacao, subgenero } = req.body;
        
        const dado = { titulo, autor, saga, paginas, editora, avaliacao, anoPublicacao, subgenero }

    if (paginas < 50) {
        console.log("O número de páginas deve ser maior que 50!");
    }

    const novoLivro = await livrosController.criar(req.body)
    
    res.status(201).json({
        mensagem: 'Livro criado com sucesso!',
        livro: novoLivro
    })

    } catch (error) {
        res.status(500).json({
            erro: 'erro ao criar Livro',
            detalhes: error.message
        })
    }
}


export const deletar = async (req, res) => {
    try {
        const id = parseInt(req.params.id)

        const livroExiste = await livrosController.encontreUm(id);

        if(!livroExiste){
            return res.status(404).json({
                erro: 'Livro com esse id não encontrado',
                id: id
            })
        }

        await livrosController.deletar(id)

        res.status(200).json({
            message: 'Livro apagado com sucesso',
            livroRemovido: livroExiste
        })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao apagar livro',
            detalhes: error.message
        })
        
    }
}

export const atualizar = async (req, res) => {
    try {
    
    const id = parseInt(req.params.id);
    const dados = req.body;

    const livroExiste = await livrosController.encontreUm(id);

    if(!livroExiste) {
        return res.status(404).json({
            erro: 'Esse livro não existe',
            id: id
        })
    }

    const livroAtualizado = await livrosController.atualizar(id, dados)

    return res.status(200).json({
        mensagem: 'Livro atualizado com sucesso!',
        livro: livroAtualizado
    })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao atualizar o livro',
            detalhes: error.message
        })
    }
}