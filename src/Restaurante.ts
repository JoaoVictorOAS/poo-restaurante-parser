abstract class ItemCardapio {
    constructor(public nome: string, protected preco: number) {}

    alterarPreco(novoPreco: number): void {
        this.preco = novoPreco;
    }

    getPreco(): number {
        return this.preco;
    }

    abstract detalhes(): string;
}

class Bebida extends ItemCardapio {
    constructor(nome: string, preco: number, public volumeML: number) {
        super(nome, preco);
    }

    detalhes(): string {
        return `${this.nome} (${this.volumeML}ml) - R$ ${this.preco.toFixed(2).replace('.', ',')}`;
    }
}

class Prato extends ItemCardapio {
    constructor(nome: string, preco: number, public ingredientes: string[]) {
        super(nome, preco);
    }

    detalhes(): string {
        return `${this.nome} [${this.ingredientes.join(', ')}] - R$ ${this.preco.toFixed(2).replace('.', ',')}`;
    }
}
class SecaoCardapio<T extends ItemCardapio> {
    private itens: T[] = [];

    constructor(public titulo: string) {}

    adicionarItem(item: T): void {
        this.itens.push(item);
    }

    buscarItem(nome: string): T | undefined {
        return this.itens.find(item => item.nome === nome);
    }
    
    listarItens(): void {
        console.log(`--- Seção: ${this.titulo} ---`);
        this.itens.forEach(i => console.log(i.detalhes()));
    }
}

class Restaurante {

    private secoes: SecaoCardapio<ItemCardapio>[] = [];

    constructor(public nome: string) {}

    adicionarSecao(secao: SecaoCardapio<ItemCardapio>): void {
        this.secoes.push(secao);
    }

    buscarSecao(titulo: string): SecaoCardapio<ItemCardapio> | undefined {
        return this.secoes.find(s => s.titulo === titulo);
    }
}


const bistro = new Restaurante("Bistro UFR");

const secaoBebidas = new SecaoCardapio<Bebida>("Bebidas");
secaoBebidas.adicionarItem(new Bebida("Coca-cola", 5.00, 350));
secaoBebidas.adicionarItem(new Bebida("Suco de Laranja", 12.00, 500));

const secaoPratos = new SecaoCardapio<Prato>("Pratos");
secaoPratos.adicionarItem(new Prato("Parmegiana", 45.90, ["Carne", "Queijo", "Molho"]));
secaoPratos.adicionarItem(new Prato("Salada Caesar", 25.00, ["Alface", "Croutons", "Molho Caesar"]));

bistro.adicionarSecao(secaoBebidas);
bistro.adicionarSecao(secaoPratos);

console.log("--- Antes da alteração ---");
secaoBebidas.listarItens();

bistro.buscarSecao("Bebidas")?.buscarItem("Suco de Laranja")?.alterarPreco(15.50);

console.log("\n--- Depois da alteração ---");
secaoBebidas.listarItens();