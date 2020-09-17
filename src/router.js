import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import Reports from './components/Reports.vue';
import Wallets from './components/Wallets.vue';

Vue.use(Router);

export default new Router({
    routes:[
        {path: '/', component: Home},
        {path: '/reports', component: Reports},
        {path: '/wallets', component: Wallets}
    ]
});