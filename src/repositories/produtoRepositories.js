import { connection } from "../configs/Database.js";

const produtosRepository = {

    criar: async (produto) => {

        const sql = `
            INSERT INTO produtos
            (Nome, Descricao, Preco, Imagem, Estoque, CategoriaId)
            VALUES (?, ?, ?, ?, ?, ?)
        `;

        const values = [
            produto.nome,
            produto.descricao,
            produto.preco,
            produto.imagem,
            produto.estoque,
            produto.categoriaId
        ];

        const [result] = await connection.execute(sql, values);

        return result;
    },

    editar: async (produto) => {

        const sql = `
            UPDATE produtos
            SET
                Nome = ?,
                Descricao = ?,
                Preco = ?,
                Imagem = ?,
                Estoque = ?,
                CategoriaId = ?
            WHERE Id = ?
        `;

        const values = [
            produto.nome,
            produto.descricao,
            produto.preco,
            produto.imagem,
            produto.estoque,
            produto.categoriaId,
            produto.id
        ];

        const [result] = await connection.execute(sql, values);

        return result;
    },

    deletar: async (id) => {

        const sql = `
            DELETE FROM produtos
            WHERE Id = ?
        `;

        const [result] = await connection.execute(sql, [id]);

        return result;
    },

    selecionar: async () => {

        const sql = `
            SELECT
                p.Id,
                p.Nome,
                p.Descricao,
                p.Preco,
                p.Imagem,
                p.Estoque,
                p.CategoriaId,
                c.Nome AS Categoria
            FROM produtos p
            LEFT JOIN categorias c
                ON c.Id = p.CategoriaId
        `;

        const [rows] = await connection.execute(sql);

        return rows;
    },

    selecionarPorId: async (id) => {

        const sql = `
            SELECT
                p.Id,
                p.Nome,
                p.Descricao,
                p.Preco,
                p.Imagem,
                p.Estoque,
                p.CategoriaId,
                c.Nome AS Categoria
            FROM produtos p
            LEFT JOIN categorias c
                ON c.Id = p.CategoriaId
            WHERE p.Id = ?
        `;

        const [rows] = await connection.execute(sql, [id]);

        return rows[0];
    }
};

export default produtosRepository;