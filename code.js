function doi() {
    let inputValue = +document.getElementById('inputValue').value;
    let from = +document.getElementById('from').value;
    let to = +document.getElementById('to').value;
    var result = 0;
    result = to * (inputValue / from);
    document.getElementById('output').value = result;
}

function decimalAdjust(){
    let a=Math.round(document.getElementById('output').value)
    document.getElementById('output').value=a;
}

function keyPress(event){
    if (event.keyCode==13){
        let inputValue = +document.getElementById('inputValue').value;
        let from = +document.getElementById('from').value;
        let to = +document.getElementById('to').value;
        var result = 0;
        result = to * (inputValue / from);
        document.getElementById('output').value = result;
    }
}
addEventListener('keypress',keyPress);