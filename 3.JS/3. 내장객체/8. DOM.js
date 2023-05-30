
// 페이지가 로드(이벤트 발생)된 이후 함수를 실행
window.onload = function(){

    // 버튼이 출력되면 함수를 실행
    btn1.addEventListener('click', function(){

        // 요소노드 생성
        let elementNode = document.createElement('h3');

        // 텍스트노드 생성
        let textNode = document.createTextNode('안녕하세요.');

        // 연결(자식요소로 등록)
        elementNode.appendChild(textNode);
        area1.appendChild(elementNode);

        area1.innerHTML += '<h3>innerHTML로도 가능하네!!'

    });

    // 텍스트 노드가 없는 요소 노드 생성
    // 요소의 속성을 설정하는 방법
    btn2.addEventListener('click', ()=>{
        
        // img 요소 노드 생성
        let imgNode = document.createElement('img');

        // 속성 설정하는 방법
        imgNode.src = 'images/morning.jpg';
        imgNode.setAttribute('width', '150px');
        imgNode.setAttribute('height', '100px');

        // 연결(자식요소로 추가)
        area2.appendChild(imgNode);

        area2.innerHTML += '<img src="images/morning.jpg" width = "150px" height = "100px">'
    });

    btn3.addEventListener('click', ()=>{
        area3.remove();

        // 이벤트가 발생한 요소
        let target = e.target;
        console.log(target);

        // 상위요소를 반환
        console.log(target.parentNode);

        // 상위요소의 자식노드를 삭제
        let delNode = document.getElementById('area1');
        target.parentNode.removeChild(delNode);
    });

    btn4.addEventListener('click', function(){
        // p 요소 성생
        // text node 생성
        let pNode = document.createElement('p');
        let textNode = document.createTextNode('신규 노드 추가');

        // 연결
        pNode.appendChild(textNode);

        // 부모요소 선택(body 선택)
        let body = document.querySelector('body');

        // 노드 선택(삽입하고 싶은 위치의 요소를 선택) h1 선택
        let h1 = document.querySelector('h1');
        
        // insertBefore(추가할 요소, 추가할 위치의 요소)
        // body.insertBefore(pNode, h1);
        body.insertBefore(pNode, btn2);
        body.appendChild(pNode);
    });
}