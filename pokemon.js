function criarPokemon(nome,tipo,nivel,hp){
    const pokemon = {};


pokemon.nome = nome;
pokemon.tipo = tipo;
pokemon.nivel = nivel;
pokemon.hp = hp;

return pokemon;

}


const meuPokemon = criarPokemon("Mimikyu", "Fantasma", 25, 80 );

console.log(meuPokemon);


