function somartresnumeros() {
    const num1 = parseInt(prompt("Digite o primeiro número: "));
    const num2 = parseInt(prompt("Digite o número dois:"));
    const num3 = parseInt(prompt("Digite o número três:"));

    const soma = num1 + num2 + num3;

    console.log(soma);
    alert(`A soma dos tres números é: &{soma}`);
}

somartresnumeros ();
