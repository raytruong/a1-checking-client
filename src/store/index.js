import Vue from "vue";
import Vuex from "vuex";
import global from "./global";
import login from "./login";
import checkout from "./checkout";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        global,
        login,
        checkout,
    },
});

export default store;
