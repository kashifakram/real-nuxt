import EventService from '@/services/EventService';

export const state = () => ({
    events: [],
});

export const mutations = {
    SET_EVENTS_DATA(state, events) {
        state.events = events;
    },
};

export const actions = {
    fetchEvents({ commit }) {
        return EventService.getEvents().then((r) => {
            commit('SET_EVENTS_DATA', r.data);
        });
    },
};
