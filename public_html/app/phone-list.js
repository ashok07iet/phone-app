/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('phonecatApp').
        component('phoneList', {
            template:
                    '<ul>' +
                    '<li ng-repeat="phone in $ctrl.phones">' +
                    '<span>{{phone.name}}</span>' +
                    '<p>{{phone.snippet}}</p>' +
                    '</li>' +
                    '</ul>'+ '<p>Total number of phones: {{$ctrl.phones.length}}</p>',
            controller: function PhoneListController() {
                this.phones = [
                    {
                        name: 'Nexus S',
                        snippet: 'Fast just got faster with Nexus S.'
                    }, {
                        name: 'Motorola XOOM™ with Wi-Fi',
                        snippet: 'The Next, Next Generation tablet.'
                    }, {
                        name: 'MOTOROLA XOOM™',
                        snippet: 'The Next, Next Generation tablet.'
                    }
                ];
            }
        });
