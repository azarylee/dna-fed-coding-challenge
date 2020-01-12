import Vue from 'vue';
import App from './App.vue';

// Vue.prototype.$ajax = axios;
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import 'normalize.css';

Vue.use(Buefy);

new Vue({
    render: h => h(App)
}).$mount('#app');