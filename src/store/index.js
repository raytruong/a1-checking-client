import Vue from "vue";
import Vuex from "vuex";
import global from "./modules/global";
import login from "./modules/login";
import checkout from "./modules/checkout";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        global,
        login,
        checkout,
    },
});

export default store;
