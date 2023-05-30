window.onload = function(){
    // container, order, orderInfo
    let container = document.querySelector('#container');
    let order = document.querySelector('#order');
    let orderInfo = document.querySelector('#orderInfo');

    order.addEventListener('click', function(){
        let p = document.createElement('p');
        let innerTxt = document.querySelector('#container > h2').innerTxt;
        let textNode = document.createTextNode(innerTxt);

        p.appendChild(textNode);
        p.style.fontSize = '0.8em';
        p.style.color = 'blue';
        p.style.fontWeight = 800;
        orderInfo.appendChild(p);

    });
}