var istatus = document.querySelector("h5")
var addfrnd = document.querySelector("#add")
var back = document.querySelector("body")
var mgg = document.querySelector("img")
var nn = 0 ;

addfrnd.addEventListener("click",function(){
    if( nn == 0)
    {
        istatus.style.color="green"
        istatus.innerHTML= "GIRLFRIEND"
        nn = 1
    }
    else{
        istatus.style.color="red"
        istatus.innerHTML= "FRIEND"
        nn = 0
    }
})

var backk = 0

addfrnd.addEventListener('click',function(){
    if( backk == 0){
        back.style.backgroundColor = "rgb(129, 131, 46)"
        backk = 1
    }
    else{
        back.style.backgroundColor = "red"
        backk = 0
    }
})


var img1 = 0;

addfrnd.addEventListener("click",function(){
    mgg.innerHTML = "fuck"
    console.log("ff");
    
})

