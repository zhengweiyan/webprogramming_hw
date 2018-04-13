//alert(' ');


var vidHeight = 400;
var vidWidth = 500;
var maxResults = 8;

var output = '';
var videoId = 'MEENB3_9yUw';

// var output = '<li><iframe src=\"//www.youtube.com/embed/'+videoId+'\"></iframe></li>';
//var output = '<li><iframe height='+vidHeight+' width=' +vidWidth+' src=\"//www.youtube.com/embed/'+videoId+'\"></iframe></li>';

var description = 'HELLO VIDEO';
var output = '<div class=\"box col-md-3 col-sm-4 col-xs-12\">'+
'<iframe src=\"//www.youtube.com/embed/'+videoId+'\"></iframe>'+
'<p>'+description+'</p></div>';




$('#videos .container').append(output);
$('#videos .container').append(output);
$('#videos .container').append(output);
$('#videos .container').append(output);
$('#videos .container').append(output);
$('#videos .container').append(output);
$('#videos .container').append(output);
console.log(output);
console.log(document.getElementById('videos'));


function fillVideo(){
	var description = 'HELLO VIDEO';
	var output = '<iframe src=\"//www.youtube.com/embed/'+videoId+'\"></iframe>'+
	'<p>'+description+'</p></div>';
}


/*
$.each(data.items,function(i, item){
	console.log(item);
	videoTitle = item.snippet.title;

	output = '<li>'+videoTitle+'</li>';
	output = '<li><iframe src=\"//www.youtube.com/embed/'+videoId+'\"></iframe></li>';
	//Append to results list 
	$('#results').append(output);

	
})
*/