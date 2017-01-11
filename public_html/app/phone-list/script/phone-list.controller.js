/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('phoneList').controller('PhoneListController',['PhoneService',
                function (PhoneService) {
                    var self=this;
                    PhoneService.getPhoneList().then(function(phones){
                        self.phones=phones.data; 
                    });
                    self.orderProp = 'age';
                }
            ]);

