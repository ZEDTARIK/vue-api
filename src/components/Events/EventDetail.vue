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

<template>
  <div v-if="event" Class="event-card">
    <span> @ {{ event.time }} on {{ event.date }} </span>
    <h4>{{ event.title }}</h4>
    <span>
      {{ event.description }}
    </span>
  </div>
  <div v-else class="">
      loading ....
  </div>
</template>

<style>

</style>
