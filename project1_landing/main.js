/* dynamic 이라는 id 속성값을 가지고 있는 문서 객체를 선택해라 */
let target = document.querySelector("#dynamic");


function blink(){
    /* target에 active라는 class가 추가되었다가 없어졌다가를 반복하게 한다 */
    target.classList.toggle("active");
}


function randomString(){
    let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to Javascript", "Learn to Python", "Learn to Ruby"];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    let selectStringArr = selectString.split("");

    return selectStringArr;
}


function resetTyping(){
    target.textContent = "";
    dynamic(randomString());
}


// 한글자씩 텍스트 출력 함수
function dynamic(randomArr){
    if(randomArr.length > 0){
        /* randomArr의 앞쪽 요소부터 빼서 넣는다 */
        target.textContent += randomArr.shift();
        /* 0.08초의 간격으로 dynamic 함수를 다시 호출한다 */
        setTimeout(function(){
            dynamic(randomArr);
        }, 80);
    }else{
        // 3초 후에 resetTyping 함수를 호출한다.
        setTimeout(resetTyping, 3000);
    }
}

dynamic(randomString());

/* blink라는 함수를 0.5초 마다 실행해라 */
setInterval(blink, 500);

