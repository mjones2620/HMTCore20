define(function (require) {
    var Vue = require('vue/vue');

    return Vue.component('services', {
        template: require('text!./appointments.html'),
        data: function () {
            return {
                request: {
                    name: "",
                    email: "",
                    phoneNumber: "",
                    message: ""
                },
                isDisabled: true
            }
        },
        methods: {
            sendRequest: function () {
                var vm = this;

                var request = {
                    Name: vm.request.name,
                    EmailAddress: vm.request.email,
                    PhoneNumber: vm.request.phoneNumber,
                    Message: vm.request.message
                }

                this.$http.post(commonApp.apiRoot + "default/SendEmail", request)
                    .then(function (response) {
                        bootbox.alert("Your request has been sent. Someone will be in contact shortly!");
                    },
                     function (response) {
                         bootbox.alert("An issue has occured, please refresh your browser");
                     })
            }
        },
        watch: {
            request: {
                handler: function () {
                    var vm = this;
                    if (vm.request) {
                        if (vm.request.message) {
                            if (vm.request.message.length > 8000) {
                                vm.request.message = vm.request.message.substring(0, 8000);
                            }
                        }
                    }
                },
                deep: true
            }
        }
    })
});