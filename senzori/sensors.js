window.addEventListener('deviceorientation',ondeviceorientation);

function ondeviceorientation(event)
{
	document.getElementById("id_alpha").innerHTMLevent = event.alpha;
	document.getElementById("id_beta").innerHTMLevent = event.beta;
	document.getElementById("id_gamma").innerHTMLevent = event.gamma;

}
//--------------