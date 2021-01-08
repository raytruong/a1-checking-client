import db from "@/services";
const login = {
    state: {
        employees: [],
        selectedEmployeeName: "",
        selectedEmployeeId: "",
        loggedInEmployee: "",
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
        setLoggedInUser(state, employee) {
            state.loggedInEmployee = employee;
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
