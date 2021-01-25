<template>
    <v-container>
        <v-row>
            <EmployeeCard
                v-for="employee in employees"
                :key="employee._id"
                @openDialog="openDialog"
                :employeeName="employee.name"
                :employeeId="employee._id"
            >
            </EmployeeCard>
            <v-dialog
                v-model="showPinCodeDialog"
                @keydown="handleInput"
                @update:return-value="closeDialog"
                max-width="300"
            >
                <PinCodeDialog
                    @cancelButtonClicked="closeDialog"
                    :employeeName="selectedEmployeeName"
                    :keysEntered="keysEntered"
                    :loginAlertEnum="loginAlertEnum"
                >
                </PinCodeDialog>
            </v-dialog>
        </v-row>
    </v-container>
</template>

<script>
import EmployeeCard from "./EmployeeCard";
import PinCodeDialog from "./PinCodeDialog";

export default {
    name: "LoginPage",

    components: {
        EmployeeCard,
        PinCodeDialog,
    },

    created() {
        this.$store.dispatch("getEmployees");
    },

    data: function() {
        return {
            showPinCodeDialog: false,
            selectedEmployeeName: "",
            selectedEmployeeId: "",
            pin: [],
            keysEntered: 0,
            loginAlertEnum: 0,
        };
    },

    computed: {
        employees: function() {
            return this.$store.state.login.employees;
        },
    },

    methods: {
        handleInput(keydown) {
            if (keydown.key === "Backspace" && this.keysEntered > 0) {
                this.pin.pop();
                this.keysEntered -= 1;
                this.loginAlertEnum = 0;
            } else if (
                /^\d+$/.test(keydown.key) && // is number
                this.keysEntered < 4
            ) {
                this.pin.push(keydown.key);
                this.keysEntered += 1;

                if (this.keysEntered == 4) {
                    const data = this.$store.state.login.employees.filter(
                        employee => employee._id === this.selectedEmployeeId,
                    );
                    if (data && this.pin.join("") === data[0].pin) {
                        this.loginAlertEnum = 1;
                        this.$store.commit("global/setUrl", "/checkout");
                        this.$store.commit(
                            "global/setLoggedInEmployee",
                            data[0],
                        );
                    } else {
                        this.loginAlertEnum = 2;
                        this.keysEntered = 0;
                        this.pin = [];
                    }
                }
            }
        },
        openDialog(employeeName, employeeId) {
            this.showPinCodeDialog = true;
            this.selectedEmployeeName = employeeName;
            this.selectedEmployeeId = employeeId;
        },
        closeDialog() {
            this.showPinCodeDialog = false;
            this.pin = [];
            this.keysEntered = 0;
            this.loginAlertEnum = 0;
        },
    },
};
</script>
