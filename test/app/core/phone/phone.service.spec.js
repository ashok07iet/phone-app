/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
describe('verify PhoneService', function () {
    var phonesData=[ {
        "age": 0, 
        "id": "motorola-xoom-with-wi-fi", 
        "imageUrl": "img/phones/motorola-xoom-with-wi-fi.0.jpg", 
        "name": "Motorola XOOM\u2122 with Wi-Fi", 
        "snippet": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb)."
    }, 
    {
        "age": 1, 
        "id": "motorola-xoom", 
        "imageUrl": "img/phones/motorola-xoom.0.jpg", 
        "name": "MOTOROLA XOOM\u2122", 
        "snippet": "The Next, Next Generation\n\nExperience the future with MOTOROLA XOOM, the world's first tablet powered by Android 3.0 (Honeycomb)."
    }];
    beforeEach(function () {
        bard.appModule('core.phone');
        bard.inject("$httpBackend","PhoneService");
    });
    beforeEach(function() {
     $httpBackend.when('GET','/phones/phones.json').respond(phonesData);
     $httpBackend.when('GET','/phones/123.json').respond(phonesData[0]);
  });
    afterEach(function() {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });
    it('verify PhoneService is created', function () {
        expect(PhoneService).toBeDefined();
    });
    it('verify PhoneService.getPhoneList method defined', function () {
         expect(PhoneService.getPhoneList).toBeDefined();
         
    });
     it('verify PhoneService.getPhoneDetail method defined', function () {
         expect(PhoneService.getPhoneDetail).toBeDefined();
         
    });
      it('verify PhoneService.getPhoneList result ', function () {
          var list=PhoneService.getPhoneList();
          list.then(function(phones){
            expect(phones.data.length).toEqual(2);
          });
          $httpBackend.flush(); 
    });
    it('verify PhoneService.getPhoneDetail result ', function () {
          var list=PhoneService.getPhoneDetail(123);
          list.then(function(phones){
            expect(phones.data.id).toEqual("motorola-xoom-with-wi-fi");
          });
          $httpBackend.flush();
    });
});

