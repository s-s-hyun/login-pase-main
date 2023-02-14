$(function () {
  let site = ["https://www.naver.com/","https://www.daum.net/","https://www.google.com/?hl=ko"]
  $(".memu_list_target").mouseover(function (e) {
      $(this).css("color", "red")
      $(".list1").css("display", "block")
  }).mouseout(function () {
      $(this).css("color", "black")
      $(".list1").css("display", "none")
  })
  
  $(".memu_list_1").mouseover(function(){
      $(".list1").css("display", "block")
  }).mouseout(function () {
      $(".list1").css("display", "none")
  })

  $(".but").mouseover(function(){
      $(this).css("color","red")
  }).mouseout(function(){
      $(this).css("color", "black")
  })
  
  $(".but").click(function(e){
      var ran_site = Math.floor(Math.random() * 2);
      location.href = site[ran_site]
  })
})  