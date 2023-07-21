addEventListener('DOMContentLoaded', inicio);






function inicio() {
    let button = document.getElementById("go").addEventListener('click', search);
}

function search() {
	let url = document.getElementById('url').value;
	https://www.whois.com/whois/google.com
	document.body.innerHTML = "<p><a target='_blank' href='https://www.whois.com/whois/" + url + "'> Whois </a></p>"
	document.body.innerHTML += "<p><a target='_blank' href='https://sitereview.bluecoat.com/#/lookup-result/" + url + "'> Symatec URL </a></p>"
	document.body.innerHTML += "<p><a target='_blank' href='https://www.virustotal.com/gui/domain/" + url + "'> VirusTotal URL </a></p>"
	document.body.innerHTML += "<p><a target='_blank' href='https://www.abuseipdb.com/check/" + url + "'> AbuseIPDB - IP </a></p>"
	document.body.innerHTML += "<p><a target='_blank' href='https://dnschecker.org/?camp_opt=exact_match#A/" + url + "'> DNS Checker </a></p>"
	document.body.innerHTML += "<p><a target='_blank' href='https://mxtoolbox.com/SuperTool.aspx?action=blacklist%3a" + url + "&run=toolpage'> MxToolbox </a></p>"



	
}



