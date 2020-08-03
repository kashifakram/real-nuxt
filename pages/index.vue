<template>
    <div>
        <h1>Events List</h1>
        <event-card
            v-for="(event, i) in events"
            :key="i"
            :event="event"
            :data-index="i"
        />
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    async fetch({ store, error }) {
        try {
            await store.dispatch('events/fetchEvents');
        } catch (e) {
            error({
                statusCode: 503,
                message: 'Unable to fetch events. ' + e,
            });
        }
    },
    computed: mapState({ events: (state) => state.events.events }),
    head() {
        return {
            title: 'Events List',
        };
    },
};
</script>
