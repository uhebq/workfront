window.onload = () => {

    const bttn = document.querySelector('#bttn');
    const notiBox = document.querySelector('#noti-box');

    // 버튼이 클릭되면 실행시길 함수를 정의
    bttn.addEventListener('click', () => {
        // notibox에 새로운 알림을 추가
        let noti = document.createElement('div');
        // class 속성 추가 (디자인)
        noti.classList.add('noti')
        noti.innerHTML = '알림 내용 표시!!!!!'

        // 화면에 출력
        // 자식 요소로 등록
        notiBox.appendChild(noti);

        // 2초 후 함수 실행
        setTimeout(() => {
            // 요소 삭제
            noti.remove();
        }, 2000);
    });
}