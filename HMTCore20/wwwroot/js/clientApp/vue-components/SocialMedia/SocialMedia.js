define(function (require) {
    var Vue = require('vue/vue');

    return Vue.component('social-media', {
        template: require('text!./SocialMedia.html')
    })
});
