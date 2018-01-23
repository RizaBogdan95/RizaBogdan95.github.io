document.getElementById("id_business_level_version").innerHTML="Business level version: 2017.12.06.0";

navigator.geolocation.getCurrentPosition(on_gps_success, on_error);
//-----------------------------
function on_gps_success(p)
{
	document.getElementById("id_p").innerHTML = "lat =" + p.coords.latitude + "long =" +p.coords.longitude;
	var map_obj =new  google.maps.Map(document.getElementById("id_map"));
	map_obj.setCenter({lat:p.coords.latitude,lng:p.coords.longitude});
	map_obj.setZoom(10);
 }

//--------------------------
function on_error(e)
{
	alert(e.code);
}
//------------------------------
//AIzaSyDk56ND45gz6Ht-VB1mI8FL2N8k2aTmhJg