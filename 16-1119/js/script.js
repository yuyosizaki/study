$(function(){

    // 「変数iが6の倍数かつ8の倍数」の時、ループを抜ける。
    // 「変数iが6の倍数」の時、次のループへ。
    //  コンソールへ出力

    for(var i = 1; i<100; i++){
        if(i%6 == 0 && i%8 == 0){
            break;
        } else if (i%6 == 0) {
            continue;
        } else {
            console.log(i);
        }
    }

}) //end function
