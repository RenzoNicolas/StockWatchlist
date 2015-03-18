'use strict';
function AddNewRow() {
    var table = document.getElementById("table1");
    var row = table.insertRow(2);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = " " + stockName;
    cell2.innerHTML = " " + currentPrice;
    cell3.innerHTML = " " + priceChange;
    cell4.innerHTML = '<span class="ion-minus-circled" data-pack="default" onclick= "deleteRow(this)"></span>';
}