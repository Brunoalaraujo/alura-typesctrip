export class Negociacao {
    #data;
    #quantidade;
    #valor;

    constructor(data, quantidadem, valor) {
        this.#data = data;
        this.#quantidade = quantidadem;
        this.#valor = valor
    }

    get data() {
        return this.#data
    }

    get quantidade() {
        return this.#quantidade
    }

    get valor() {
        return this.#valor
    }

    get volume(){
        return this.#quantidade * this.#valor
    }
}