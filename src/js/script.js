var $ = require("jquery");
$(document).ready(function() {
  var buttOn = $(".Brequest");
  var buttOn2 = $(".Srequest");
  var buttOn3 = $(".aPost");
  var nM = $(".namePost");
  var aG = $(".agePost");
  var h2 = $(".h2");
var next = $(".h3");
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
        var naMe = response.users;
        console.log(naMe, "naMe.length");
        console.log(naMe.length, "naMe.length");
        var h22 = '';
        naMe.forEach(function(i) {
          h22 += "<li>Name:" + i + "</li>";
        })
        // for (var i = 0; i < naMe.length; i++) {
        //   h22 += "<li>Name:" + naMe[i] + "</li>";
        //   console.log(h22, "name");
        // }
        $(".container").html(h22);
      },
      error: function(xhr) {
        console.log(xhr, "xhr");
      }
    });
  });
  var hname = "";
  var hage;
  buttOn3.click(function() {
    var namePost = nM.val();
    console.log(namePost, "namePost");

    var agePost = aG.val();
    console.log(agePost, "agePost");

    $.ajax({
      type: "POST",
      url: 'http://localhost/hugo-ui-server/postSomething',
      data: {
        name: namePost,
        age: agePost,
      },
      success: function(k) {
        console.log(k, "success");
        console.log(k.status, "k.status");
        console.log(k.status.userName, "k.statususerName");

        console.log(k.userName, "k.userName");
        hname = "<h2>USERNAME: " + k.status.userName + "<h2>";
        h2.html(hname);
        hage =  "<h2>AGE: " + k.status.userAge + "<h2>"
        next.html(hage);
      },
      error: function() {
        console.log("fail");
      },
    });
  });
});
