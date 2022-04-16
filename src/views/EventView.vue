<script>
import EventCard from "@/components/Events/EventCard.vue";
import EventService from "@/services/EventService.js";
import { watchEffect } from "vue";

export default {
  name: "EventView",
  props: ["page"],
  components: {
    EventCard,
  },
  created() {
    watchEffect(() => {
      this.Events = null;
      EventService.getvents(1, this.page)
        .then((response) => {
            this.Events = response.data;
            this.totalEvents = response.headers['x-total-count']
        })
        .catch((err) => console.error(err.message));
    });
  },
  data() {
    return {
      Events: null,
      totalEvents: 0,
    };
  },
  computed: {
      hasNextPage() {
          var totalPages = Math.ceil(this.totalEvents / 2);
          return  this.page < totalPages;
      }
  },
};
</script>

<template>
  <div Class="events">
    <h2>List Events</h2>
    <EventCard v-for="event in Events" :key="event.id" :event="event" />
  </div>

  <div class="pagination">
     <router-link
     class="page-prev"
    :to="{ name: 'Events', query: { page: page - 1 } }"
    rel="prev"
    v-if="page != 1"
    > &#60; Previous </router-link>

  <router-link 
    class="page-next"
    :to="{ name: 'Events', query: { page: page + 1 } }" 
    rel="next"
    v-if="hasNextPage"
    >Next &#62;</router-link>

  </div>

</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
    display: flex;
    width: 943px;
}
.pagination a {
    flex: 1;
    text-decoration: none;
    color: #2c3e50;
}
.page-prev {
    text-align: left;
    width: 943px;
}

.page-next {
    text-align: right;
}

</style>
