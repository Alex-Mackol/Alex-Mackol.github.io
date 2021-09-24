var myEl = document.getElementById('tab-ourmission');
myEl.addEventListener("click", divFunction);

function divFunction(){
    $("div#div-about-back").css('background-image','url(/img/dandelion.png)');
}

var myEl1 = document.getElementById('tab-docs');
myEl1.addEventListener("click", divFunction1);

function divFunction1(){
    $("div#div-about-back").css('background-image','url(/img/fon-oduvan.png)');
}

var myEl2 = document.getElementById('tab-zvit');
myEl2.addEventListener("click", divFunction2);

function divFunction2(){
    $("div#div-about-back").css('background-image','url(/img/fon-zvit.png)');
}