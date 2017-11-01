var $ = require("jquery");
$(document).ready(function() {
  var buttOn = $(".Brequest");
  var buttOn2 = $(".Srequest");

  buttOn.click(function() {
    var objAjaxR = {
      url: 'http://localhost/hugo-ui-server/generateTaskID',
      type: "GET",
      success: function(response) {
        console.log(response, "response");
        var iD = response.ID;
        var h2 = "<h2>Id:" + response.ID + "</h2>";
        console.log(h2, "h2");

        $(".container").html(h2);
      },
      error: function(xhr) {
        console.log(xhr, "xhr");
      }
    }
    $.ajax(objAjaxR);
  });
  buttOn2.click(function() {
    $.ajax({
      url: 'http://localhost/hugo-ui-server/getAJson',
      type: "GET",
      success: function(response) {
        console.log(response, "response");
        var iD2 = response.users;
        var h22 = "<h2>Id:" + iD2 + "</h2>";
        console.log(h22, "h2");

        $(".container").html(h22);
      },
      error: function(xhr) {
        console.log(xhr, "xhr");
      }
    });
  });
});
