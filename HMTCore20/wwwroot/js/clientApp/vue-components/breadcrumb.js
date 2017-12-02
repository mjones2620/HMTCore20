define(function (require) {
    var Vue = require('vue/vue');

    return Vue.component('breadcrumb', {
        template: require('text!./breadcrumb.html'),
    })
});