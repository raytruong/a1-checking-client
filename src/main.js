import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faLock,
    faCheck,
    faExclamation,
    faPen,
    faPlusSquare,
    faMinusSquare,
    faPlus,
    faTrashAlt,
    faMoneyBill,
    faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import db from "@/services";

Vue.prototype.$db = db;

Vue.config.productionTip = false;

library.add(
    faLock,
    faCheck,
    faExclamation,
    faPen,
    faPlusSquare,
    faMinusSquare,
    faPlus,
    faTrashAlt,
    faMoneyBill,
    faCreditCard,
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
    vuetify,
    render: h => h(App),
}).$mount("#app");
