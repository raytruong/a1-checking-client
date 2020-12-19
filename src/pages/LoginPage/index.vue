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

    async created() {
        this.employees = await this.$api.getAllEmployees();
    },

    data: function() {
        return {
            employees: [],
            showPinCodeDialog: false,
            selectedEmployeeName: "",
            selectedEmployeeId: "",
            pin: [],
            keysEntered: 0,
            loginAlertEnum: 0,
        };
    },

    methods: {
        async handleInput(keydown) {
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

                if (this.pin.length == 4) {
                    let data = await this.$api.getEmployee(
                        this.selectedEmployeeId,
                    );
                    if (this.pin.join("") === data.pin) {
                        this.loginAlertEnum = 1;
                    } else {
                        this.loginAlertEnum = 2;
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
