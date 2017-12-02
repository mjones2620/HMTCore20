define(function (require) {
    var Vue = require('vue/vue');

    return Vue.component('about', {
        template: require('text!./about.html'),
    })
});