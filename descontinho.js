function calcularDesconto(compra) {

    const categoriasDesconto = {
      eletronicos: 0.10,
      vestuario: 0.20,
      alimentos: 0.15,
      livros: 0.12
    };
  
    let totalDesconto = 0;
  
  
    for (const item of compra) {
  
      if(categoriasDesconto[item.categoria]){
        const desconto = item.valor * categoriasDesconto[item.categoria];
  
        totalDesconto += desconto;
      }
    }
  
    return totalDesconto;
  
  
  
  }
  
  
  
  const compras = [
   {nome:"computador", valor: 1000, categoria: "eletronicos" },
   {nome:"camiseta", valor: 50, categoria: "vestuario"},
   {nome:"fones de ouvido", valor: 150, categoria: "eletronicos" },
   {nome:"chocolate", valor: 20, categoria: "alimentos" },
  
  ];
  
  
  
  const totalDesconto = calcularDesconto(compras);
  console.log(`Total de desconto: R$${totalDesconto.toFixed(2)}`);
  