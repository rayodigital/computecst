addEventListener('DOMContentLoaded', inicio);


function inicio() 
{
    let btn_url = document.getElementById("search_url").addEventListener('click', search_url);
	let btn_ip = document.getElementById("search_ip").addEventListener('click', search_ip);
}

function search_url() 
{
	let url = document.getElementById('url').value;
	
	document.body.innerHTML += "<p><a target='_blank' href='https://dnschecker.org/?camp_opt=exact_match#A/" + url + "'> https://dnschecker.org/?camp_opt=exact_match#A/" + url + " </a></p>"
	document.body.innerHTML += "<p><a target='_blank' href='https://www.whois.com/whois/" + url + "'> https://www.whois.com/whois/" + url + " </a></p>"
	document.body.innerHTML += "<p><a target='_blank' href='https://sitereview.bluecoat.com/#/lookup-result/" + url + "'> https://sitereview.bluecoat.com/#/lookup-result/" + url + " </a></p>"
	document.body.innerHTML += "<p><a target='_blank' href='https://www.virustotal.com/gui/domain/" + url + "'> https://www.virustotal.com/gui/domain/" + url + " </a></p>"
	document.body.innerHTML += "<p><a target='_blank' href='https://www.abuseipdb.com/check/" + url + "'> https://www.abuseipdb.com/check/" + url + " </a></p>"
	document.body.innerHTML += "<p><a target='_blank' href='https://mxtoolbox.com/SuperTool.aspx?action=blacklist%3a" + url + "&run=toolpage'> https://mxtoolbox.com/SuperTool.aspx?action=blacklist%3a" + url + "&run=toolpage </a></p>"
	document.body.innerHTML += "<p><a target='_blank' href='https://www.urlvoid.com/scan/" + url + "'> https://www.urlvoid.com/scan/" + url + " </a></p>"
	document.body.innerHTML += "<p><a target='_blank' href='https://otx.alienvault.com/indicator/domain/" + url + "'> https://otx.alienvault.com/indicator/domain/" + url + " </a></p>"
	document.body.innerHTML += "<p><a target='_blank' href='https://www.criminalip.io/asset/search?query=" + url + "'> https://www.criminalip.io/asset/search?query=" + url + " </a></p>"
	document.body.innerHTML += "<p><a target='_blank' href='https://www.criminalip.io/domain/search?query=" + url + "&scan=full'> https://www.criminalip.io/domain/search?query=" + url + "&scan=full </a></p>"
	document.body.innerHTML += "<p><a target='_blank' href='https://talosintelligence.com/reputation_center/lookup?search=" + url + "'> https://talosintelligence.com/reputation_center/lookup?search=" + url + " </a></p>"
	document.body.innerHTML += "<p><a target='_blank' href='https://securitytrails.com/domain/" + url + "/dns'> https://securitytrails.com/domain/" + url + "/dns </a></p>"
	document.body.innerHTML += "<p><a target='_blank' href='https://www.ipqualityscore.com/threat-feeds/malicious-url-scanner/https%3A%2F%2F" + url + "'> https://www.ipqualityscore.com/threat-feeds/malicious-url-scanner/https%3A%2F%2F" + url + " </a></p>"
}


function search_ip() 
{
	let ip = document.getElementById('ip').value;
	
	document.body.innerHTML += "<p><a target='_blank' href='https://dnschecker.org/ip-location.php?ip=" + ip + "'> https://dnschecker.org/ip-location.php?ip=" + ip + " </a></p>"
	document.body.innerHTML += "<p><a target='_blank' href='https://ipinfo.io/" + ip + "'> https://ipinfo.io/" + ip + " </a></p>"
	document.body.innerHTML += "<p><a target='_blank' href='https://www.whois.com/whois/" + ip + "'> https://www.whois.com/whois/" + ip + " </a></p>"
	document.body.innerHTML += "<p><a target='_blank' href='https://sitereview.bluecoat.com/#/lookup-result/" + ip + "'> https://sitereview.bluecoat.com/#/lookup-result/" + ip + " </a></p>"
	document.body.innerHTML += "<p><a target='_blank' href='https://www.virustotal.com/gui/ip-address/" + ip + "'> https://www.virustotal.com/gui/ip-address/" + ip + " </a></p>"
	document.body.innerHTML += "<p><a target='_blank' href='https://www.abuseipdb.com/check/" + ip + "'> https://www.abuseipdb.com/check/" + ip + " </a></p>"
	document.body.innerHTML += "<p><a target='_blank' href='https://mxtoolbox.com/SuperTool.aspx?action=blacklist%3a" + ip + "&run=toolpage'> https://mxtoolbox.com/SuperTool.aspx?action=blacklist%3a" + ip + "&run=toolpage </a></p>"
	document.body.innerHTML += "<p><a target='_blank' href='https://otx.alienvault.com/indicator/ip/" + ip + "'> https://otx.alienvault.com/indicator/ip/" + ip + " </a></p>"
	document.body.innerHTML += "<p><a target='_blank' href='https://www.criminalip.io/asset/report/" + ip + "'> https://www.criminalip.io/asset/report/" + ip + " </a></p>"
	document.body.innerHTML += "<p><a target='_blank' href='https://www.ipqualityscore.com/free-ip-lookup-proxy-vpn-test/lookup/" + ip + "'> https://www.ipqualityscore.com/free-ip-lookup-proxy-vpn-test/lookup/" + ip + " </a></p>"
	document.body.innerHTML += "<p><a target='_blank' href='https://talosintelligence.com/reputation_center/lookup?search=" + ip + "'> https://talosintelligence.com/reputation_center/lookup?search=" + ip + " </a></p>"
	document.body.innerHTML += "<p><a target='_blank' href='https://securitytrails.com/list/ip/" + ip + "'> https://securitytrails.com/list/ip/" + ip + " </a></p>"
}



