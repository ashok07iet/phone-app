/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.
        module('phoneList').
        component('phoneList', {
            templateUrl: 'phone-list/view/phone-list.html',
            controller: function PhoneListController() {
                this.phones = [
                    {
                        name: 'Nexus S',
                        snippet: 'Fast just got faster with Nexus S.',
                        age: 1
                    }, {
                        name: 'Motorola XOOM™ with Wi-Fi',
                        snippet: 'The Next, Next Generation tablet.',
                        age: 2
                    }, {
                        name: 'MOTOROLA XOOM™',
                        snippet: 'The Next, Next Generation tablet.',
                        age: 3
                    }
                ];

                this.orderProp = 'age';
            }
        });
