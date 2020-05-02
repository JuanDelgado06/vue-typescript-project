<template>
    <div>
        <h1>Crear Evento {{ user.name }} </h1>
        <p v-for="(category, index) in categories" :key="index">{{category}}</p>
        <h5>{{owner.name}}</h5>
        <h2>{{username}}</h2>
        <h3>Cantidad de categorias {{catLength()}}</h3>
        <h3>Cantidad de tareas completadas {{activeTodosCount}}</h3>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import {mapState, mapGetters} from 'vuex'

@Component({
    computed: {
        ...mapState([ 'user', 'categories', 'owner' ]),
        ...mapGetters(['activeTodosCount'])
    }
})
export default class EventCreate extends Vue {
    user! : any;
    public get username(): string {
        return this.user.name
    }
    public catLength() : number {
        return this.$store.getters.catLength
    }
    // public compledTodos(): number {
    //     return this.$store.getters.activeTodosCount
    // }
}
</script>