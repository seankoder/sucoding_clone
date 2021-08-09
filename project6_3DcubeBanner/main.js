let deg = 0;

/* 1초마다 일어나게 하는 반복함수 */
setInterval(()=>{
    deg = deg - 90;
    document.querySelector(".cube").style.transform 
    = "rotateX(" + deg + "deg)";
}, 1000)