const HEXVALUES = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
function generateColor(){

    var generatedColor ="#"
    for (var i = 0; i < 6; i++) {
        generatedColor += HEXVALUES[Math.floor(Math.random() * 16)];
    }
    var colorHexCode = document.getElementById("colorCode");
    //colorHexCode is a Text that displays the generated color Hex value
    colorHexCode.innerHTML = generatedColor;
    generateButton = document.getElementById("generate");
    generateButton.style.color = generatedColor;
    document.body.style.backgroundColor = generatedColor;
}