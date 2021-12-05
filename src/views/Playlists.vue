<template>
  <v-app>
    <v-form ref="form" @submit.prevent="submit">
      <v-container fluid>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="form.playlist"
              :rules="rules.name"
              label="Nome da Playlist"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="form.artista"
              :rules="rules.name"
              label="Artista"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="10" sm="4">
          </v-col>
          <v-col cols="10" sm="4">
            <v-autocomplete
              v-model="form.genre"
              clearable
              :rules="rules.genre"
              :items="genre"
              label="Gênero"
              required
            ></v-autocomplete>
          </v-col>
        </v-row>
      </v-container>
      <v-card-actions>
        <v-btn text @click="resetForm"> Cancelar </v-btn>
        <v-spacer></v-spacer>
        <v-btn :disabled="!formIsValid" text color="primary" type="submit">
          Adicionar
        </v-btn>
      </v-card-actions>
      <v-spacer> </v-spacer>
    </v-form>
    <v-container>
      <h3>Número de Playlists criadas: {{countplaylist}}</h3>

    <v-container>
      <v-data-table
        :headers="headers"
        :items="playlists"
        :items-per-page="5"
        class="elevation-1"
      ></v-data-table>
    </v-container>
  </v-app>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  data() {
    const defaultForm = Object.freeze({
      playlist: "",
      artista: "",
      genre: "",
    });

    return {
      headers: [
        { text: "Playlist", value: "playlist" },
        { text: "Artista", value: "artista" },
        { text: "Gênero", value: "genero" }
      ],
      //playlists: this.$store.state.playlists,
      form: Object.assign({}, defaultForm),
      rules: {
        playlist: [(val) => (val || "").length > 0 || "Campo Necessário"],
        artista: [(val) => (val || "").length > 0 || "Campo Necessário"],
        genre: [(val) => (val || "").length > 0 || "Campo Necessário"],
      },
      conditions: false,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.",
      snackbar: false,
      genre: ["Rock", "Pop", "Indie", "Rap", "Funk"],
      defaultForm,
    };
  },

  computed: {
    ...mapGetters(["coutplaylist"]),

    formIsValid() {
      return (
        this.form.playlist &&
        this.form.artista &&
        this.form.genero
      );
    },
    playlists() {
      return this.$store.state.playlists;
    }
  },

  methods: {
    resetForm() {
      this.form = Object.assign({}, this.defaultForm);
      this.$refs.form.reset();
    },
    submit() {
      //this.$store.commit("addplaylists", {
        this.$store.dispatch("submitPlaylists", {
        playlist: this.form.playlist,
        artista: this.form.artista,
        genre: this.form.genre,
      });
      this.snackbar = true;
      this.resetForm();
    },
  },
};
</script>
