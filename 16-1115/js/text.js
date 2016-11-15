// ランダム関数

var random = Math.random()*10
console.log(random);

// 切り捨て

var floor = Math.floor(Math.random()*10);
console.log(floor);

// 最大値・最小値

var maxrandom = Math.floor(Math.random()*((101)-90)+90);
console.log(maxrandom);


// 論理演算子

var num = 10 * 10;

// 論理和

if(num == 100 || num == 200){
    console.log("true");
} else {
    console.log("false");
}

// 論理積

if(num > 100 && num < 300){
    console.log("true");
} else {
    console.log("false");
}

// 論理否定

if((!num == 100)){
    console.log("true");
} else {
    console.log("false");
}
