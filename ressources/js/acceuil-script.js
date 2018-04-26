








function storeData() {
	var inputName = document.getElementById("Name").value
	var inputPass = document.getElementById("pass").value
	var mdpAndName = {user: inputName, password: inputPass}
	db.collection("Users").doc("tow").set({
	    name: mdpAndName,

	})
	.then(function() {
	    console.log("Document successfully written!");
	})
	.catch(function(error) {
	    console.error("Error writing document: ", error);
	});
}


var db = firebase.firestore();



