/* https://developer.mozilla.org/en-US/docs/Web/API/URL/searchParams */
/*
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
*/

function getVideo(){
	//alert('hi');
	var params = (new URL(document.location)).searchParams;
	console.log(params.get("a"));
	var channel=params.get("channel");
	var v = params.get("v");

	var frame= document.getElementById('videoFrame');

	
	frame.src="https://www.youtube.com/embed/zzfCVBSsvqA?enablejsapi=1";

	var captionList = document.getElementById('captionList');
	var output='';

	/*
	console.log(frame);
	console.log(channel);
	console.log(v);
	*/



	




	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		var response = JSON.parse(xhttp.responseText);
		var playlists = response.playlists;
		//console.log(playlists[0]['items'][0]['snippet']['title']);
		//console.log(playlists.length);
		//console.log(playlists[0]['items'][0]['captions'][0]);
		//console.log(playlists[0]['items'][7]['captions'][0]['txt']);
		var vid = playlists[channel]['items'][v];
		frame.src = "https://www.youtube.com/embed/" + vid['snippet']['resourceId']['videoId']+'?enablejsapi=1';
		console.log(frame.src);
		document.getElementById('videoTitle').innerHTML = vid['snippet']['title'];


/*
		var tag = document.createElement('script');
	  tag.id = 'iframe-demo';
	  tag.src = 'https://www.youtube.com/iframe_api';
	  var firstScriptTag = document.getElementsByTagName('script')[0];
	  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

		  var player;
		  function onYouTubeIframeAPIReady() {
		    player = new YT.Player('videoFrame', {
		        events: {
		          'onReady': onPlayerReady,
		          'onStateChange': onPlayerStateChange
		        }
		    });
		  }
		  function onPlayerReady(event) {
		    document.getElementById('videoFrame').style.borderColor = '#FF6D00';
		  }

		  function changeBorderColor(playerStatus) {
		    var color;
		    if (playerStatus == -1) {
		      color = "#37474F"; // unstarted = gray
		    } else if (playerStatus == 0) {
		      color = "#FFFF00"; // ended = yellow
		    } else if (playerStatus == 1) {
		      color = "#33691E"; // playing = green
		    } else if (playerStatus == 2) {
		      color = "#DD2C00"; // paused = red
		    } else if (playerStatus == 3) {
		      color = "#AA00FF"; // buffering = purple
		    } else if (playerStatus == 5) {
		      color = "#FF6DOO"; // video cued = orange
		    }
		    if (color) {
		    	console.log(color);
		      document.getElementById('videoFrame').style.borderColor = color;
		    }
		  }
		  function onPlayerStateChange(event) {
		    changeBorderColor(event.data);
		  }
		  */




		//Captions
		for(var i=0; i<vid['captions'].length; i++){
			console.log(vid['captions'][i]['start']);
			console.log(vid['captions'][i]['dur']);
			console.log(vid['captions'][i]['txt']);
			output += '<a href=\"#\" onclick=\"player.playVideo()\"><li>'+vid['captions'][i]['txt']+'</li>';
			//output += '<a href=\"#\" onclick=\"alert(1)\"><li>'+vid['captions'][i]['txt']+'</li>';

		}
		captionList.innerHTML = output;

		}
	};
	xhttp.open("GET", "../js/vid16.json", true);
	xhttp.send();

	
}
