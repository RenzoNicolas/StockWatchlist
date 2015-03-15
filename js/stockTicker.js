function stockTicker() {
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
              inputStock = input.value;
              // Show the span again
              span.style.display = "";

	<p id="enterStock"><input id="autocomplete" type="text" name="currency" maxlength= "4" size= "4"/><span id="stock">Stock Name</span></input></p> <script> document.getElementById("autocomplete").style.display = "none"; </script>
}