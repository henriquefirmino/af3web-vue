<template>
    <v-row>
         <v-col class="mt-2" cols="12">
            </v-col>
            <v-card v-for="(album, index) of $store.state.album" :key="index" > 
                <v-img :src = "album.img" height="200" width="200"> </v-img>
                <v-card-title > {{album.nome}} </v-card-title>
                <v-card-subtitle> {{album.artista}} </v-card-subtitle>
            </v-card>
    </v-row>
</template> 