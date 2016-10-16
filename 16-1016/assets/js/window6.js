/*js file*/
$(function(){
     /* .listのインデックス番号を取得し、alertに出力する。
     $(".list").click(function(){
         var index = $(".list").index(this);
         window.alert(index);
     })
     */

     // 1000-500までの数値をランダムに.countへ出力する。
     var ID = setInterval(function(){
             var random = Math.floor(Math.random()*(1001-500)+500);
             $(".count").text(random);
         },1000)

     // windowがリサイズされた時、logにブラウザの幅を出力する。
     $(window).resize(function(){
         var width = $(window).width();
         console.log(width);
     })

     // .wrapperがクリックされた5秒後に.wrapperをfadeoutする。
     $(".wrapper").click(function(){
         $(".wrapper").fadeOut(1000)
     })

}) //end function
