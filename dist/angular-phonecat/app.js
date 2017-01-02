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
  factory('Phone', ['$resource',
    function($resource) {
      return $resource('phones/:phoneId.json', {}, {
        query: {
          method: 'GET',
          params: {phoneId: 'phones'},
          isArray: true
        }
      });
    }
  ]);

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
