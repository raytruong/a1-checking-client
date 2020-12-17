<template>
    <v-container>
        <v-row>
            <EmployeeCard
                v-for="employee in employees"
                :key="employee"
                @openDialog="openDialog"
                :employeeName="employee"
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
                    :employeeName="selectedEmployee"
                    :keysEntered="keysEntered"
                    :loginMessageEnum="loginMessageEnum"
                >
                </PinCodeDialog>
            </v-dialog>
        </v-row>
    </v-container>
</template>

<script>
import EmployeeCard from './EmployeeCard';
import PinCodeDialog from './PinCodeDialog';

export default {
    name: 'LoginPage',

    components: {
        EmployeeCard,
        PinCodeDialog
    },

    data: function() {
        return {
            employees: [
                'Raymond Truong',
                'Andy Plank',
                'Jon Huber',
                'Eric Cummings',
                'Collin Li',
                'Jay Rixie',
                'Daniel Plue'
            ],
            showPinCodeDialog: false,
            selectedEmployee: '',
            pin: [],
            keysEntered: 0,
            loginMessageEnum: 0
        };
    },

    methods: {
        handleInput(keydown) {
            if (keydown.key === 'Backspace' && this.keysEntered > 0) {
                this.pin.pop(keydown.key);
                this.keysEntered -= 1;
            } else if (
                /^\d+$/.test(keydown.key) && // is number
                this.keysEntered < 4
            ) {
                this.pin.push(keydown.key);
                this.keysEntered += 1;

                if (this.pin.length == 4) {
                    // TODO: Attempt to login
                    console.log(this.pin);
                }
            }
        },
        openDialog(name) {
            this.showPinCodeDialog = true;
            this.selectedEmployee = name;
        },
        closeDialog() {
            this.showPinCodeDialog = false;
            this.pin = [];
            this.keysEntered = 0;
            this.loginMessageEnum = 0;
        }
    }
};
</script>
