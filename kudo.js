//repo and commit come from the caller
var url="https://api.github.com/repos/"+repo+"/commits/"+commit

fetch(url, {
	mode: 'cors'
})
.then(function(response) {
	return response.json();
}).then(function(json) {
	kudoMsg = json.commit.message;
	kudoMsg = kudoMsg.replace('^.*\n\n', '');
	commitMsgJSON = JSON.parse(kudoMsg);

	document.getElementById('kudo').innerHTML =
		"Kudo to:<br>" + commitMsgJSON.Name + "<BR>" +
		commitMsgJSON.Message +
	        "<img src=\"" + commitMsgJSON.Icon + "\"/>";
}).catch(function(error) {
	console.log(error);
	return "could not find kudo commit at "+url;
});
