var count1 = 9;
var count2 = 12;
var count3 = 9;
var elementcount1 = document.querySelector ("#counter1");
var elementcount2 = document.querySelector ("#counter2");
var elementcount3 = document.querySelector ("#counter3");


function add1() {
    count1++;
    elementcount1.innerText = count1 + " Like(s)"

}

function add2() {
    count2++,
    elementcount2.innerText = count2 + " like(s)"

}

function add3() {
    count3++,
    elementcount3.innerText = count3 + " like(s)"

}
