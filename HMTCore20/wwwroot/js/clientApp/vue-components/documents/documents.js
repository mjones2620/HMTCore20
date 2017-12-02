define(function (require) {
    var Vue = require('vue/vue');

    return Vue.component('documents', {
        template: require('text!./documents.html'),
        filters: {
		        contentUrl: function (string) {
                    return commonApp.root + string;
                }
        }
    })
});