define(function (require) {
    var Vue = require('vue/vue');

    return Vue.component('contact', {
        template: require('text!./contact.html'),
        filters: {
                contentUrl: function (string) {
                    return commonApp.root + string;
                }
        }
    })
});
