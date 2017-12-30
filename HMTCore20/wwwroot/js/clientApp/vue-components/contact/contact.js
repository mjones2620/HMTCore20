define(function (require) {
    var Vue = require('vue/vue');
    var VueCarousel = require('vue/vue-carousel');
    Vue.use(VueCarousel);

    return Vue.component('contact', {
        template: require('text!./contact.html'),
        filters: {
                contentUrl: function (string) {
                    return commonApp.root + string;
                }
        },
        components: {
            'carousel': VueCarousel.Carousel,
            'slide': VueCarousel.Slide
        }
    })
});
