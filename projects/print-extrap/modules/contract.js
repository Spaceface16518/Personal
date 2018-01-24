module.exports = (array) => {
  var toString = require("./array-to-str.js")
  let newString = toString.stringify(array)
  return newString
}