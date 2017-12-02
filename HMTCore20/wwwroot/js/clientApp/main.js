define(function (require) {
    require(['text']);
    var Vue = require('vue/vue');
    var vueResource = require('vue/vue-resource');
    var VeeValidate = require('vue/vee-validate');

    //use libaries
    Vue.use(vueResource);
    Vue.use(VeeValidate);

    commonApp.instance = new Vue({
        el: '#app',
        components: {
            'bottom-nav': require("./vue-components/bottom-nav"),
            'home': require('./vue-components/home/index'),
            'about': require('./vue-components/about/about'),
            'services': require('./vue-components/services/services'),
            'appointments': require('./vue-components/appointments/appointments'),
            'policy': require('./vue-components/policy/policy'),
            'documents': require('./vue-components/documents/documents'),
            'socialmedia': require('./vue-components/SocialMedia/SocialMedia'),
            'contact': require('./vue-components/contact/contact')
        }
    })
});