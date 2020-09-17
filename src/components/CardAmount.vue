<template>
<div id="CardAmount">
    <div>
        <b-card-group deck>
                    <b-card title="Current Balance">
                        <h4>
                            ⚖️ R$: 100.00
                        </h4>
                    </b-card>
                <b-card title="Incoming" style="font-size: 2rem;">
                    <h4>
                        📈 R$: 400.00
                    </h4>
                </b-card>

                <b-card title="Outcoming" style="font-size: 2rem;">
                    <h4>
                        📉 R$: 300.00
                    </h4>
                </b-card>
        </b-card-group>
    </div>
</div>
</template>

<script>
export default {
    name: "CardAmount",
    data() {
        return {}
    },
    components: {},
    methods: {}
};
</script>
