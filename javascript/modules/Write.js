write = function = (text) => {
  $("#result").text(text);
  console.log("\"" + text + "\" " + "was written on the page");
}
testConnection = () => {
  console.log("Connection confirmed: Write")
}

export { write, testConnection }