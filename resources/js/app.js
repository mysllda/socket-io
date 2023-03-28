require('./bootstrap');

import Vue from 'vue';
import VueToastify from 'vue-toastify'

Vue.useAttrs(VueToastify)

const app = new Vue({
    el: '#app'
})