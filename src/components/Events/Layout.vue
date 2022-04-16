<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <nav>
           <router-link :to="{ name: 'EventDetail', params: {id} }">
        Detail |
      </router-link>
      <router-link :to="{ name: 'EventRegister', params: {id} }">
        Register |
      </router-link>
      <router-link :to="{ name: 'EventEdit', params: {id} }">
        Edit 
      </router-link>
    </nav>
    
    <router-view :event="event"></router-view>
  </div>
  
</template>

<script>
import EventService from "@/services/EventService.js";

export default {
  props: ["id"],
  created() {
    EventService.getEvent(this.id)
      .then((response) => this.event = response.data )
      .catch((err) => console.error(err));
  },
  data() {
    return {
      event: null,
    };
  },
};
</script>

<style>

</style>
