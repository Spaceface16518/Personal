$(document).ready(function() {
  $("#toggleText").click(function() {
    function toggleText() {
      let text = $("box").text();
      if (text = "I\'m shown") {
        $("#box").text("I\'m hidden")
      } else {
        $("#box").text("I\'m shown")
      }
    };
    toggleText();
  });
  $("#toggleDisplay").click(function() {
    function toggleDisplay() {
      $("#box").toggle();
      let text = $("#toggleDisplay").html();
      if (text = "<button type=\"button\" id=\"toggleDisplay\">Hide</button>") {
        $("#toggleDisplay").html("<button type=\"button\" id=\"toggleDisplay\">Show</button>")
      } else {
        $("#toggleDisplay").html("<button type=\"button\" id=\"toggleDisplay\">Hide</button>")
      }
    }
    toggleDisplay()
  });
  $("#toggleBoth").click(function() {
    toggleText();
    toggleDisplay();
  })
});
