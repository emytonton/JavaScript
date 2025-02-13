function calcularpontuacao(desempenho){
    if(!Number.isInteger(desempenho.vitorias) || desempenho.vitorias < 0) {
        throw new Error("O número de vitórias deve ser um número inteiro positivo");
    }

    if (!Number.isInteger(desempenho.empates) || desempenho.empates < 0) {
        throw new Error("O numero de empates deve ser um numero posivos");
    }


    if (!Number.isInteger(desempenho.derrotas) || desempenho.derrotas < 0) {
        throw new Error("O numero de derrotas deve ser um numero inteiro positivo");
    }

    const pontuacaoTotal = (desempenho.vitorias * 3 ) + (desempenho.empates);
    return pontuacaoTotal;






}




const desempenhoTime = {time:"São Paulo", vitorias: 6, empates: 3, derrotas:2};
const pontuacaoTotal = calcularpontuacao(desempenhoTime);
console.log(`A pontuação total do time ${desempenhoTime} é: ${pontuacaoTotal}`);
