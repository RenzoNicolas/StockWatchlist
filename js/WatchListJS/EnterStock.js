//'use strict';
var stockName; 
window.onload = function() {
  document.getElementById('enterStock').onclick = function(event) {
    var span, input, text;
    // Get the event (handle MS difference)
    event = event || window.event;
    // Get the root element of the event (handle MS difference)
    span = event.target || event.srcElement;
    input = document.getElementById("autocomplete");
    // If it's a span...
    if (span && span.tagName.toUpperCase() === "SPAN") {
      // Hide it
      span.style.display = "none";
      //Show input
      input.value = "";
      input.style.display = "";
      input.style.width = "100px";
      // Get its text
      text = span.innerHTML;
      // Focus it, hook blur to undo
      input.focus();
      input.onkeypress = function(event) {
        if(input.value.length !== 0){
          if(event.keyCode == 13){
            console.log('Enter was pressed');
            input.style.display = "none";
            console.log('User entered: ', input.value);
            // Update the span
            span.innerHTML = input.value;
      		  stockName = input.value;
            // Show the span again
            span.style.display = "";

            // Update rows html, uses the setTimeout() method to account for small amount of la g during data retrieval
            setTimeout(function AddNewRow() {
					var table = document.getElementById("table1");
					var row = table.insertRow(2);
					var cell1 = row.insertCell(0);
					var cell2 = row.insertCell(1);
					var cell3 = row.insertCell(2);
					var cell4 = row.insertCell(3);
					
					if (stockName == null) {
					cell1.innerHTML = "[Stock Ticker]";
					cell2.innerHTML = "[Price Value]";
					cell3.innerHTML = "[Change in Value]";
					cell4.innerHTML = '<p class= "DeleteRow" onclick= "deleteRow(this)">(x)</p>';
					} else {
					cell1.innerHTML = " " + stockName;
					cell2.innerHTML = " " + currentPrice;
					cell3.innerHTML = " " + priceChange;
					cell4.innerHTML = '<p class= "DeleteRow" onclick= "deleteRow(this)">(x)</p>';
					}
				}, 1500);
            }   
          }
        } 
       
    }
  }
}
