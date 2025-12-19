interface Usuario {
    id: number;
    email: string;
}

interface Produto {
    id: string;
    valor: number;
}

interface IParser<T> {
    parse(dado: string): T;
}

class JsonUserParser implements IParser<Usuario> {
    parse(dado: string): Usuario {
        return JSON.parse(dado);
    }
}

class CsvProductParser implements IParser<Produto> {
    parse(dado: string): Produto {
        const partes = dado.split(';');
        
        if (partes.length < 2) {
            throw new Error("error");
        }

        return {
            id: partes[0]!.trim(), 
            valor: parseFloat(partes[1]!)
        };
    }
}

function processarDados<T>(parser: IParser<T>, dadoBruto: string): void {
    try {
        const resultado: T = parser.parse(dadoBruto);
        console.log("Objeto Processado:", resultado);
    } catch (error) {
        console.error("Erro no processamento:", error);
    }
}

const rawJson = '{"id": 1, "email": "admin@teste.com"}'; 
const rawCsv = "GAMER-KEYBOARD;250.00";

console.log("\n--- JSON ---");
processarDados(new JsonUserParser(), rawJson);

console.log("\n--- CSV ---");
processarDados(new CsvProductParser(), rawCsv);