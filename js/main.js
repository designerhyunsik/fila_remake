var view;
$(function(){
  console.log($("#menu_wrap").css("position"));
  view=false;
  $("#buger_menu").click(function(){
    if(view==false) {
      $(this).children().eq(0).addClass("top");
      $(this).children().eq(1).addClass("mid");
      $(this).children().eq(2).addClass("bot");
      $("#menu_wrap").stop().animate({
        right:0
      });
      view=true;
    } else {
      $(this).children().eq(0).removeClass("top");
      $(this).children().eq(1).removeClass("mid");
      $(this).children().eq(2).removeClass("bot");
      $("#menu_wrap").stop().animate({
        right:"-320px"
      });
      view=false;
    }
  });
})