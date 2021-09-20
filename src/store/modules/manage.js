import db from "@/services";
const manage = {
    namespaced: true,
    state: {
        sales: [],
    },
    getters: {
        sales(state) {
            return state.sales;
        },
    },
    mutations: {
        setAllSales(state, sales) {
            state.sales = sales;
        },
    },
    actions: {
        async getAllSales({ commit }) {
            const data = await db.getAllSales();
            commit("setAllSales", data);
        },
        // async editSale({ commit }) {
        //     // Post a change to a sale
        // },
    },
};

export default manage;
