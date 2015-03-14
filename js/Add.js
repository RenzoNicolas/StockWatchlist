'use strict';
function AddNewRow() {
    var table = document.getElementById("table1");
    var row = table.insertRow(2);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = '<p id="enterStock"><input id="autocomplete" type="text" name="currency" maxlength= "4" size= "4"><span id="stock">Stock Name</span><script> document.getElementById("autocomplete").style.display = "none"; </script>';
    cell2.innerHTML = "[Price Variable]";
    cell3.innerHTML = "[Change Variable]";
    cell4.innerHTML = '<span class="ion-close-circled" data-pack="default" onclick= "deleteRow(this)"></span>';
}