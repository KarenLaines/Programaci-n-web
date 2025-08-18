import './style.css'


const app = document.querySelector("#app");

async function getPokemons() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=35");
  const data = await response.json();

  const promises = data.results.map(async (poke) => {
    const res = await fetch(poke.url);
    return await res.json();
  });

  const pokemons = await Promise.all(promises);

  app.innerHTML = pokemons.map(pokemon => `
    <div class="card">
      <h2>${pokemon.name}</h2>
      <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
      <p>Peso: ${pokemon.weight}</p>
    </div>
  `).join("");
}

getPokemons();



