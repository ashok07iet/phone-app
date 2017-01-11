/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('phoneDetail').controller('PhoneDetailController', ['$routeParams', 'PhoneService',
    function ($routeParams, PhoneService) {
        var self = this;
        PhoneService.getPhoneDetail($routeParams.phoneId).then(function (phone) {
            self.phone = phone.data;
            self.setImage(self.phone.images[0]);
        });
        self.setImage = function setImage(imageUrl) {
            self.mainImageUrl = imageUrl;
        };
    }
]);

