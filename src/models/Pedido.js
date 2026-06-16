export class Pedido {

    #id;
    #valorTotal;
    #statusPedido;

    constructor(valorTotal, statusPedido, id) {

        this.valorTotal = valorTotal;
        this.statusPedido = statusPedido;
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

    get valorTotal() {
        return this.#valorTotal;
    }

    set valorTotal(value) {

        if (value < 0) {
            throw new Error("Valor total inválido");
        }

        this.#valorTotal = value;
    }

    get statusPedido() {
        return this.#statusPedido;
    }

    set statusPedido(value) {

        if (!value) {
            throw new Error("Status obrigatório");
        }

        this.#statusPedido = value;
    }

    static criar(dados) {

        return new Pedido(
            dados.valorTotal,
            dados.statusPedido,
            null
        );
    }

    static editar(dados, id) {

        return new Pedido(
            dados.valorTotal,
            dados.statusPedido,
            id
        );
    }
}