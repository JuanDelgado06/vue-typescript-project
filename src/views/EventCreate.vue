<template>
    <div>
        <h1>Crear Evento {{ user.name }} </h1>
        <p v-for="(category, index) in user.categories" :key="index">{{category}}</p>
        <h5>{{owner.name}}</h5>
        <h2>{{username}}</h2>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import {mapState} from 'vuex'

@Component({
    computed: mapState([
        'user',
        'owner'
    ])
})
export default class EventCreate extends Vue {
    user! : any;
    public get username(): string {
        return this.user.name
    }
}
</script>