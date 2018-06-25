document.addEventListener('DOMContentLoaded', function () {
    const submit = document.querySelector('input[type="submit"]');

    let cell = 0;
    submit.addEventListener('click', function (event) {
        event.preventDefault();
        if (document.querySelector('table tr')) {
            var s = document.querySelectorAll('table tr');
            for (var e = 0; e < s.length; e++) {
                s[e].remove();

                
            }
            makeGrid();
        } else {
            makeGrid();
        }
    });

    let cell1 = document.querySelector('table');
    cell1.addEventListener('click', function (event) {
        const color = document.querySelector('#color').value;
        event.target.style.backgroundColor = color;
    })

});

function makeGrid() {
    var myTable = document.querySelector('#myTable');
    const rows = document.querySelector('#gridheight').value;
    const cells = document.querySelector('#gridwidth').value;

    for (var i = 0; i < rows; i++) {
        var row = document.createElement('tr');
        for (var j = 0; j < cells; j++) {
            cell = document.createElement('td');
            cell.setAttribute('class', 'cells');
            row.appendChild(cell);
        }
        myTable.appendChild(row);
    }
}