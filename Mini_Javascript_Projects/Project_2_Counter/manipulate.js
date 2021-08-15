/*
function decrement(){
    var count = document.getElementById("counter-display");
    var value = parseInt(count.innerHTML) - 1;
    check(value);
}

function resetToZero(){
    var count = document.getElementById("counter-display");
    count.innerHTML = 0;
    count.style.color = "black";
}

function increment(){
    var count = document.getElementById("counter-display");
    var value = parseInt(count.innerHTML) + 1;
    check(value);  
}

function check(value){
    var count = document.getElementById("counter-display");
    if(value>0){
        count.innerHTML = value;
        count.style.color= "green";
    }else if (value < 0) {
        count.innerHTML = value;
        count.style.color = "red";
    }else {count.innerHTML = 0;
    count.style.color = "black";
    }
}
*/

var count =0;
let value = document.querySelector("#counter-display");
let btns = document.querySelectorAll(".btn");

btns.forEach(function(btn) {
    btn.addEventListener("click", function(e){
        const styles= e.currentTarget.classList ;
        

        if (styles.contains("decrease"))  count--;
        else if (styles.contains("increase")) count++;
        else count = 0;


        if (count> 0) value.style.color = "green";
        else if (count < 0) value.style.color = "red";
        else value.style.color = "black";

        value.innerHTML = count;
    })
})

