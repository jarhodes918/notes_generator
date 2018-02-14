function addnote() {


	// Create variables
    var xhttp = new XMLHttpRequest();
	var note = {subject: document.getElementById("subject").value,
note:  document.getElementById("note").value	};
	
	//note.subject = document.getElementById("subject").value;
	//note.note = document.getElementById("note").value
	
	alert("Subject: " + note.subject);

    xhttp.onreadystatechange = function () {
alert("before add if");
        if (this.readyState == 4 && this.status == 201) {
alert("in add if");

            var result = JSON.parse(this.responseText);

            document.getElementsByName("result").value = "Note added successfully";
        } else {
alert("in add else");
            document.getElementsByName("result").value = "Note was not added successfully";
		}
    };
alert("after add if");
    xhttp.open("POST", "/input", true); 
    xhttp.send(JSON.stringify(note));
alert("leaving add");
}

function deletenote() {

alert("in here");

	// Create variables
    var subject = document.getElementById("subject").value;
    var note = document.getElementById("note").value;
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            var result = JSON.parse(this.responseText);

            document.getElementsById("result").value = "Note deleted successfully";
        } else {
            document.getElementsById("result").value = "Note was not deleted successfully";
		}
    };
    xhttp.open("DELETE", "/input", true);
    xhttp.send();
}

