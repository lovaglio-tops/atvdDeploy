import { Produto } from "../models/Produto.js";
import produtosRepository from "../repositories/produtoRepositories.js";

const produtosController = {

    criar: async (req, res) => {

        try {

            const {
                nome,
                descricao,
                preco,
                estoque,
                categoriaId
            } = req.body;

            const imagem = req.file
                ? req.file.filename
                : null;

            const produto = Produto.criar(
                {
                    nome,
                    descricao,
                    preco,
                    estoque,
                    categoriaId
                },
                imagem
            );

            const result = await produtosRepository.criar(produto);

            res.status(201).json({
                message: "Produto cadastrado com sucesso",
                result
            });

        } catch (error) {

            console.log(error);

            res.status(500).json({
                error: error.message
            });
        }
    },

    editar: async (req, res) => {

        try {

            const id = req.params.id;

            const {
                nome,
                descricao,
                preco,
                estoque,
                categoriaId
            } = req.body;

            const imagem = req.file
                ? req.file.filename
                : null;

            const produto = Produto.alterar(
                {
                    nome,
                    descricao,
                    preco,
                    estoque,
                    categoriaId
                },
                imagem,
                id
            );

            const result = await produtosRepository.editar(produto);

            res.status(200).json({
                message: "Produto atualizado com sucesso",
                result
            });

        } catch (error) {

            console.log(error);

            res.status(500).json({
                error: error.message
            });
        }
    },

    deletar: async (req, res) => {

        try {

            const id = req.params.id;

            const result = await produtosRepository.deletar(id);

            res.status(200).json({
                message: "Produto removido com sucesso",
                result
            });

        } catch (error) {

            res.status(500).json({
                error: error.message
            });
        }
    },

    selecionar: async (req, res) => {

        try {

            const result = await produtosRepository.selecionar();

            res.status(200).json(result);

        } catch (error) {

            res.status(500).json({
                error: error.message
            });
        }
    },

    selecionarPorId: async (req, res) => {

        try {

            const id = req.params.id;

            const result = await produtosRepository.selecionarPorId(id);

            res.status(200).json(result);

        } catch (error) {

            res.status(500).json({
                error: error.message
            });
        }
    }
};

export default produtosController;