const global = {
    state: {
        url: "/",
        loggedInEmployee: {},
    },
    mutations: {
        setUrl(state, path) {
            state.url = path;
        },
        setLoggedInEmployee(state, employee) {
            state.loggedInEmployee = employee;
        },
    },
};

export default global;
