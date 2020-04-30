<template>
  <div class="home">
    <h1>Lista de Eventos</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.ts'

export default {
  components: {
    EventCard
  },
  data() {
    return {
      events: []
    }
  },
  created() {
    EventService.getEvents()
      .this(res => {
        this.events = res.data
      }).catch(e => console.log(e)) 
  },
}
</script>
