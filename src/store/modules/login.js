import db from "@/services";
const login = {
    namespaced: true,
    state: {
        employees: [],
    },
    getters: {
        employees(state) {
            return state.employees;
        },
    },
    mutations: {
        setEmployees(state, employees) {
            state.employees = employees;
        },
    },
    actions: {
        async getEmployees({ commit }) {
            const data = await db.getAllEmployees();
            commit("setEmployees", data);
        },
    },
};

export default login;
