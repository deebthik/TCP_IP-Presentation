#pragma strict

var ips_title : GameObject;
var ips_info : GameObject;
var selection_ring : GameObject;
var inner_ring : GameObject;

function Start () {
	
	ips_title = GameObject.Find("IPS Title");
	ips_info = GameObject.Find("IPS Info");
	selection_ring = GameObject.Find("Selection Ring Parent");
	inner_ring = GameObject.Find("Inner Ring Parent");

}

function Update () {

	ips_info.GetComponent(TextMesh).text = "• The Internet Protocol Suite is the computer networking \n   model and set of communications protocols used on the \n   Internet and similar computer networks.\n\n"
											+ "• TCP/IP provides end-to-end connectivity specifying how \n   data should be packetized, addressed, transmitted, routed \n   and received at the destination.\n\n"
											+ "• The TCP/IP model and related protocol models are \n   maintained by the Internet Engineering Task Force(IETF).";

	
	if(Input.GetKeyDown(KeyCode.LeftArrow)){
	
		if(ips_title.transform.position.x == 0){
		
			Back_To_Menu();
		
		}
	
	}

}



function Back_To_Menu(){
	
	iTween.MoveTo(ips_title, iTween.Hash("position", Vector3(-20, 5.75, 1), "time", 1));
	iTween.MoveTo(ips_info, iTween.Hash("position", Vector3(15, 4.5, 1), "time", 1));
	iTween.FadeTo(GameObject.Find("Green Plane"), iTween.Hash("alpha", 0, "time", 2));
	
	yield WaitForSeconds(2);
	GameObject.Find("Green Plane").transform.position.x = 100;
	GameObject.Find("Green Halo").GetComponent(Animation).animation.Play("Halo_Animation_Reverse");
	yield WaitForSeconds(0.5);
	iTween.ScaleTo(selection_ring, iTween.Hash("scale", Vector3(1, 1, 1), "time", 0.25));
	
	yield WaitForSeconds(0.25);
	iTween.RotateTo(selection_ring, iTween.Hash("rotation", Vector3(0, 0, 180), "time", 1));

}