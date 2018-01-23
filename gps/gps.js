document.getElementById("id_business_level_version").innerHTML="Business level version: 2017.12.06.0";

navigator.geolocation.getCurrentPosition(on_gps_success, on_error);
//-----------------------------
function on_gps_success(p)
{
	document.getElementById("id_p").innerHTML = "lat =" + p.coords.latitude + "long =" +p.coords.longitude;
	var map_str = "https://maps.googleapis.com/maps/api/staticmap?center" + p.coords.latitude +","+p.coords.longitude+"&zoom=10&size=320x420&key=AIzaSyDk56ND45gz6Ht-VB1mI8FL2N8k2aTmhJg";
	document.getElementById("id_gps_map").setAttribute("src",map_str);

 }
//--------------------------
function on_error(e)
{
	alert(e.code);
}
//------------------------------
//AIzaSyDk56ND45gz6Ht-VB1mI8FL2N8k2aTmhJg