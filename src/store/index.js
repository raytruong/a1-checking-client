import Vue from "vue";
import Vuex from "vuex";
import { Item, Addon } from "@/objects";
import database from "./items.json";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        db: database,
        cart: [],
        itemDialog: false,
        isEdit: false,
        dialogItem: {},
        activeItem: {},
        confirmDialog: false,
    },
    getters: {
        items: function(state) {
            return Object.values(state.db).filter(
                item => item.category != "Addons",
            );
        },
        addons: function(state) {
            return Object.values(state.db).filter(
                item => item.category === "Addons",
            );
        },
        cart: function(state) {
            return state.cart;
        },
        itemDialog: function(state) {
            return state.itemDialog;
        },
        confirmDialog: function(state) {
            return state.confirmDialog;
        },
        activeItem: function(state) {
            return state.activeItem;
        },
        isEdit: function(state) {
            return state.isEdit;
        },
    },
    mutations: {
        newItem(state, tag) {
            state.activeItem = new Item(state.db, tag);
            state.itemDialog = true;
            state.isEdit = false;
        },
        editCartItem(state, index) {
            state.activeItem = state.cart[index];
            state.itemDialog = true;
            state.isEdit = true;
        },
        closeItemDialog(state) {
            state.activeItem = {};
            state.itemDialog = false;
            state.isEdit = false;
        },
        finishItemEditing(state, addons) {
            const newAddons = [];
            addons.forEach(addon => {
                newAddons.push(new Addon(state.db, addon.tag, addon.quantity));
            });
            state.activeItem.setAddons(newAddons);
            if (!state.isEdit) {
                state.cart.push(state.activeItem);
            } else {
                state.isEdit = false;
            }
            state.activeItem = {};
            state.itemDialog = false;
        },
    },
    actions: {},
});

export default store;
