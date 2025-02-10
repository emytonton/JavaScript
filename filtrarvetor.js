function filtrarTarefas(tarefas,criterio,valor){
    if (criterio === "concluidas"){
        
        return tarefas.filter(tarefa => tarefa.concluida === valor);
    }


     else if(criterio === "prioridade"){
        return tarefas.filter(tarefa => tarefa.prioridade === valor);
     }

     return[];

    
}


const tarefas = [
    {titulo: "Estudas jS", concluida: false, prioridade: 2},
    {titulo: "Terminar de ler o livro", concluida: false, prioridade: 3},
    {titulo: "Ir ao mercado", concluida: true, prioridade: 1}


];

const tarefasConcluidas = filtrarTarefas(tarefas, "concluidas", true);
console.log(tarefasConcluidas);


const tarefasPrioridade1 = filtrarTarefas(tarefas, "prioridade", 1);
console.log(tarefasPrioridade1);

const tarefasNaoConcluidas = filtrarTarefas(tarefas, "concluidas", false);
console.log(tarefasNaoConcluidas);