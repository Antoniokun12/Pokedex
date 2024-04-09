<template>
  <div class="container">
    <div class="con1">
      <h2>Busca el pokemon</h2>
      <input
        type="text"
        placeholder="Ingrese nombre/ID del Pokémon"
        v-model="name"
        class="input"
      />
      <button @click="traer()" class="boton">Traer Carta</button>
    </div>
    <div class="pokemon-card" v-if="carta">
      <div class="pokemon-header">
        <h1>{{ pokemon.name }}</h1>
      </div>
      <div class="pokemon-body">
        <div class="pokemon-image">
          <img
            :src="pokemon.sprites?.other['official-artwork'].front_default"
            alt="Imagen del Pokémon"
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
import { ref } from "vue";
import axios from "axios";

let pokemon = ref([]);
let name = ref("");
let altura = ref("");
const carta = ref(false)

async function traer() {
  carta.value = true
  try {
    let response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/" + name.value
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

    console.log(pokemonData);
  } catch (error) {
    console.log(error);
  }
}
</script>

<style scoped>
body{
  margin: 0%;
  padding: 0%;
  background-color: antiquewhite;
}

h1{
  font-size: 50px;
  margin: 0;
}

h2{
  font-size: 25px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  
}

.con1 {
  width: 250px;
  height: auto;
  font-family: "calibri";
  text-align: center;
}

.input{
  width: 200px;
}

.boton{
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
  font-size: 25px;
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
  margin-top: 50px;
  margin-bottom: auto;
}
</style>