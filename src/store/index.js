import Vue from "vue";
import Vuex from "vuex";
import login from "./login";
import checkout from "./checkout";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        login,
        checkout,
    },
});

export default store;
