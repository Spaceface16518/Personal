module.exports.objectify = (string) => {
  var Expand = require("./expand.js");
  var Contract = require("./contract.js");

  let newArray = Expand.expand(string);
  let newString = Contract.contract(newArray);
  if (newString === string) {
    console.log("verified");
  } else {
    console.warn("not verified");
  }

  class printObj {
    constructor(newArray, newString) {
      this._array = newArray;
      this._string = newString;
    }
    get(array) {
      return this._array
    }
    get(string) {
      return this._string
    }
    get(pageCount) {
      array = this._array;
      numOfPages = array.length;
      return numOfPages
    }
  }
  const newObject = new printObj(newArray, newString);
  module.exports.newObject = newObject;
}