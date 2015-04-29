$(document).ready(function(){
					$("div").hide();
			});
function toggle1() {
	$(document).ready(function(){
					$("table").hide();
					$("div").show();
			});
}
function toggle2() {
	$(document).ready(function(){
					$("div").hide();
					$("table").show();
					      if(isChanged == true){
      console.log(changeSize);
      var pLength = document.getElementsByTagName('p').length;
      for(var x = 0; x < pLength; x++){
         document.getElementsByTagName('p')[x].style.fontSize = changeSize;
         console.log("test 1");
      }
      var emLength = document.getElementsByTagName('em').length;
      for(var x = 0; x < emLength; x++){
      document.getElementsByTagName('em')[x].style.fontSize = changeSize;
      }
  	  	isChanged = false;
  	  }
			});
}
