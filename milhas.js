


function calcularTotalDeMilhas(voos) {
    const resultado = {
      nacionais:  0,
      internacionais: 0,
      invalidos: 0,
      milhas: 0
  
    };
  
    const operadorasParceiras = ['AeroLink', 'SkyWings', 'Oceanic Airways', 'StarFly'];
  
    for (const voo of voos) {
      const{distancia, tipo, operadora} = voo;
  
      if (!operadorasParceiras.includes(operadora)){
        resultado.invalidos++;
        continue;
      }
  
  
      if (tipo === 'Nacional'){
        resultado.nacionais++;
        resultado.milhas += distancia;
      } else if (tipo === 'Internacionais'){
        resultado.internacionais++;
        resultado.milhas += distancia * 2;
      }
    }
  return resultado;
  
  }
  
  const listaDeVoos = [
    { origem: 'Rio de Janeiro', destino: 'São Paulo', distancia: 400, tipo: 'Nacional', operadora: 'AeroLink' },
    { origem: 'São Paulo', destino: 'Paris', distancia: 10000, tipo: 'Internacional', operadora: 'Oceanic Airways' },
    { origem: 'Belo Horizonte', destino: 'Rio de Janeiro', distancia: 300, tipo: 'Nacional', operadora: 'AeroLink' },
    { origem: 'Miami', destino: 'Nova York', distancia: 1200, tipo: 'Nacional', operadora: 'JetStream' }, 
    { origem: 'São Paulo', destino: 'Belo Horizonte', distancia: 500, tipo: 'Nacional', operadora: 'StarFly' },
    { origem: 'Porto Alegre', destino: 'Rio de janeiro', distancia: 800, tipo: 'Nacional', operadora: 'AeroLink' },
    { origem: 'Rio de Janeiro', destino: 'Fortaleza', distancia: 2800, tipo: 'Nacional', operadora: 'StarFly' },
    { origem: 'Fortaleza', destino: 'Lisboa', distancia: 6500, tipo: 'Internacional', operadora: 'Oceanic Airways' },
    { origem: 'Belo Horizonte', destino: 'Salvador', distancia: 900, tipo: 'Nacional', operadora: 'StarFly' },
    { origem: 'Paris', destino: 'Londres', distancia: 300, tipo: 'Internacional', operadora: 'AeroLink' },
    { origem: 'São Paulo', destino: 'Lisboa', distancia: 7000, tipo: 'Internacional', operadora: 'SkyWings' },
    { origem: 'Belo Horizonte', destino: 'São Paulo', distancia: 500, tipo: 'Nacional', operadora: 'AeroLink' },
    { origem: 'Rio de Janeiro', destino: 'Recife', distancia: 2600, tipo: 'Nacional', operadora: 'Oceanic Airways' },
    { origem: 'Recife', destino: 'Madri', distancia: 5900, tipo: 'Internacional', operadora: 'SkyWings' },
    { origem: 'São Paulo', destino: 'Rio de Janeiro', distancia: 400, tipo: 'Nacional', operadora: 'StarFly' },
    
  ];
  
  
  const resultado = calcularTotalDeMilhas(listaDeVoos);
  console.log(resultado);
  


