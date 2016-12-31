/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.
        module('phoneList').
        component('phoneList', {
            templateUrl: 'phone-list/view/phone-list.html',
            controller: ['$http',
                function PhoneListController($http) {
                    var self = this;
                    self.orderProp = 'age';

                    $http.get('phones/phones.json').then(function (response) {
                        self.phones = response.data;
                    });
                }
            ]
        });
