import { mount } from "@vue/test-utils";
import EmployeeCard from "@/pages/LoginPage/EmployeeCard.vue";
import PinCodeDialog from "@/pages/LoginPage/PinCodeDialog.vue";
import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify);

describe("EmployeeCard.vue", () => {
    it("should have a name", () => {
        const name = "Rust Colhe";
        const wrapper = mount(EmployeeCard, {
            propsData: {
                employeeName: name,
            },
        });
        expect(wrapper.text()).toContain(name);
    });
});

describe("PinCodeDialog.vue", () => {
    it("should contain appropriate number of asterisks depending on keys entered", () => {
        const keysEntered = 3;
        const wrapper = mount(PinCodeDialog, {
            propsData: {
                keysEntered: keysEntered,
            },
        });
        const count = (wrapper.html().match(/\*/g) || []).length;
        expect(count).toEqual(keysEntered);
    });
});
