function wholeIncrement(){
    let whole = document.getElementById("whole").innerHTML;
    if(whole.length<4) document.getElementById("whole").innerHTML=  parseInt(whole)+1;

}

function wholeDecrement(){
    let whole = document.getElementById("whole").innerHTML;
    if(whole.length<4) document.getElementById("whole").innerHTML=  parseInt(whole)-1;

}

function fractionIncrement(){
    let fraction = document.getElementById("fraction").innerHTML;
    if(fraction.length<2 && fraction>=0) {
        let addednumber = parseInt(fraction)+1;
        if (addednumber===10){
            wholeIncrement();
            document.getElementById("fraction").innerHTML=0;
        }else{
            document.getElementById("fraction").innerHTML= addednumber;
        }
    };

}

function fractionDecrement(){
    let fraction = document.getElementById("fraction").innerHTML;
    if(fraction.length<4 && parseInt(fraction)>0 ) {
        document.getElementById("fraction").innerHTML= parseInt(fraction)-1;
    }else{
        document.getElementById("fraction").innerHTML=9
    }

}
