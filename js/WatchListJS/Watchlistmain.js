'use strict';


StockRender.AppRender.register({
	id: "49e90eee6ce1942a94136fc8db19319c",
	name: "StockWatchList",
	version: "4.0.0",
	defaults: {
		terminal: {
			x: 0,
			y: 0,
			w: 100,
			h: 100
		}
	},
	beforeRender: function () {
		console.log('running beforeRender!');
	},
	ready: function(AppMemory, AppData) {
		/*Defining Variables*/
		var last_input, stockname;

		/*Reading User-Data*/
		AppMemory.read('last_input')
			.success(function(data){
				if(!data) {
					AppMemory.write('last_input','A');
					last_input = 'A';
				} else {
					last_input = data;
				}
			})
			.error(function(err, data){
				if(err) {
					console.log('AppMemory not retrieved',data);
					AppMemory.write('last_input','A');
					last_input = 'A';
				}
			});

		/*Running Program*/
		Runner.loadData(AppData,last_input);

		/*Setting click events*/
		$('#autocomplete').keypress(function(e){
			if( e.which === 13 ) {
				Runner.loadData(AppData, $('#autocomplete')[0].value);
				return;
			}
		})

		//this is the text size change function
 var changeSize, isChanged;
$( "#inpText" ).change(function() {
  var newTextSize = document.getElementById('inpText').value;
  console.log(newTextSize);
  if(newTextSize == 12){
  	changeSize = '12px';
  	isChanged = true;
  }
  if(newTextSize == 13){
  	changeSize = '13px';
  	isChanged = true;
  }
  if(newTextSize == 14){
  	changeSize = '14px';
  	isChanged = true;
  }
  if(newTextSize == 15){
  	changeSize = '15px';
  	isChanged = true;
  }
  if(newTextSize == 16){
  	changeSize = '16px';
  	isChanged = true;
  }
  if(newTextSize == 17){
  	changeSize = '17px';
  	isChanged = true;
  }
  if(newTextSize == 18){
  	changeSize = '18px';
  	isChanged = true;
  }
  if(newTextSize == 19){
  	changeSize = '19px';
  	isChanged = true;
  }
  if(newTextSize == 20){
  	changeSize = '20px';
  	isChanged = true;
  }
});

			$(document).ready(function(){
								$("div").hide();
						});

$("#opener").click(function(){
								$("table").hide();
								$("div").show();
						});
			}
$("#closer").click(function(){
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
	}
});