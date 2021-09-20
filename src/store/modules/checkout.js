import { Item, Addon } from "@/objects";
import database from "./items.json";
import db from "@/services";
import currency from "currency.js";

const getInitialState = () => {
    return {
        db: database,
        cart: [],
        itemDialog: false,
        isEdit: false,
        activeItem: {},
        confirmDialog: false,
        paymentType: "",
    };
};

const checkout = {
    namespaced: true,
    state: getInitialState(),
    getters: {
        items: function(state) {
            return Object.values(state.db)
                .map(item => ({
                    ...item,
                    price: currency(item.price, { fromCents: true }),
                }))
                .filter(item => item.category != "Addons");
        },
        addons: function(state) {
            return Object.values(state.db)
                .map(addon => ({
                    ...addon,
                    price: currency(addon.price, { fromCents: true }),
                }))
                .filter(item => item.category === "Addons");
        },
        cart: function(state) {
            state.cart.forEach(item => {
                item.total = item.price.add(
                    item.addons.reduce((addonTotals, addon) => {
                        return addon
                            ? addonTotals.add(
                                  addon.price.multiply(addon.quantity),
                              )
                            : currency(0);
                    }, currency(0)),
                );
            });
            return state.cart;
        },
        cartTotal: function(state) {
            return state.cart.reduce((cartTotal, item) => {
                return cartTotal.add(
                    item.price.add(
                        item.addons.reduce((addonTotals, addon) => {
                            return addon
                                ? addonTotals.add(
                                      addon.price.multiply(addon.quantity),
                                  )
                                : currency(0);
                        }, currency(0)),
                    ),
                );
            }, currency(0));
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
        removeCartItem(state, index) {
            state.cart.splice(index, 1);
        },
        increaseCartQuantity(state, index) {
            state.cart[index].quantity += 1;
        },
        decreaseCartQuantity(state, index) {
            state.cart[index].quantity -=
                state.cart[index].quantity > 1 ? 1 : 0;
        },
        closeItemDialog(state) {
            state.activeItem = {};
            state.itemDialog = false;
            state.isEdit = false;
        },
        finishItemEditing(state, { addons }) {
            const newAddons = [];
            addons.forEach(addon => {
                const newAddon = new Addon(state.db, addon.tag, addon.quantity);
                newAddon.setPrice(addon.price);
                newAddons.push(newAddon);
            });
            state.activeItem.setAddons(newAddons);
            if (!state.isEdit) state.cart.push(state.activeItem);
            state.isEdit = false;
            state.activeItem = {};
            state.itemDialog = false;
        },
        setPaymentType(state, type) {
            state.paymentType = type;
        },
        openConfirmDialog(state) {
            state.confirmDialog = true;
        },
        closeConfirmDialog(state) {
            state.confirmDialog = false;
        },
        resetStore(state) {
            Object.assign(state, getInitialState());
        },
    },
    actions: {
        async confirmSale({ state, commit, rootState }) {
            const sale = {
                _id: `sale:${Date.now()}`,
                employee: rootState.global.loggedInEmployee.name,
                payment: state.paymentType,
                items: [...state.cart],
            };
            // Create transaction item, clean tags and categories, remove functions
            await db.postSale(JSON.parse(JSON.stringify(sale)));
            commit("checkout/resetStore", null, { root: true });
            commit("global/resetGlobal", null, { root: true });
        },
    },
};

export default checkout;
