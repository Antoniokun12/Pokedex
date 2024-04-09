<template>
  <div class="container">
    <div class="con1">
      <h2>Adivina el Pokémon</h2>
      <input
        type="text"
        placeholder="Ingrese nombre del Pokémon"
        v-model="guess"
        class="input"
      />
      <button @click="checkGuess()" class="boton">Adivinar</button>
      <button @click="changePokemon()" class="boton">Cambiar Pokémon</button>
    </div>
    <div class="pokemon-card" v-if="carta">
      <div class="pokemon-header">
        <h1>{{ pokemonHeaderText }}</h1>
      </div>
      <div class="pokemon-body">
        <div class="pokemon-image" :class="{ opaque: !guessed }">
          <img
            :src="pokemon.sprites?.other['official-artwork'].front_default"
            alt="Imagen del Pokémon"
            class="pokemon-img"
          />
          <div class="estad">
            <div class="detail">
              <h2>Estadísticas:</h2>
              <ul>
                <li v-for="stat in pokemon.stats" :key="stat.name">
                  {{ stat.name }}: {{ stat.value }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="pokemon-details">
          <div class="detail">
            <h2>Altura:</h2>
            <p>{{ pokemon.height / 10 }} m</p>
          </div>
          <div class="detail">
            <h2>Peso:</h2>
            <p>{{ pokemon.weight / 10 }} kg</p>
          </div>
          <div class="detail">
            <h2>Tipos:</h2>
            <ul>
              <li v-for="type in pokemon.types" :key="type">{{ type }}</li>
            </ul>
          </div>
          <div class="detail">
            <h2>Habilidades:</h2>
            <ul>
              <li v-for="ability in pokemon.abilities" :key="ability">
                {{ ability }}
              </li>
            </ul>
          </div>
          <div class="contimg">
            <img src="/pokemon.png" alt="simbolo" class="imgsim" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import axios from "axios";
import Swal from "sweetalert2";

let pokemon = ref({});
let guess = ref("");
let carta = ref(false);
let guessed = ref(false);

async function fetchPokemon() {
  try {
    let response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/" + Math.floor(Math.random() * 898) // Obtener un Pokémon aleatorio
    );
    let pokemonData = response.data;
    let abilities = pokemonData.abilities.map(
      (ability) => ability.ability.name
    );
    let stats = pokemonData.stats.map((stat) => ({
      name: stat.stat.name,
      value: stat.base_stat,
    }));
    let types = pokemonData.types.map((type) => type.type.name);
    pokemon.value = {
      name: pokemonData.name,
      weight: pokemonData.weight,
      height: pokemonData.height,
      sprites: pokemonData.sprites,
      abilities: abilities,
      stats: stats,
      types: types,
    };
    guessed.value = false;
    carta.value = true;
    console.log(pokemonData.name);
  } catch (error) {
    console.log(error);
  }
}

async function checkGuess() {
  if (guess.value.toLowerCase() === pokemon.value.name.toLowerCase()) {
    guessed.value = true;
    guess.value = "";
    Swal.fire({
      icon: "success",
      title: "¡Correcto! El Pokémon es " + pokemon.value.name,
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops... Respuesta incorrecta !sigue intentando!",
    });
  }
}

const pokemonHeaderText = computed(() => {
  if (guessed.value) {
    return `${pokemon.value.name}`;
  } else {
    return "¿Quién es este Pokémon?";
  }
});

function changePokemon() {
  fetchPokemon();
  guess.value = "";
}

fetchPokemon();
</script>

<style scoped>
body {
  margin: 0%;
  padding: 0%;
  background-color: antiquewhite;
}

h1{
  font-size: 40px;
  margin: 0; 
}

h2{
  font-size: 30px;
}

.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  height: 100%;
}

.opaque {
  filter: brightness(0) invert(1);
}

.con1 {
  width: 250px;
  height: auto;
  font-family: "calibri";
  text-align: center;
  margin-left: 170px;
}

.input {
  width: 200px;
}

.boton {
  cursor: pointer;
  margin-top: 10px;
  width: 140px;
  height: 30px;
  border-radius: 10px;
  border-color: #f4f4f4;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  color: rgb(11, 12, 12);
  background-color: rgb(62, 237, 237);
}

.pokemon-card {
  width: 500px;
  border: 2px solid #000;
  border-radius: 10px;
  overflow: hidden;
  background-color: #0c4642;
  color: white;
  height: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
}

.pokemon-header {
  background-color: #444343;
  padding: 10px;
  text-align: center;
}

.pokemon-body {
  display: flex;
}

.pokemon-image {
  flex: 1;
  position: relative;
}

.pokemon-image img {
  width: 270px;
  height: auto;
}

.pokemon-details {
  flex: 2;
  padding: 10px;
}

.detail {
  margin-bottom: 10px;
}

.detail h2 {
  margin-bottom: 5px;
}

.detail ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.detail ul li {
  margin-bottom: 5px;
}

.estad {
  margin-left: 60px;
  margin-bottom: 20px;
}

.imgsim {
  width: 200px;
  height: 120px;
  margin-bottom: auto;
}
</style>
