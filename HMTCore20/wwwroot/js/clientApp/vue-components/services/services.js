define(function (require) {
    var Vue = require('vue/vue');

    return Vue.component('services', {
        template: require('text!./services.html')
    })
});