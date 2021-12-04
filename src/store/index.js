import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        album: [
            {
                nome: 'Dirt',
                artista: 'Alice in Chains',
                img: 'https://upload.wikimedia.org/wikipedia/pt/b/ba/Dirt.jpg',
            },
            {
                nome: 'Happier Than Ever',
                artista: 'Billie Eilish',
                img: 'https://upload.wikimedia.org/wikipedia/pt/e/e8/Happier_Than_Ever_%28álbum%29_-_Billie_Eilish.png',
            },
            {
              nome: 'Cry',
              artista: 'Cigarettes After Sex',
              img: 'https://upload.wikimedia.org/wikipedia/en/4/4c/Cigarettes_After_Sex_-_Cry.png',
          },
          {
            nome: 'Ten',
            artista: 'Pearl Jam',
            img: 'https://upload.wikimedia.org/wikipedia/pt/d/da/Pearl_Jam_-_Ten.jpg',
        }
        ],
        
            playlists: [
                { playlist: "Dirt", artista: "Alice in Chains", genero: "Rock" },
                { playlist: "Happier Than Ever", artista: "Billie Eilish", genero: "Pop" },
                { playlist: "Cry", artista: "Cigarettes After Sex", genero: "Indie" },
                { playlist: "Ten", artista: "Pearl Jam", genero: "Rock" }
            ],
        
        mutations: {
            addplaylists(state, playlists) {
                state.playlists.push({
                    playlist: playlists.playlist,
                    artista: playlists.artista,
                    genero: playlists.genero
                })
            }
        },
        actions: {},
        modules: {}
    }
})