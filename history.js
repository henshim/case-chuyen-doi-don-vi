let lichSu = [];

function displayHistory() {
    let str = '<tr>'
        + '<th>From</th>'
        + '<th>To</th>'
        + '<th>Kết quả</th>';
    for (let i = 0; i < lichSu.length; i++) {
        str += '<tr>'
            + '<td>' +  + '</td>'
            + '<td>' +  + '</td>'
            + '<td>' +  + '</td>'
            + '<td><button onclick="delHistory(' + i + ')">Delete</button></td>'
            + '</tr>';
    }
    document.getElementById('history').innerHTML = str;
}

function addHistory() {
    let History = document.getElementById('dauVao');

    let lichSu2 = History.value;

    lichSu.push(lichSu2);
    displayHistory();
}

function delHistory(index) {
    history.splice(index, 1);
    displayHistory();
}

displayHistory();