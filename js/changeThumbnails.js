


/*
<div class="row">
	<div class="box col-md-3 col-sm-4 col-xs-12">
		<a href="video.html"><img src="https://i.ytimg.com/vi/MEENB3_9yUw/sddefault.jpg"></a>
		<p>video 1 title</p>
	</div>
</div>
*/
function changeThumbnails(x){
	console.log('hi');
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		var response = JSON.parse(xhttp.responseText);
		var playlists = response.playlists;
		console.log(playlists[0]['items'][0]['snippet']['title']);
		console.log(playlists.length);

		var output = '';
		var thumb = '';
		i = x;
		console.log('HIHIHIHIHIHHIHH');
		console.log(i);
		//for(var i = 0; i < playlists.length ;i++){
			items = playlists[i]['items'];
			for(var j=0; j<items.length;j++){
				//console.log(playlists[0]['items'][0]['snippet']['title']);
				//output += '<div class=\"box col-md-3 col-sm-4 col-xs-12\">' +
						//'<a href=\"'++'\"><img src=\"https://i.ytimg.com/vi/'++'/'++'/sddefault.jpg'
				output += '<li>'+items[j]['snippet']['title']+'</li>';
				console.log(items[j]['snippet']['thumbnails']['standard']['url']);
				/*thumb += '<div class=\"box col-md-3 col-sm-4 col-xs-12\">' +
						'<a href=\"'+items[j]['snippet']['title']+'\"><img src=\"'+items[j]['snippet']['thumbnails']['standard']['url']+'\"></a>'+
						'<p>'+items[j]['snippet']['description']+'</p>';*/
				thumb += '<div class=\"box col-md-3 col-sm-4 col-xs-12\"><div class=\"subbox">' +
					'<a href=\"'+'video.html?channel='+i+'&v='+j+'\"><img src=\"'+items[j]['snippet']['thumbnails']['standard']['url']+'\"></a>'+
					'<p>'+items[j]['snippet']['title']+'</p></div></div>';
			}
	  	
		//}
		document.getElementById('videoList').innerHTML = thumb;//output;
		}
	};
	xhttp.open("GET", "../js/vid16.json", true);
	xhttp.send();

}