
function ordenarTarefas(tarefas, criterio, ordem) {
    
    const criteriosValidos = ["titulo", "concluida", "prioridade", "data"];
    if (!criteriosValidos.includes(criterio)) {
        throw new Error("Critério de ordenação inválido.");
    }

    
    const ordensValidas = ["crescente", "decrescente"];
    if (!ordensValidas.includes(ordem)) {
        throw new Error("Ordem de ordenação inválida.");
    }

    
    const comparador = (a, b) => {
        if (a[criterio] < b[criterio]) {
            return -1;
        }
        if (a[criterio] > b[criterio]) {
            return 1;
        }
        return 0;
    };

    
    const tarefasOrdenadas = tarefas.sort(comparador);

    
    if (ordem === "decrescente") {
        return tarefasOrdenadas.reverse();
    }

    return tarefasOrdenadas;
}


const tarefas = [
    { titulo: "Estudar JavaScript", concluida: false, prioridade: 2, data: "2023-08-15" },
    { titulo: "Estudar HTML e CSS", concluida: true, prioridade: 1, data: "2023-08-10" },
    { titulo: "Fazer compras", concluida: false, prioridade: 3, data: "2023-08-12" }
];

const tarefasOrdenadasPorData = ordenarTarefas(tarefas, "data", "crescente");
console.log(tarefasOrdenadasPorData);

