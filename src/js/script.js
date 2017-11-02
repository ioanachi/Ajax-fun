var $ = require("jquery");
$(document).ready(function() {
  var buttOn = $(".Brequest");
  var buttOn2 = $(".Srequest");
  var buttOn3 = $(".aPost");
  var nM = $(".namePost");
  var aG = $(".agePost");
  var h2 = $(".h2");
  var next = $(".h3");
  var radioBtn = $("input:radio");
  var valRBtn;
  var radiob = $(".radiob");
  var gay = $("input:checkbox");
  var gaY;
  var textArea = $("textarea");
  var textAr;
  var optiune = $('.dropdownx');







  radioBtn.click(function() {
    valRBtn = $(this).val();
  });

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

  buttOn3.click(function() {
    console.log(gay.is(':checked'),'gay');
    if (gay.is(':checked')) {
      gaY = "yes";
    }else {
        gaY= "nO";
    }
    var namePost = nM.val();
    console.log(namePost, "namePost");
    var hname = "";
    var hage;

    var agePost = aG.val();
    console.log(agePost, "agePost");
    var result = '';
    var resultObj = $('.result');
    textAr = textArea.val();
    var optiUne = optiune.val();

    var date = {
      name: namePost,
      age: agePost,
      description: textAr,
      gay: gaY,
      sex: valRBtn,
      city: optiUne,
    };
    console.log(date, "date trimise");

    $.ajax({
      type: "POST",
      url: 'http://localhost/hugo-ui-server/postSomething',
      data: date,
      success: function(k) {
        $.each(k.status, function(key, val) {
          result += '<b>' + key + '</b>:' + val + '<br/>';
        });
        resultObj.html(result);


      },
      error: function() {
        console.log("fail");
      },
    });





  });
});
