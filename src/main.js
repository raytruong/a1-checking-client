import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import store from "@/store";
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
    faMoneyBillAlt,
    faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

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
    faMoneyBillAlt,
    faCreditCard,
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
    vuetify,
    store,
    render: h => h(App),
}).$mount("#app");
