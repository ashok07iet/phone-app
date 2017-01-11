angular.module('phonecatApp',['phoneList', 'ngRoute',,'core','phoneDetail']);


angular.
  module('phonecatApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $routeProvider.
        when('/phones', {
          template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
        otherwise('/phones');
    }
  ]);

angular.module('core', ['core.phone']);

angular.module('core.phone', ['ngResource']);

angular.module('phoneDetail', ['core.phone']);


angular.module('phoneList',['core.phone']);


angular.module('core').
        filter('checkmark', function () {
            return function (input) {
                return input ? '\u2713' : '\u2718';
            };
        });

angular.
  module('core.phone').
  factory('PhoneService', ['$http',
    function($http) {
        return {
           getPhoneList:function(){
               return $http({
                method: 'Get',
                url: '/angular-phonecat/app/phones/phones.json'
            });
           },
           getPhoneDetail:function(phoneId){
              return $http({
                method: 'Get',
                url: '/angular-phonecat/app/phones/'+phoneId+'.json'
            }); 
           }
        };
    }
  ]);

angular.
        module('phoneDetail').
        component('phoneDetail', {
            templateUrl: 'phone-detail/view/phone-detail.html',
            controller: 'PhoneDetailController'
        });


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


angular.
        module('phoneList').
        component('phoneList', {
            templateUrl: 'phone-list/view/phone-list.html',
            controller: 'PhoneListController'
        });

angular.module('phoneList').controller('PhoneListController',['PhoneService',
                function (PhoneService) {
                    var self=this;
                    PhoneService.getPhoneList().then(function(phones){
                        self.phones=phones.data;
                    });
                    self.orderProp = 'age';
                }
            ]);

