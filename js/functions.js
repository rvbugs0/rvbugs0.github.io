function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}


function findColors(URL)
{
	 $.ajax({
	 	type: 'GET',
	    url: "Modules.php",
		data:{"URL":URL},
	    crossOrigin:true,
	    crossDomain: true,
	    headers: {
                    'Access-Control-Allow-Origin': '*'
                },
	    success: function(responseData, textStatus, jqXHR) {
	        var value = responseData.someKey;
	        alert("success");
	    	// console.log("success "+JSON.stringify(responseData));
	    	console.log("success "+responseData);
	    },
	    dataType:'text/plain',
	    error: function (responseData, textStatus, errorThrown) {
	        // console.log("error : "+JSON.stringify(responseData)+"--"+errorThrown);
	        alert('POST failed.');
			console.log("error : "+responseData+"--"+errorThrown);
	        
	    }
     });
}

findColors("https://www.youtube.com");
