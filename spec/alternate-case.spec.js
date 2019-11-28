const alphabetDesCasAlternatifs = require("../bloat-alternate-case");
const chai = require("chai");
const expect = chai.expect;

describe("alternateCase", () => {
  it("given an empty string return an empty string", function(done) {
    alphabetDesCasAlternatifs("").then(function(res) {
      expect(res).to.equal("");
      done();
    });
  });
  it("one letter return capitalised", function(done) {
    alphabetDesCasAlternatifs("w").then(function(res) {
      expect(res).to.equal("W");
      done();
    });
  });
  it("if two letters are given, then they will be in alternate cases", function(done) {
    alphabetDesCasAlternatifs("wo").then(function(res) {
      expect(res).to.equal("Wo");
      done();
    });
  });
  it("if more than one word is given, then letters will be in alternate cases", done => {
    alphabetDesCasAlternatifs("world hello").then(function(response) {
      expect(response).to.equal("WoRlD hElLo");
      done();
    });
  });
  it("if more than one word is given, then letters will be in alternate cases", done => {
    alphabetDesCasAlternatifs("the red cat jumped over the moon").then(function(
      response
    ) {
      expect(response).to.equal("ThE rEd CaT jUmPeD oVeR tHe MoOn");
      done();
    });
  });
});
