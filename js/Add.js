//'use strict';
function AddNewRow() {
    var table = document.getElementById("table1");
    var row = table.insertRow(2);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = '<input size= "4" maxlength= "4" id= "StockName">';
    cell2.innerHTML = "[Price]";
    cell3.innerHTML = "[Change]";
    cell4.innerHTML = '<p class= "DeleteRow" onclick= "deleteRow(this)">(x)</p>';
}