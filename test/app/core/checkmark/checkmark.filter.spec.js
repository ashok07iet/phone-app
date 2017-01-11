/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

describe('verify checkmark filter', function () {
    beforeEach(function () {
        bard.appModule('core.phone','core');
        bard.inject("checkmarkFilter");
    });
    it('checkmark should be defined',function(){
        expect(checkmarkFilter).toBeDefined();
    });
    it('should be able to return tick mark(\u2713) for input not undefined',function(){
        expect(checkmarkFilter('blueTooth')).toBe('\u2713');
    });
    it('should be able to return tick mark(\u2718) for input  undefined',function(){
        expect(checkmarkFilter(undefined)).toBe('\u2718');
    });
  });