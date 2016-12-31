/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.
        module('phoneDetail').
        component('phoneDetail', {
            templateUrl: 'phone-detail/view/phone-detail.html',
            controller: ['$http', '$routeParams',
                function PhoneDetailController($http, $routeParams) {
                    var self = this;

                    self.setImage = function setImage(imageUrl) {
                        self.mainImageUrl = imageUrl;
                    };

                    $http.get('phones/' + $routeParams.phoneId + '.json').then(function (response) {
                        self.phone = response.data;
                        self.setImage(self.phone.images[0]);
                    });
                }
            ]
        });

