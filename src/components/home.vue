<template>
  <q-page class="q-pa-md">
    <div class="q-gutter-md">
      <!-- Título de la página -->
      <div class="text-h3 q-mb-md">
        Todo lo que necesitas saber sobre Pokémon
      </div>

      <!-- Introducción a Pokémon con imagen -->
      <div class="q-mb-md">
        <q-img src="/intro.jpg" class="max-width: 100%;" />
      </div>

      <!-- Qué son los Pokémon con imagen -->
      <div class="q-mb-md">
        <div class="textos">
          <div class="text-h5 q-mb-sm">¿Qué son los Pokémon?</div>
          <p>
            Los Pokémon son monstruos o criaturas que varían en formas y
            características. Estos suelen encontrarse habitando salvajemente,
            pero algunos terminaron decidiendo convivir con los humanos. En la
            actualidad, existen más de 700 Pokémon, distribuidos a largo de
            distintas regiones que existen dentro de este mundo.
          </p>
          <p>
            En el mundo de Pokémon, existen varios tipos de criaturas, cada una
            con sus propias características y habilidades distintivas. Estos
            tipos incluyen Normal, Fuego, Agua, Planta, Eléctrico, Hielo, Lucha,
            Veneno, Tierra, Volador, Psíquico, Bicho, Roca, Fantasma, Dragón,
            Siniestro, Acero y Hada. Cada tipo tiene fortalezas y debilidades
            únicas, lo que añade complejidad estratégica a las batallas Pokémon
            y permite a los entrenadores crear equipos equilibrados y efectivos.
          </p>
          <p>
            Cada Pokémon por regla general cuenta con uno o más tipos
            elementales, los cuales pueden darles ventajas o inconvenientes a la
            hora de combatir. Por ejemplo, un Pokémon de tipo Acero tendrá
            ventaja sobre uno de tipo Hada, pero también se encontrará en
            desventaja en contra de un tipo Fuego. Esto permite la creación de
            estrategias, con intención de sacar el máximo provecho de los
            Pokémon que conformen tu equipo.
          </p>
        </div>
      </div>

      <!-- Historia con imagen -->
      <div class="q-mb-md">
        <q-img src="/tipos.jpg" class="max-width: 100%;" />
        <div class="textos">
          <div class="text-h5 q-mb-sm">Historia</div>
          <p>
            Según las palabras de Satochi Tajiri, el creador de Pokémon, su
            pasatiempo de pequeño era la recolección de insectos y que
            posteriormente sintió una gran atracción por los Videojuegos.
            Durante su juventud terminó conociendo a Ken Sugimori, y juntos
            terminarían creando una revista llamada Game Freak. Finalmente
            decidieron convertir Game Freak en una compañía programadora de
            software y en conjunto se encargaron de desarrollar su primer
            videojuego. Aproximadamente en 1990, Satochi y Ken comenzó la
            creación de su primer juego, siendo este la base para lo que
            posteriormente sería Pokémon. Estaría destinado para la Game Boy y
            tendría un formado RPG, donde los jugadores deberían recolectar
            monstruos y hacerlos evolucionar para que fueran más fuertes. Este
            proyecto terminó siendo conocido como Pocket Monsters, saliendo al
            mercado alrededor del año 1996
          </p>
        </div>
      </div>

      <!-- Datos curiosos de Pokémon con imagen -->
      <div class="q-mb-md">
        <q-img src="/images.jpg" class="max-width: 100%;" />
        <div class="textos">
          <div class="text-h5 q-mb-sm">Datos curiosos de Pokémon</div>
          <p>
            ¡Ahora que ya conocemos lo principal sobre la franquicia, vamos con
            un par de datos curiosos para aprender más acerca de Pokémon!
          </p>
          <ul>
            <li>
              Pikachu ocupó el segundo lugar de la lista “The Best People of
              1999“: Las mascota oficial de Pokémon logró colarse en la aclamada
              lista creada por la revista Time. ¡Únicamente la celebridad Ricky
              Martín consiguió colocarse por encima del pequeño ratón amarillo!
            </li>
            <li>
              Pokémon posee el apoyo y aprobación del Vaticano: El mismísimo
              Vaticano manifestó su aprobación el 21 de abril del año 2000,
              declarando que los juegos estaban llenos de imaginación y con la
              intención de inculcar la amistad.
            </li>
            <li>
              Las películas de Pokémon se estrenan en el mes de julio: Desde sus
              comienzos, todas las adaptaciones que han sido llevadas a la gran
              pantalla se han estrenado en el mes de julio como una tradición.
              La única película que no ha cumplido esto fue “Pokémon: los
              secretos de la selva“, que debido a la pandemia terminó
              estrenándose en diciembre del año 2020.
            </li>
            <li>
              Poliwhirl es el Pokémon favorito de Satochi Tajiri: Si alguna vez
              te preguntaste cual era el Pokémon preferido del creador de esta
              enorme franquicia, pues la respuesta era Poliwhirl.
            </li>
            <li>
              El Pokémon más hermoso y el más feo: Según la mismísima Pokédex,
              oficialmente el Pokémon que es considerado el más feo es Feebas.
              Siendo honestos este tipo agua incluido en la tercera generación
              no es nada agraciado a la vista. Sin embargo, el Pokémon que es
              reconocido como más hermoso es la evolución de Feebas, Milotic.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PokemonPage",
};
</script>

<style scoped>
.text-h3,
.text-h5 {
  color: #333; /* Color de texto */
  font-weight: bold; /* Negrita */
}

.q-page {
  background-color: #f2f2f2; /* Color de fondo */
}

.q-mb-md {
  margin-bottom: 20px; /* Espaciado inferior */
}

.q-mb-sm {
  margin-bottom: 10px; /* Espaciado inferior */
}

ul {
  color: #555; /* Color de texto secundario */
}

.textos {
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: 20%;
  margin-right: 20%;
  text-align: justify;
  font-size: 20px;
}
</style>


