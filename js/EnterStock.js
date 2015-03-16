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
			  //Test to see if global variable is defined as input.value
			  console.log(stockName);
              // Show the span again
              span.style.display = "";

        //Test------------------------------------------------------------------------------
        var rowNum = document.getElementById("table1").rows.length;            
        if(inputStock == 'AAPL')
        {
            if(rowNum < 5) 
            {
             var table = document.getElementById("table1");
             var row = table.insertRow(3);
             var cell1 = row.insertCell(0);
             var cell2 = row.insertCell(1);
             var cell3 = row.insertCell(2);
             var cell4 = row.insertCell(3);
             cell1.innerHTML = "Apple";
             cell2.innerHTML = "$124.83";
             cell3.innerHTML = "+0.38";
             cell4.innerHTML = '<p>(o)</p>';
           }
        } else {
          console.log('Stock not found');    
          while(rowNum > 4) 
          {
             document.getElementById("table1").deleteRow(rowNum - 2);
             rowNum = document.getElementById("table1").rows.length; 
           }
        }
        //Test------------------------------------------------------------------------------
            }   
          }
        }
       
    }
  }
}
