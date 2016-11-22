$(function(){

    // 配列をfor文で全て取得する。
    var arra = ["sato","suzuki","tanaka","yamashita"];
    for(var i = 0; i<arra.length; i++){
        console.log(arra[i]);
    }

    // 連想配列
    var name = {"place":"Tokyo","name":"Taro","age":14};

    // 連想配列をログに出力する。
    // console.log(name.place);

    // 連想配列をfor文で全て取り出す。
    for(var key in name){
        console.log(name[key]);
    }

    // 論理積
    var num = 10;

    if(num>30 && num<50){
        console.log("true");
    } else {
        console.log("fales");
    }

}) // endfunction
