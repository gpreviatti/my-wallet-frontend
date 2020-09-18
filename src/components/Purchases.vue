<template>
<div id="purchases">
    <b-button 
        v-b-modal.ModalTransaction
        block
        variant="success"
        class="btn-transaction"
    >
        Add Transaction
    </b-button>
    <div>
        <b-table hover :items="bills" :fields="fields">
            <template v-slot:cell(Actions)>
                <b-button size="sm" v-b-modal.ModalTransaction variant="light">
                    🙈
                </b-button>
            </template>
        </b-table>
    </div>
    <div>
        <b-modal 
            title="New Transaction" 
            hide-footer 
            class="bold" 
            id="ModalTransaction" 
            ref="ModalTransaction"
        >
            <form @submit="addTransaction">
                <b-form-group 
                    label="Date" 
                    label-for="name-date" 
                    invalid-feedback="Date is required" 
                    class="bold"
                >
                    <b-form-input 
                        id="date-input" 
                        required 
                        type="date" 
                        v-model="transaction.date"
                    ></b-form-input>
                </b-form-group>

                <b-form-group 
                    label="Description" 
                    label-for="name-input" 
                    invalid-feedback="Name is required" 
                    class="bold"
                >
                    <b-form-textarea 
                        id="name-input" 
                        required 
                        rows="3" 
                        no-resize 
                        v-model="transaction.description"
                    ></b-form-textarea>
                </b-form-group>

                <b-form-group 
                    label="Value" 
                    label-for="value-input" 
                    invalid-feedback="Value is required" 
                    prepend="R$" 
                    class="bold"
                >
                    <b-input-group prepend="R$">
                        <b-form-input 
                            id="value-input" 
                            type="number" 
                            required 
                            v-model="transaction.value"
                        ></b-form-input>
                    </b-input-group>
                </b-form-group>

                <b-form-group 
                    label="Categories" 
                    label-for="category-input" 
                    invalid-feedback="Category is required" 
                    class="bold"
                >
                    <b-form-select 
                        :options="categories" 
                        v-model="transaction.category"
                    ></b-form-select>
                </b-form-group>

                <br>
                <b-form-group>
                    <b-button 
                        block 
                        variant="success" 
                        @click="addTransaction"
                    >
                        Create
                    </b-button>
                </b-form-group>
            </form>
        </b-modal>
    </div>
</div>
</template>

<script>
export default {
    name: "Purchases",
    data() {
        return {
            fields: ['Date', 'Description', 'Value', 'Category', 'Actions'],
            bills: [],
            transaction: {
				Date: '',
				Description: '',
				Value: '0.00',
				category: ''
			},
			categories: [
				'Food', 'Car', 'Market', 'Investiments', 'Deposits', 'Credit Card'
			]
        };
    },
    methods: {
        addTransaction(e) {
            e.preventDefault()
            const transaction = this.transaction;
            this.bills.push({
                Date: transaction.date,
                Description: transaction.description,
                Value: transaction.value,
                Category: transaction.category
            });
            this.$refs['ModalTransaction'].hide()
            this.transaction = {};
		}
    },
};
</script>

<style scoped>
.btn-transaction {
    margin-bottom: 40px;
    margin-top: 30px;
}
</style>
