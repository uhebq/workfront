window.onload = function(){

    items = document.querySelector('#items');
    li = document.querySelector('li');

    let javaNode = document.createElement('li');
    let javaTextNode = document.createTextNode('Java');
    javaNode.appendChild(javaTextNode);
    items.insertBefore(javaNode, li);

    let oracleNode = document.createElement('li');
    let oracleTextNode = document.createTextNode('Oracle');
    oracleNode.appendChild(oracleTextNode);
    items.insertBefore(oracleNode, li);

    let jspNode = document.createElement('li');
    let jspTextNode = document.createTextNode('Jsp/Servlet');
    jspNode.appendChild(jspTextNode);
    items.appendChild(jspNode, li);

    let springNode = document.createElement('li');
    let springTextNode = document.createTextNode('Spring');
    springNode.appendChild(springTextNode);
    items.appendChild(springNode, li);





    /*
        <p>Java</p>
        <p>Oracle</p>
        <p>JSP/Servlet</p>
        <p>SPRING</p>
    */
   
    btn1.addEventListener('click', function(){
        let javaNode = document.createElement('p');
        // javaNode.innerHTML = 'Java'
        let javaTextNode = document.createTextNode('Java');

        // 텍스트 노드를 자식노드로 등록
        javaNode.appendChild(javaTextNode);

        // 부모 요소를 선택
        let body = document.querySelector('body');

        // 삽입할 위치의 요소 선택
        let p = document.querySelector('p');

        // 요소를 선택한 요소의 앞에 삽입
        body.insertBefore(javaNode, p);

        let oracleNode = document.createElement('p');
        let oracleTextNode = document.createTextNode('Oracle');
        oracleNode.appendChild(oracleTextNode);
        body.insertBefore(oracleNode, p);

        let jspNode = document.createElement('p');
        let jspTextNode = document.createTextNode('Jsp/Servlet');
        jspNode.appendChild(jspTextNode);
        body.appendChild(jspNode);

        let springNode = document.createElement('p');
        let springTextNode = document.createTextNode('Spring');
        springNode.appendChild(springTextNode);
        body.appendChild(springNode);

    });
    
}