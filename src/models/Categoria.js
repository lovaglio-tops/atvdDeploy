export class Categoria {

    #id;
    #nome;

    constructor(nome, id) {

        this.nome = nome;
        this.id = id;
    }

    get id() {
        return this.#id;
    }

    set id(value) {

        if (value && value <= 0) {
            throw new Error("ID inválido");
        }

        this.#id = value;
    }

    get nome() {
        return this.#nome;
    }

    set nome(value) {

        if (!value || value.trim().length < 3) {
            throw new Error("Nome inválido");
        }

        this.#nome = value;
    }

    static criar(dados) {

        return new Categoria(
            dados.nome,
            null
        );
    }

    static alterar(dados, id) {

        return new Categoria(
            dados.nome,
            id
        );
    }
}
