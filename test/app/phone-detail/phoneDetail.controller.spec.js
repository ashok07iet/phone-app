/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

describe('PhoneListController', function () {
    var phonesData = [{
            "age": 0,
            "id": "motorola-xoom-with-wi-fi",
            "imageUrl": "img/phones/motorola-xoom-with-wi-fi.0.jpg",
            "name": "Motorola XOOM\u2122 with Wi-Fi",
            "snippet": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb).",
            "images": ["/abcd/fgty"]
        },
        {
            "age": 1,
            "id": "motorola-xoom",
            "imageUrl": "img/phones/motorola-xoom.0.jpg",
            "name": "MOTOROLA XOOM\u2122",
            "snippet": "The Next, Next Generation\n\nExperience the future with MOTOROLA XOOM, the world's first tablet powered by Android 3.0 (Honeycomb).",
            "images": ["/abcd/fgty1"]
        }];
    beforeEach(function () {
        bard.appModule('core.phone');
        bard.appModule('phoneDetail');
        bard.inject("$rootScope", "$q", "PhoneService", "$controller");
        sinon.stub(PhoneService, 'getPhoneDetail').returns($q.when({data: phonesData[0]}));
    });
    it('should create a phone model in controller ', function () {
        var ctrl = $controller('PhoneDetailController', {
            "$routeParams": {phoneId: 1234}
        });
        $rootScope.$apply();
        expect(ctrl.phone.id).toBe("motorola-xoom-with-wi-fi");
    });
     it('test setImage method', function () {
        var ctrl = $controller('PhoneDetailController', {
            "$routeParams": {phoneId: 1234}
        });
        $rootScope.$apply();
        ctrl.setImage(phonesData[1].images[0]);
        expect(ctrl.mainImageUrl).toBe("/abcd/fgty1");
    });
});
