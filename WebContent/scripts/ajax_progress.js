var databox;
addEventListener('load',initiate);
function initiate(){
	databox = document.getElementById('databox');
	var button = document.getElementById('button');
	
	button.addEventListener('click', read);
		
}

function read(){
	var url = "data/trialer.ogg";
	var request = new XMLHttpRequest();
	request.addEventListener('loadstart',start);
	request.addEventListener('progress',status);
	request.addEventListener('load',show);
	// for image uploading : - request.responseType= 'blob';
	// in progress code request.addEventListner('progress','inProg');
	request.open("GET", url, true);
	request.send(null);	
}

function start(e){
	databox.innerHTML = "<progress value='0' max='100'>0%</progress>";
}
function status(e){
	if(e.lengthComputable){
		var per = e.loaded/e.total * 100 ;
		var progressbar = databox.querySelector('progress');
		progressbar.value = per;
		progressbar.innerHTML = per + "%";
	}
}

function show(e){
	var data =  e.target;
	alert(data.status);
	if(data.status == 200){
		alert(data);
		databox.innerHTML = 'DONE';
		// used for getting the URL of the source image when response type is blob
		//this can be used as the <img> tag src attribute value
		//URL.createObjectURL(data.response);
	}
	
}