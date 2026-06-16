
import { connection } from "../configs/Database.js";

const imagensRepository = {

  selecionar: async (id) => {
    const sql = "SELECT imagem FROM produtos WHERE id = ?";
    const values = [id];
    const [rows] = await connection.execute(sql, values);

    return rows; 
  }
};

export default imagensRepository;