'use strict';

function Runner () {}

/**
 * Loads data from AppData
 * 
 * @param  {AppData Instance} AppData 
 * 
 * @param  {String} stockId 
 * 
 * @return {AppData}      
 *    
 */
 
 //Variable Declarations
 var stockName; //Will contain the ticker name in order to check if user input is retrieved. 
 var currentPrice; //Will contain the stock's price value today.
 var yesterdayPrice; //Will contain the stock's price value yesterday.
 var priceChange; //Will contain the percent change of the price value compared to today and yesterday.
 var i = 0; //Initializing this variable for the auto-complete function.
 
Runner.loadData = function loadData(AppData, stockId){
 	var checks = 0;
	
	//Retrieve stock tickers from database.
	AppData.v1.Tickerlist.GET('json')
	.then(function(data){
		console.log(data);
		console.log("Number of objects: " + data.response.length);
		
		var lenthOfResponse= data.response.length;
		var tickers= new Array()
		for(i = 0;i < lenthOfResponse;i++){

        tickers[i]= data.response[i].Ticker
		}


		$(function autocomplete(){
			
		  // Set up auto-complete function pulling from StockRender data array
		  $("#autocomplete").autocomplete({
			lookup: tickers,
			onSelect: function (suggestion) {
			  var thehtml = '<strong>Currency Name:</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.data;
			  $('#outputcontent').html(thehtml);
			  $("#autocomplete").focus();
			}
		  });
		  

})
	});

	//-----------------------------------------
	// /v1/pricedata
	//-----------------------------------------
	AppData.v1.pricedata.GET(stockId)
	.then(function(data){
		
		currentPrice = data.response.data.slice(0,1)[0][1];
		yesterdayPrice = data.response.data.slice(1,2)[0][1];
		
		priceChange = ((currentPrice - yesterdayPrice)/ currentPrice) * 100;
		priceChange = Math.round(priceChange * 100) / 100
		
		//Check if data is retrieved.
			console.log("Stock Ticker (Undefined means default company A is used.): " + stockName);
			console.log("Current Price Value: " + currentPrice);
			console.log("Yesterday's Price Value: " + yesterdayPrice);
			console.log("Change in Price: " + priceChange + "%");

	}, function(jqXHR){

		throw new Error('Failed to load data!',jqXHR);
	}).then(function(){
		checks ++;
		if(checks === 2){
			Runner.toggleOverhead();
		}
	});

	return AppData;
};
            //This is for changing text size in settings
             var newTextSize = document.getElementById('inpText').value;
               var changeSize = '16px';
         if(newTextSize == 12){
          changeSize = '12px';
        }
        if(newTextSize == 13){
          changeSize = '13px';
        }
        if(newTextSize == 14){
          changeSize = '14px';
        }
        if(newTextSize == 15){
          changeSize = '15px';
        }
        if(newTextSize == 16){
          changeSize = '16px';
        }
        if(newTextSize == 17){
          changeSize = '17px';
        }
        if(newTextSize == 18){
          changeSize = '18px';
        }
        if(newTextSize == 19){
          changeSize = '19px';
        }
        if(newTextSize == 20){
          changeSize = '20px';
        }

		//finds which table row set you are changing
	var colorChangeType;
	Runner.colorType = function colorType(type){
	colorChangeType = type;
};
//changes the color of the rows
Runner.colorChange = function colorChange(){
     var txtcolor;
  if(colorChangeType == 'text'){
    txtcolor = document.getElementById('btnTextColor').value;
    txtcolor = '#' + txtcolor;
     var pLength = document.getElementsByTagName('p').length;
      for(var x = 0; x < pLength; x++){
         document.getElementsByTagName('p')[x].style.color = txtcolor;
      }
  }
   if(colorChangeType == 'scheme1'){
    txtcolor = document.getElementById('inpColorScheme1').value;
    txtcolor = '#' + txtcolor;
    var rowLength = document.getElementById('table1').rows.length;
    for(var x = 2; x < rowLength; x += 2){
      document.getElementById('table1').rows[x].style.background = txtcolor;
    }
  }
   if(colorChangeType == 'scheme2'){
    txtcolor = document.getElementById('inpColorScheme2').value;
    txtcolor = '#' + txtcolor;
    var rowLength = document.getElementById('table1').rows.length;
    for(var x = 1; x < rowLength; x += 2){
      document.getElementById('table1').rows[x].style.background = txtcolor;
    }
  }     
}




