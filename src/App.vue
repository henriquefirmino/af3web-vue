<template>
  <v-app id="inspire">

    <v-app-bar app clipped-left>
      <v-row justify="center">
        <v-btn v-for="link in links" :key="link.title" :to="link.to" text>
          {{ link.title }}
        </v-btn>
      </v-row></v-app-bar
    >

    <v-navigation-drawer app clipped left>
      <v-list>
        <v-list-item v-for="link in links" :key="link.title" :to="link.to" link>
          <v-list-item-content>
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer app padless>
      <v-col class="text-center" cols="12">
        <h4>v-footer</h4>
      </v-col>
    </v-footer>
    <v-bottom-navigation app v-model="value"
    :background-color="black"
    shift >

      <v-btn>
        <v-icon>mdi-skip-previous</v-icon>
      </v-btn>

       <v-btn>
        <v-icon>mdi-play-pause</v-icon>
      </v-btn>

      <v-btn>
        <v-icon>mdi-skip-next</v-icon>
      </v-btn>

      <v-btn>
        <v-icon>mdi-playlist-music</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    links: [
      { title: "Home", icon: 'mdi-view-dashboard', to: "/" },
      { title: "Playlists", to: "/playlists" },
      { title: "Sobre", to: "/sobre" },
      { title: "Trocar Conta", to: "/contas" },
    ],
  }),
};
</script>
