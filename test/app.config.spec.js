/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
describe('verify router provider', function () {
    var route,location,rootScope
    beforeEach(function () {
        module('phonecatApp');
        inject(function($route, $location, $rootScope){
            route=$route;
            location=$location;
            rootScope=$rootScope;
        });
    });
    it('verify route for /phones', function () {
        expect(route.current).toBeUndefined();
    });
     it('verify route for /phones', function () {
        expect(route.current).toBeUndefined();
        location.path('/phones');
         rootScope.$digest();
        expect(route.current.template).toEqual('<phone-list></phone-list>');
        
    });
     it('verify route for /phones/123', function () {
        expect(route.current).toBeUndefined();
        location.path('/phones/123');
         rootScope.$digest();
        expect(route.current.template).toEqual('<phone-detail></phone-detail>');
        
    });
     it('verify route for otherwise', function () {
        expect(route.current).toBeUndefined();
        location.path('');
         rootScope.$digest();
        expect(route.current.template).toEqual('<phone-list></phone-list>');
        
    });
});

