/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

describe('PhoneListController', function() {
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
  beforeEach(function(){
     bard.appModule('core.phone');
     bard.appModule('phoneList');
     bard.inject("$rootScope","$q","PhoneService","$controller");
  });
  it('should create a phone model in controller ',function(){
      sinon.stub(PhoneService, 'getPhoneList').returns($q.when({data:phonesData}));
      var ctrl=$controller('PhoneListController');
      $rootScope.$apply();
      expect(ctrl.phones.length).toBe(2);
  } );
});
