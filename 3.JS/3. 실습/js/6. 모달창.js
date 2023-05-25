window.onload = function(){

    // 내부함수 - 외부에서 호출할 수 없음!!
    function test(){
        console.log('test');
    }

    // open, close 는 window 객체의 내장 함수
    // 아이디로 참조 불가
    // 직접 변수에 담아줘야 합니다.

    // #open : 모달창 보여주기
    // #close : 모달창 닫기
    let open = document.getElementById('open');
    let close = document.getElementById('close');
    // 특수문자가 입력되서 아이디로 바로 접근 안됨
    let madal = document.getElementById('modal-box');

    open.addEventListener('click', function(){
        // 모달창 열기
        // close 속성 active 추가
        madal.classList.add('active');
    });

    close.addEventListener('click', function(){
       // 모달창 닫기 
       // close 속성 active 제거
       madal.classList.remove('active');
    });
}

function test(){
    console.log('test');
}

