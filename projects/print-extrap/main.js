module.exports.printExtrap = (printStatment) => {
  const Objectify = require("./modules/create-object");
  Objectify.objectify(printStatment);

  function returnExtrapedText(params) {
    // for now it just logs it to the console
    // until I figure out how to integrate it properly, this is all it can do
    console.log(Objectify.newObject.array);
    console.log(Objectify.newObject.string);
    console.log(Objectify.newObject.pageCount);
  }
}