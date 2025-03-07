// Select DOM elements
const searchInput = document.getElementById("search-input");
const searchForm = document.getElementById("search-form");
const outputSection = document.getElementById("output-section");
const pokemonName = document.getElementById("pokemon-name");
const pokemonID = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const spriteContainer = document.getElementById("sprite-container");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

// Fetch Pokémon data
const getPokemon = async () => {
  const pokemonNameOrId = searchInput.value.toLowerCase();
  
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`);
    const data = await response.json();

    // Display the fetched data
    pokemonName.textContent = `Name: ${data.name.toUpperCase()}`;
    pokemonID.textContent = `ID: ${data.id}`;
    weight.textContent = `Weight: ${data.weight / 10} kg`;
    height.textContent = `Height: ${data.height / 10} m`;
    spriteContainer.innerHTML = `<img src="${data.sprites.front_default}" alt="${data.name} sprite">`;

    // Set stats
    hp.textContent = data.stats[0].base_stat;
    attack.textContent = data.stats[1].base_stat;
    defense.textContent = data.stats[2].base_stat;
    specialAttack.textContent = data.stats[3].base_stat;
    specialDefense.textContent = data.stats[4].base_stat;
    speed.textContent = data.stats[5].base_stat;

    // Show the output section
    outputSection.style.display = "block";
  } catch (err) {
    alert("Pokémon not found. Please try again.");
    resetDisplay();
  }
};

// Reset the display when there's an error or no data
const resetDisplay = () => {
  pokemonName.textContent = '';
  pokemonID.textContent = '';
  weight.textContent = '';
  height.textContent = '';
  spriteContainer.innerHTML = '';
  hp.textContent = '';
  attack.textContent = '';
  defense.textContent = '';
  specialAttack.textContent = '';
  specialDefense.textContent = '';
  speed.textContent = '';
};

// Event listener for the search form submission
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  getPokemon();
});
