import Vue from "vue";
import Vuex from "vuex";
import { createItem, createAddon } from "@/factory";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        itemAddonDatabase: [],
        cart: [],
    },
    getters: {
        items: function(state) {
            return state.itemAddonDatabase.filter(item => {
                item.category != "Addons";
            });
        },
        addons: function(state) {
            return state.itemAddonDatabase.filter(item => {
                item.category === "Addons";
            });
        },
    },
    mutations: {
        increment(state) {
            state.count++;
        },
    },
    actions: {},
});

export default store;
