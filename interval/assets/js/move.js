/*js file*/
$(function(){
    // 100-50までの数値を5秒ごとにconsoleへ出力する。
    function alert(){
        random = (Math.floor(Math.random()*(100-50)+50));
        console.log(random);
    }

    setInterval(alert,3000);

    // .count-stopがクリックされた時、alertファンクションを止める。
    $(".count-stop").click(function(){
        window.alert("end function")
        clearInterval(alert)
    })

})//end function
