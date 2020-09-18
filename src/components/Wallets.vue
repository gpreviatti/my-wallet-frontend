<template>
<div id="wallets">
    <NavBar />
    <div id="new-wallets">
        <b-card-group deck>
            <b-card title="Inter">
                <b>Type:</b> Main
                <br>
                <b>Current Balance:</b> R$: 100,00
            </b-card>
                
            <b-card title="Nu Bank">
                <b>Type:</b> Savings
                <br>
                <b>Current Balance:</b> R$: 300,00
            </b-card>

            <b-card title="Rico">
                <b>Type:</b> Investiments
                <br>
                <b>Current Balance:</b> R$: 300,00
            </b-card>

            <b-card title="New Wallet" center>
                <br>
                <b-form-group>
                    <b-button 
                        block 
                        variant="success" 
                        @click="addTransaction"
                    >
                        +
                    </b-button>
                </b-form-group>
            </b-card>
        </b-card-group>
    </div>
</div>
</template>

<script>
import NavBar from "./NavBar";
export default {
    name: "Walelts",
    components: {NavBar}
};
</script>

<style>
#new-wallets {
    margin: 60px;
}
</style>
