define(function (require) {
    var Vue = require('vue/vue');
    var VueCarousel = require('vue/vue-carousel');
    Vue.use(VueCarousel);

    return Vue.component('index', {
        template: require('text!./index.html'),
        filters: {
                contentUrl: function (string) {
                    return commonApp.root + string;
                }
        },
        data: function () {
            return {
                slide1: {
                    quote: "The stronger person is not the one making the most noise but the one who can quietly direct the conversation toward defining and solving problems.",
                    author: "Aaron T. Beck"
                },
                slide2: {
                    quote: "The best years of your life are the ones in which you decide your problems are your own. You do not blame them on your mother, the ecology, or the president. You realize that you control your own destiny.",
                    author: "Albert Ellis"
                },
                slide3: {
                    quote: "We can’t solve problems by using the same kind of thinking we used when we created them.",
                    author: "Albert Einstein"
                },
                slide4: {
                    quote: "The happiness of your life depends on the quality of your thoughts.",
                    author: "Marcus Aurelius"
        }
            }
        },
        components: {
            'carousel': VueCarousel.Carousel,
            'slide': VueCarousel.Slide
        }
    })
});