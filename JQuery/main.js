$(document).ready(function () {
  $("#toggleText").click(function () {
    function toggleText() {
      let text = $("#box").text();
      if (text = "Shown") {
        $("#box").text("Hidden");
      } else {
        $("#box").text("Shown");
      }
    };
    toggleText();
  });
  $("#toggleDisplay").click(function () {
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
  $("#toggleBoth").click(function () {
    function toggleText() {
      let text = $("#box").text();
      if (text = "Shown") {
        $("#box").text("Hidden")
      } else {
        $("#box").text("Shown")
      }
    };
    toggleText();
    function toggleDisplay() {
      $("#box").toggle();
      let text = $("#toggleDisplay").html();
      if (text = "<button type=\"button\" id=\"toggleDisplay\">Hide</button>") {
        $("#toggleDisplay").html("<button type=\"button\" id=\"toggleDisplay\">Show</button>")
      } else {
        $("#toggleDisplay").html("<button type=\"button\" id=\"toggleDisplay\">Hide</button>")
      }
    }
    toggleDisplay();
  })
});