const alphabetDesCasAlternatifs = require("../bloat-alternate-case");
const chai = require("chai");
const expect = chai.expect;

describe("alternateCase", () => {
  it("if empty string is given, then an empty string is returned", () => {
    // expect(alternateCase(???)).to...
    const actualResult = alphabetDesCasAlternatifs("");
    const expectedResult = "";
    expect(actualResult).to.equal(expectedResult);
  });
  it("if one letter string given, return uppercase letter", () => {
    // expect(alternateCase(???)).to...
    const actualResult = alphabetDesCasAlternatifs("w");
    const expectedResult = "W";
    expect(actualResult).to.equal(expectedResult);
  });
  it("if two letters are given, then they will be in alternate cases", () => {
    // expect(alternateCase(???)).to...
    const actualResult = alphabetDesCasAlternatifs("wo");
    const expectedResult = "Wo";
    expect(actualResult).to.equal(expectedResult);
  });
  it("if more than one word is given, then letters will be in alternate cases", () => {
    // expect(alternateCase(???)).to...
    const actualResult = alphabetDesCasAlternatifs("world hello");
    const expectedResult = "WoRlD hElLo";
    expect(actualResult).to.equal(expectedResult);
  });
});
