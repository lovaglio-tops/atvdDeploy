export class Produto {
    #id;
    #nome;
    #descricao;
    #preco;
    #imagem;
    #estoque;
    #categoriaId;

    constructor(nome, descricao, preco, imagem, estoque, categoriaId, id) {
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.imagem = imagem;
        this.estoque = estoque;
        this.categoriaId = categoriaId;
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
        if (!value || value.length < 3) {
            throw new Error("Nome inválido");
        }

        this.#nome = value;
    }

    get descricao() {
        return this.#descricao;
    }

    set descricao(value) {
        this.#descricao = value;
    }

    get preco() {
        return this.#preco;
    }

    set preco(value) {
        if (value <= 0) {
            throw new Error("Preço inválido");
        }

        this.#preco = value;
    }

    get imagem() {
        return this.#imagem;
    }

    set imagem(value) {
        this.#imagem = value;
    }

    get estoque() {
        return this.#estoque;
    }

    set estoque(value) {
        if (value < 0) {
            throw new Error("Estoque inválido");
        }

        this.#estoque = value;
    }

    get categoriaId() {
        return this.#categoriaId;
    }

    set categoriaId(value) {
        if (!value) {
            throw new Error("Categoria obrigatória");
        }

        this.#categoriaId = value;
    }

    static criar(dados, imagem) {
        return new Produto(
            dados.nome,
            dados.descricao,
            dados.preco,
            imagem,
            dados.estoque,
            dados.categoriaId,
            null
        );
    }

    static alterar(dados, imagem, id) {
        return new Produto(
            dados.nome,
            dados.descricao,
            dados.preco,
            imagem,
            dados.estoque,
            dados.categoriaId,
            id
        );
    }
}