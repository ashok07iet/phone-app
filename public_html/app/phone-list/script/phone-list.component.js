/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.
        module('phoneList').
        component('phoneList', {
            templateUrl: 'phone-list/view/phone-list.html',
            controller: ['Phone',
                function PhoneListController(Phone) {
                    this.phones = Phone.query();
                    this.orderProp = 'age';
                }
            ]
        });
