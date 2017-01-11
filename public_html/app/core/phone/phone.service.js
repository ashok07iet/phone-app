/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.
  module('core.phone').
  factory('PhoneService', ['$http',
    function($http) {
        return {
           getPhoneList:function(){
               return $http({
                method: 'Get',
                url: '/phones/phones.json'
            });
           },
           getPhoneDetail:function(phoneId){
              return $http({
                method: 'Get',
                url: '/phones/'+phoneId+'.json'
            }); 
           }
        };
    }
  ]);
