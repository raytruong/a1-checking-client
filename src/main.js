import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faLock,
    faCheck,
    faExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import PouchDB from "pouchdb-browser";

const username = process.env.VUE_APP_DB_USER;
const password = process.env.VUE_APP_DB_PASS;
const name = process.env.VUE_APP_DB_NAME;

const remoteUrl = `https://${username}:${password}@${username}.cloudantnosqldb.appdomain.cloud/${name}`;
let remote = new PouchDB(remoteUrl);
let local = new PouchDB("local");

local
    .sync(remote, {
        live: true,
        retry: false,
    })
    .on("error", function() {
        console.log(remoteUrl);
    });

Vue.prototype.$db = local;

Vue.config.productionTip = false;

library.add(faLock, faCheck, faExclamation);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
    vuetify,
    render: h => h(App),
}).$mount("#app");
