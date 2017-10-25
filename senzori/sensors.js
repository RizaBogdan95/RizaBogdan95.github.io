document.getElementById("id_logic_level_version").innerHTML="Logic level version: 2017.10.25.0";
window.addEventListener('deviceorientation',ondeviceorientation);
window.addEventListener('devicemotion',ondevicemotion);


function ondeviceorientation(event)
{
	document.getElementById("id_alpha").innerHTML=Math.round (event.alpha * 10)/10;
	document.getElementById("id_beta").innerHTML =Math.round (event.beta * 10)/10;
	document.getElementById("id_gamma").innerHTML =Math.round ( event.gamma * 10)/10;

}
function ondevicemotion(event)
{
	document.getElementById("id_acc").innerHTML ="Acc" + Math.round(event.acceleration.x * 10) / 10 + " " + Math.round(event.acceleration.y * 10) / 10+ " " + Math.round(event.acceleration.z * 10) / 10;
	var ag = event.accelerationIncludingGravity;
	var x_incl = 	Math.atan(ag.x / ag.z);
	var y_incl = 	Math.atan(ag.y / ag.z);
	document.getElementById("id_acc_g").innerHTML =" AccG" + Math.round(ag.x * 10) / 10 + " " + Math.round(ag.y * 10) / 10+ " " + Math.round(ag.z * 10) / 10 + "incl_x = "+ x_incl + "incl_y = "+ y_incl;	
}
