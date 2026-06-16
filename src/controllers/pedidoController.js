import pedidoRepository from "../repositories/pedidoRepositories.js";
import { Pedido } from "../models/Pedido.js"
import { ItensPedido } from "../models/ItensPedido.js";

// import { Pedido } from "../models/Pedidos.js";

import { statusPed } from "../enums/statusPedido.js";

const pedidoController = {

    criar: async (req, res) => {

        try {

            const { itens } = req.body;

            if (!itens || itens.length === 0) {

                return res.status(400).json({
                    error: "Itens obrigatórios"
                });
            }

            const itensPedido = itens.map(item =>
                ItensPedido.criar({
                    produtoId: item.produtoId,
                    quantidade: item.quantidade,
                    valorItem: 1
                })
            );

            const pedido = Pedido.criar({
                valorTotal: 0,
                statusPedido: statusPed.ABERTO
            });

            const result =
                await pedidoRepository.criar(
                    pedido,
                    itensPedido
                );

            res.status(201).json(result);

        } catch (error) {

            console.log(error);

            res.status(500).json({
                error: error.message
            });
        }
    },

    selecionar: async (req, res) => {

        try {

            const result =
                await pedidoRepository.selecionar();

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

            const result =
                await pedidoRepository.selecionarPorId(id);

            res.status(200).json(result);

        } catch (error) {

            res.status(500).json({
                error: error.message
            });
        }
    },

    editar: async (req, res) => {

        try {

            const id = req.params.id;

            const { statusPedido } = req.body;

            const pedido = Pedido.editar(
                {
                    valorTotal: 0,
                    statusPedido
                },
                id
            );

            const result =
                await pedidoRepository.editarStatus(pedido);

            res.status(200).json({
                message: "Status atualizado",
                result
            });

        } catch (error) {

            res.status(500).json({
                error: error.message
            });
        }
    },

    adicionarItem: async (req, res) => {

        try {

            const pedidoId = req.params.id;
            const { produtoId, quantidade, valorItem } = req.body;

            const item = ItensPedido.criar({
                produtoId,
                quantidade,
                valorItem
            });

            const result = await pedidoRepository.adicionarItem(
                pedidoId,
                item
            );

            res.json(result);

        } catch (error) {

            res.status(500).json({
                error: error.message
            });
        }
    },

    editarItem: async (req, res) => {

        try {

            const { itemId } = req.params;
            const { quantidade } = req.body;

            const result = await pedidoRepository.editarItem(
                itemId,
                quantidade
            );

            res.json(result);

        } catch (error) {

            res.status(500).json({
                error: error.message
            });
        }
    },

    deletarItem: async (req, res) => {

        try {

            const { itemId } = req.params;

            const result = await pedidoRepository.deletarItem(itemId);

            res.json(result);

        } catch (error) {

            res.status(500).json({
                error: error.message
            });
        }
    },

    deletar: async (req, res) => {

        try {

            const id = req.params.id;

            const result =
                await pedidoRepository.deletar(id);

            res.status(200).json(result);

        } catch (error) {

            res.status(500).json({
                error: error.message
            });
        }
    }
};

export default pedidoController;