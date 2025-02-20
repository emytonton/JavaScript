function somaNumerosPares(arr) {
    let soma = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) { 
        soma += arr[i]; 
      }
    }
    return soma;
  }
  
  // Testes
  console.log(somaNumerosPares([1, 2, 3, 4, 5, 6])); 
  console.log(somaNumerosPares([1, 3, 5, 7])); 
  console.log(somaNumerosPares([])); 
  