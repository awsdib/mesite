


jQuery(document).ready(function($){

    for (var i = 1; i < 19; i++) {
    $('#sk'+i).waterbubble({txt: 'sk'+i,data: 0.9,radius:75});
    }


    $("#makeMeScrollable").smoothDivScroll({
			mousewheelScrolling: "horizontal",
		});

    $("#makeMeScrollable1").smoothDivScroll({
      mousewheelScrolling: "horizontal",
    });

});


function filter(vclass) {
  $( "."+vclass ).animate({"opacity":"0"}, "slow",function () {
    $( "."+vclass ).fadeOut("fast");
  });
}

function section(e) {
console.log(e[0].text);
var sec=e[0].text;
if(sec=="Wellcome"){
  $(".profilepiccontainer").removeClass("sider");
  $(".profilepiccontainer").addClass("center");
  $(".profilepiccontainer label").addClass("center");

}else{
  $(".profilepiccontainer").addClass("sider");
  $(".profilepiccontainer").removeClass("center");
  $(".profilepiccontainer label").removeClass("center");

  if(sec=="Skills"){
    $("#skills").css("display","block");
  }else if (sec=="Projects") {
    $("#Projects").css("display","block");
  }else if (sec=="Cv") {
    $("#Cv").css("display","block");
  }else if (sec=="Contact") {
    $("#Contact").css("display","block");
  }



}


}
