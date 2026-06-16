export class ItensPedido {

    #id;
    #pedidoId;
    #produtoId;
    #quantidade;
    #valorItem;
    #subTotal;

    constructor(
        produtoId,
        quantidade,
        valorItem,
        subTotal,
        pedidoId,
        id
    ) {

        this.produtoId = produtoId;
        this.quantidade = quantidade;
        this.valorItem = valorItem;
        this.subTotal = subTotal;
        this.pedidoId = pedidoId;
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

    get pedidoId() {
        return this.#pedidoId;
    }
 
    set pedidoId(value) {

        if (value !== null && value <= 0) {
            throw new Error("Pedido inválido");
        }

        this.#pedidoId = value;
    }

    get produtoId() {
        return this.#produtoId;
    }

    set produtoId(value) {

        if (!value || value <= 0) {
            throw new Error("Produto inválido");
        }

        this.#produtoId = value;
    }

    get quantidade() {
        return this.#quantidade;
    }

    set quantidade(value) {

        if (!value || value <= 0) {
            throw new Error("Quantidade inválida");
        }

        this.#quantidade = value;
    }

    get valorItem() {
        return this.#valorItem;
    }

    set valorItem(value) {

        if (!value || value <= 0) {
            throw new Error("Valor inválido");
        }

        this.#valorItem = value;
    }

    get subTotal() {
        return this.#subTotal;
    }

    set subTotal(value) {

        if (value < 0) {
            throw new Error("Subtotal inválido");
        }

        this.#subTotal = value;
    }

    static calcularSubTotalItens(itens) {

        return itens.reduce(
            (total, item) =>
                total + (item.valorItem * item.quantidade),
            0
        );
    }

    static criar(dados) {

        return new ItensPedido(
            dados.produtoId,
            dados.quantidade,
            dados.valorItem,
            dados.quantidade * dados.valorItem,
            null,
            null
        );
    }

}