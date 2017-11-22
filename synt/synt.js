document.getElementById("id_logic_level_version").innerHTML="Business level version: 2017.11.22.1";

var synt  = window.speechSynthesis;

//---------------------------------------------------

function get_voices()
{
	var voices =synt.getVoices();
	for (var i = 0; i < voices.length; i++) {
		var s =document.createElement("option");
	e.text=voices[i].lang;
	document.getElementById("id_voices").add(e);


}
}
function speak()
{
	var enunt=new SpeechSynthesisUtterance();
	enunt.text=document.getElementById("id_text").value;
	enunt.text = document.getElementById("id_text").value;
	synt.speak(enunt);
}
//---------------------