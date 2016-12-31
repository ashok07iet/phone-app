/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.
        module('phoneDetail').
        component('phoneDetail', {
            templateUrl: 'phone-detail/view/phone-detail.html',
            controller: ['$routeParams', 'Phone',
                function PhoneDetailController($routeParams, Phone) {
                    var self = this;
                    self.phone = Phone.get({phoneId: $routeParams.phoneId}, function (phone) {
                        self.setImage(phone.images[0]);
                    });

                    self.setImage = function setImage(imageUrl) {
                        self.mainImageUrl = imageUrl;
                    };
                }
            ]
        });

