const getInitialState = () => {
    return {
        url: "/",
        loggedInEmployee: {},
    };
};

const global = {
    state: getInitialState(),
    mutations: {
        setUrl(state, path) {
            state.url = path;
        },
        setLoggedInEmployee(state, employee) {
            state.loggedInEmployee = employee;
        },
        resetGlobal(state) {
            Object.assign(state, getInitialState());
        },
    },
};

export default global;
