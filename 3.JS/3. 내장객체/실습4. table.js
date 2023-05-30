
// 페이지가 모두 불러져 있으면 함수를 실행
// onload : 이벤트
window.onload = function(){

    // 버튼 요소 선택
    let btn = document.querySelector('#register');
    btn.addEventListener('click', function(e){

        // 버튼이 1개인 경우 sunmit 버튼으로 동작
        // 기본이벤트를 제거
        e.preventDefault();
        
        let userName = document.querySelector('#username').value;
        let major = document.querySelector('#major').value;

        console.log('userName : ', userName);
        console.log('major : ', major);

        let tbody = document.querySelector('#attendant > tbody');

        // 테이블의 행을 생성
        let newTr = document.createElement('tr');
        // 테이블의 한 칸을 생성
        let newTdName = document.createElement('td');
        newTdName.innerHTML = userName;
        let newTdMajor = document.createElement('td');
        newTdMajor.innerHTML = major;

        // 항에 자식요소로 칸을 추가
        newTr.appendChild(newTdName);
        newTr.appendChild(newTdMajor);

        // 테이블에 자식요소로 추가
        tbody.appendChild(newTr);
        
    });    
}