<script>
import EventCard from "@/components/Events/EventCard.vue";
import EventService from '@/services/EventService.js';
export default {
    name: "EventView",
    components: {
        EventCard,
    },
     created() {
        EventService.getvents()
        .then((response) => this.Events = response.data )
        .catch((err) => console.error(err.message))
    },
    data() {
        return {
            Events: null,
        }
    },
}
</script>

<template>
    <div Class="events">
        <h2>List Events</h2>
        <EventCard 
            v-for="event in Events" 
            :key="event.id" 
            :event="event" 
        />
    </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
    
</style>