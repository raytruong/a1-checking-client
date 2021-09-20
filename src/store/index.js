import Vue from "vue";
import Vuex from "vuex";
import global from "./modules/global";
import login from "./modules/login";
import checkout from "./modules/checkout";
import manage from "./modules/manage";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        global,
        login,
        checkout,
        manage,
    },
});

export default store;
