<template>
  <q-layout view="hHh lpR fFf">
    <q-header reveal elevated class="bg-red-8 text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLf1_V-8iuZFpQWJFsgJ39mmAFpK-jPZtC9w&s" />
          </q-avatar>
          Pokédex
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/" label="¿Que son?" />
        <q-route-tab to="/buscar" label="buscar cartas" />
        <q-route-tab to="/jugar" label="jugar" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>

    <q-footer reveal elevated class="bg-grey-8 text-white">
      <q-toolbar class="footer">
        <q-toolbar-title class="text-right">© 2024 Pokémon Company. Todos los derechos reservados.</q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
</script>

<style>
.footer {
  display: flex;
  justify-content: flex-end;
}

.header{
  background-color: rgb(129, 100, 100);
}
</style>
