import { connection } from "../configs/Database.js";

const categoriaRepository = {

    criar: async (categoria) => {

        const sql = `
            INSERT INTO categorias (Nome)
            VALUES (?)
        `;

        const values = [
            categoria.nome
        ];

        const [result] = await connection.execute(sql, values);

        return result;
    },

    editar: async (categoria) => {

        const sql = `
            UPDATE categorias
            SET Nome = ?
            WHERE Id = ?
        `;

        const values = [
            categoria.nome,
            categoria.id
        ];

        const [result] = await connection.execute(sql, values);

        return result;
    },

    deletar: async (id) => {

        const sql = `
            DELETE FROM categorias
            WHERE Id = ?
        `;

        const [result] = await connection.execute(sql, [id]);

        return result;
    },

    selecionar: async () => {

        const sql = `
            SELECT *
            FROM categorias
        `;

        const [rows] = await connection.execute(sql);

        return rows;
    },

    selecionarPorId: async (id) => {

        const sql = `
            SELECT *
            FROM categorias
            WHERE Id = ?
        `;

        const [rows] = await connection.execute(sql, [id]);

        return rows[0];
    }

};

export default categoriaRepository;