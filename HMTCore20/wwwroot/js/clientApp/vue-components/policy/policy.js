define(function (require) {
    var Vue = require('vue/vue');

    return Vue.component('policy', {
        template: require('text!./policy.html')
    })
});