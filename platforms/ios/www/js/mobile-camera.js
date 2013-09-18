
$("#camera_btn").live('click', function(){

	navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
		destinationType: destinationType.FILE_URI,
		sourceType:Camera.PictureSourceType.SAVEDPHOTOALBUM
	});
	/*
    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    	destinationType: Camera.DestinationType.DATA_URL
	});
	*/
	function onSuccess(imageData) {
		console.log('yeah');
    	//var image = document.getElementById('myImage');
    	//image.src = "data:image/jpeg;base64," + imageData;
	}

	function onFail(message) {
		alert('Failed because: ' + message);
	}
});

   document.addEventListener("deviceready",onDeviceReady,false);

    // device APIs are available
    //
    function onDeviceReady() {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
    }



