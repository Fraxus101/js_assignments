

function textchange() { 
document.getElementById ("text");
text.innerText = "Monkey D Luffy";
} 

var requests = 2;
var connection = 500
var request1 = document.getElementById ("request1");
var request2 = document.getElementById ("request2");

function remove1() {
    document.getElementById ("hidethis1");
    hidethis1.style.visibility = 'hidden';
    request1.innerText = --requests;
    request2.innerText = ++connection + '+';
}

function remove2() {
    document.getElementById ("hidethis2")
    hidethis2.style.visibility = 'hidden';
    request1.innerText = --requests;
    request2.innerText = ++connection + '+';

}








