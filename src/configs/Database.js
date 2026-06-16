import mysql from 'mysql2/promise';
import dotenv from 'dotenv';


// Singleton para a conexão com o banco de dados
class Database {
    static #instance = null;
    #pool = null;


    #createPool() {
        this.#pool = mysql.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            port: process.env.DB_PORT,
            waitForConnections: true,
            connectionLimit: 100,
            queueLimit: 0,
            ssl: {
                rejectUnauthorized: false
            }
        });
    }


    static getInstance() {
        if (!Database.#instance) {
            Database.#instance = new Database();
            Database.#instance.#createPool();
        }
        return Database.#instance;
    }


    getPool() {
        return this.#pool;
    }
}


export const connection = Database.getInstance().getPool();


export async function initializeDatabase() {
    console.log("Inicializando o banco de dados e tabelas...");
    try {
        const tempConnection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            port: process.env.DB_PORT,
            ssl: { rejectUnauthorized: false }
        });


        const dbName = process.env.DB_DATABASE || 'atividade1';


        await tempConnection.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\`;`);
        await tempConnection.query(`USE \`${dbName}\`;`);


        await tempConnection.query(`
            CREATE TABLE IF NOT EXISTS categorias (
                Id INT AUTO_INCREMENT PRIMARY KEY,
                Nome VARCHAR(100) NOT NULL
            );
        `);


        await tempConnection.query(`
            CREATE TABLE IF NOT EXISTS produtos (
                Id INT AUTO_INCREMENT PRIMARY KEY,
                Nome VARCHAR(150) NOT NULL,
                Descricao TEXT,
                Preco DECIMAL(10,2) NOT NULL,
                Imagem VARCHAR(255),
                Estoque INT NOT NULL,
                CategoriaId INT,

                CONSTRAINT FK_Produtos_Categorias
                FOREIGN KEY (CategoriaId)
                REFERENCES categorias(Id)
            );
        `);

        await tempConnection.query(`
            CREATE TABLE IF NOT EXISTS pedidos (
                Id INT AUTO_INCREMENT PRIMARY KEY,
                DataPedido DATETIME DEFAULT CURRENT_TIMESTAMP,
                ValorTotal DECIMAL(10,2),
                StatusPedido ENUM('Aberto', 'Transito', 'Entregue') NOT NULL
            );
        `);

        await tempConnection.query(`
            CREATE TABLE IF NOT EXISTS itens_pedidos (
                Id INT AUTO_INCREMENT PRIMARY KEY,
                PedidoId INT,
                ProdutoId INT,
                Quantidade INT,
                ValorItem DECIMAL(10,2),
                SubTotal DECIMAL(10,2),

                CONSTRAINT FK_ItensPedidos_Pedidos
                FOREIGN KEY (PedidoId)
                REFERENCES pedidos(Id),

                CONSTRAINT FK_ItensPedidos_Produtos
                FOREIGN KEY (ProdutoId)
                REFERENCES produtos(Id)
            );
        `);


        await tempConnection.end();
        console.log("Banco de dados e tabelas verificados/criados com sucesso.");
    } catch (error) {
        console.error("Erro ao criar o banco ou as tabelas:", error);
        throw error;
    }
}