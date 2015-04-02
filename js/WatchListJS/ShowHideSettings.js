function swap(one, two) {
    document.getElementById(one).style.display = 'block';
    document.getElementById(two).style.display = 'none';
}

function settings(){
	document.getElementById('table1').addEventListener('click',function(e){
		swap('one','two');
	});
	document.getElementById('container').addEventListener('click',function(e){
		swap('two','one');
	});
}
