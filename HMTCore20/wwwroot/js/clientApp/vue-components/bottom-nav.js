define(function (require) {
    var Vue = require('vue/vue');

    return Vue.component('bottom-nav', {
        template: require('text!./bottom-nav.html'),
    })
});