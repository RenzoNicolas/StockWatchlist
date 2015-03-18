function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("table1").deleteRow(i);
}
