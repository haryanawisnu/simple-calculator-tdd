var chai = require('chai');
var should = chai.should();
var cal = require('../myCalculator');

describe('My Calculator', function() {

  describe('Function .tambah()', function() {
    it('Check tipe value return', function() {
      cal.tambah(1, 1).should.be.a('number');
    });
    it('Check return valid', function() {
      cal.tambah(1, 1).should.equal(2);
    });
    it('Check return not null', function() {
      cal.tambah(1, 1).should.not.null;
    });
    it('Check return not undifined', function() {
      cal.tambah(1, 1).should.not.undefined;
    });
    it('Check return not NaN', function() {
      cal.tambah(1, 1).should.not.NaN;
    });
    it('Check return not empty', function() {
      cal.tambah(1, 1).should.not.empty;
    });
  });

  describe('Function .kurang()', function() {
    it('Check tipe value return', function() {
      cal.kurang(1, 1).should.be.a('number');
    });
    it('Check return valid', function() {
      cal.kurang(2, 1).should.equal(1);
    });
    it('Check return not null', function() {
      cal.kurang(2, 1).should.not.null;
    });
    it('Check return not undifined', function() {
      cal.kurang(2, 1).should.not.undefined;
    });
    it('Check return not NaN', function() {
      cal.kurang(2, 1).should.not.NaN;
    });
    it('Check return not empty', function() {
      cal.kurang(2, 1).should.not.empty;
    });
  });

  describe('Function .kali()', function() {
    it('Check tipe value return', function() {
      cal.kali(2, 2).should.be.a('number');
    });
    it('Check return valid', function() {
      cal.kali(2, 2).should.equal(4);
    });
    it('Check return not null', function() {
      cal.kali(2, 2).should.not.null;
    });
    it('Check return not undifined', function() {
      cal.kali(2, 2).should.not.undefined;
    });
    it('Check return not NaN', function() {
      cal.kali(2, 2).should.not.NaN;
    });
    it('Check return not empty', function() {
      cal.kali(2, 2).should.not.empty;
    });
  });

  describe('Function .bagi()', function() {
    it('Check tipe value return', function() {
      cal.bagi(4, 2).should.be.a('number');
    });
    it('Check return valid', function() {
      cal.bagi(4, 2).should.equal(2);
    });
    it('Check return not null', function() {
      cal.bagi(4, 2).should.not.null;
    });
    it('Check return not undifined', function() {
      cal.bagi(4, 2).should.not.undefined;
    });
    it('Check return not NaN', function() {
      cal.bagi(4, 2).should.not.NaN;
    });
    it('Check return not empty', function() {
      cal.bagi(4, 2).should.not.empty;
    });
  });

  describe('Function .pangkat()', function() {
    it('Check tipe value return', function() {
      cal.pangkat(2, 2).should.be.a('number');
    });
    it('Check return valid', function() {
      cal.pangkat(2, 2).should.equal(4);
    });
    it('Check return not null', function() {
      cal.pangkat(2, 2).should.not.null;
    });
    it('Check return not undifined', function() {
      cal.pangkat(2, 2).should.not.undefined;
    });
    it('Check return not NaN', function() {
      cal.pangkat(2, 2).should.not.NaN;
    });
    it('Check return not empty', function() {
      cal.pangkat(2, 2).should.not.empty;
    });
  });

  describe('Function .akar()', function() {
    it('Check tipe value return', function() {
      cal.akar(9).should.be.a('number');
    });
    it('Check return valid', function() {
      cal.akar(9).should.equal(3);
    });
    it('Check return not null', function() {
      cal.akar(9).should.not.null;
    });
    it('Check return not undifined', function() {
      cal.akar(9).should.not.undefined;
    });
    it('Check return not NaN', function() {
      cal.akar(9).should.not.NaN;
    });
    it('Check return not empty', function() {
      cal.akar(9).should.not.empty;
    });
  });
});
