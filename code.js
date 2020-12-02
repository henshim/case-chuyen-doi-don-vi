function doi() {
    let inputValue = +document.getElementById('inputValue').value;
    let from = +document.getElementById('from').value;
    let to = +document.getElementById('to').value;
    var result = 0;
    result = to * (inputValue / from);
    document.getElementById('output').value = result;
}

function decimalAdjust(){
    let a=Math.ceil(document.getElementById('output').value)
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

document.querySelector('.boby').onmousemove=(e)=> {
    const x = e.pageX - e.target.offsetLeft
    const y = e.pageY - e.target.offsetTop;

    e.target.style.setProperty('--x', `${x}px`)
    e.target.style.setProperty('--y', `${y}px`)
}