addEventListener('DOMContentLoaded', inicio);






function inicio() {
    let button = document.getElementById("go").addEventListener('click', search);
}

function search() {
	let url = document.getElementById('url').value;
	https://www.whois.com/whois/google.com
	document.body.innerHTML = "<p><a target='_blank' href='https://www.whois.com/whois/" + url + "'> https://www.whois.com/whois/" + url + " </a></p>"
	document.body.innerHTML += "<p><a target='_blank' href='https://sitereview.bluecoat.com/#/lookup-result/" + url + "'> https://sitereview.bluecoat.com/#/lookup-result/" + url + " </a></p>"
	document.body.innerHTML += "<p><a target='_blank' href='https://www.virustotal.com/gui/domain/" + url + "'> https://www.virustotal.com/gui/domain/ " + url + " </a></p>"
	document.body.innerHTML += "<p><a target='_blank' href='https://www.abuseipdb.com/check/" + url + "'> https://www.abuseipdb.com/check/" + url + " </a></p>"
	document.body.innerHTML += "<p><a target='_blank' href='https://mxtoolbox.com/SuperTool.aspx?action=blacklist%3a" + url + "&run=toolpage'> https://mxtoolbox.com/SuperTool.aspx?action=blacklist%3a" + url + "&run=toolpage </a></p>"
	document.body.innerHTML += "<p><a target='_blank' href='https://sitecheck.sucuri.net/?scan=" + url + "'> https://sitecheck.sucuri.net/?scan=" + url + " </a></p>"
	document.body.innerHTML += "<p><a target='_blank' href='https://www.urlvoid.com/scan/" + url + "'> https://www.urlvoid.com/scan/" + url + " </a></p>"
	document.body.innerHTML += "<p><a target='_blank' href='https://dnschecker.org/?camp_opt=exact_match#A/" + url + "'> https://dnschecker.org/?camp_opt=exact_match#A/" + url + " </a></p>"
	
}



