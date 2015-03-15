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
 
 var stockName;
 var currentPrice;
 var yesterdayPrice;
 var priceChange;
 
Runner.loadData = function loadData(AppData, stockId){
 	var checks = 0;

	//-----------------------------------------
	// /v1/pricedata
	//-----------------------------------------
	AppData.v1.pricedata.GET(stockId)
	.then(function(data){
		
		stockName = input;
		
		currentPrice = data.response.data.slice(0,1)[0][1];
		yesterdayPrice = data.response.data.slice(1,2)[0][1];
		
		priceChange = ((currentPrice - yesterdayPrice)/ currentPrice) * 100;
		priceChange = Math.round(change * 100) / 100
		
		//Check if data is retrieved.
			console.log(stockName);
			console.log(input);
			console.log(currentPrice);
			console.log(yesterdayPrice);
			console.log(change + "%");

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

/**
 * Toggles the overhead animation
 * @return {Number} old opacity settings
 */
Runner.toggleOverhead = function toggleOverhead() {

	var op = Math.ceil(parseFloat($('.overhead span').css('opacity')));

 	if( op === 1){
 		$('.overhead').css({height:0});
 		$('.overhead div').css({opacity:0});
 		$('.overhead span').css({opacity:0});
 	} else if( op === 0 ) {
 		$('.overhead').css({height:'100%'});
 		$('.overhead div').css({opacity:1});
 		$('.overhead span').css({opacity:1});		
 	}

 	return op;
};
