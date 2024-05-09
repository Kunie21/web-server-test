window.onload = function() {
    document.getElementById("num1").innerHTML = Math.floor( Math.random() * 100 );
    document.getElementById("num2").innerHTML = Math.floor( Math.random() * 100 );
    document.getElementById("num3").innerHTML = Math.floor( Math.random() * 100 );
};

function sendData() {
    const form = document.createElement('form');
    form.method = 'post';
    form.action = "/api/v1/quiz";
    document.body.appendChild(form);
    
    const formField = document.createElement('input');
    formField.type = 'hidden';
    formField.name = "answer";
    var num = Number(document.getElementById("num1").textContent) + Number(document.getElementById("num2").textContent) + Number(document.getElementById("num3").textContent);
    var ans = parseInt(document.getElementById("ans").value); // Numberは数値に変換できたらする（7日→NaN）、parseIntは文字列から数値だけ取り出す（7日→7）
    if (num === ans) {
        formField.value = 2;
    } else {
        formField.value = 1;
    }

    form.appendChild(formField);

    form.submit();
}