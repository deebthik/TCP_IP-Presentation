#pragma strict

var ip_title : GameObject;
var ip_info : GameObject;
var selection_ring : GameObject;
var inner_ring : GameObject;

function Start () {
	
	ip_title = GameObject.Find("IP Title");
	ip_info = GameObject.Find("IP Info");
	selection_ring = GameObject.Find("Selection Ring Parent");
	inner_ring = GameObject.Find("Inner Ring Parent");

}

function Update () {

	ip_info.GetComponent(TextMesh).text = "• The IP is the principal communications protocol in the \n   Internet protocol suite for relaying datagrams across \n   network boundaries. \n\n"
											+ "• Its routing function enables internetworking, and essentially \n   establishes the Internet.\n\n"
											+ "• IP has the task of delivering packets from the source host \n   to the destination host solely based on the IP addresses in \n   the packet headers.";

	
	if(Input.GetKeyDown(KeyCode.LeftArrow)){
	
		if(ip_title.transform.position.x == 0){
		
			Back_To_Menu();
		
		}
	
	}

}



function Back_To_Menu(){
	
	iTween.MoveTo(ip_title, iTween.Hash("position", Vector3(-20, 5.75, 1), "time", 1));
	iTween.MoveTo(ip_info, iTween.Hash("position", Vector3(15, 4.5, 1), "time", 1));
	iTween.FadeTo(GameObject.Find("Blue Plane"), iTween.Hash("alpha", 0, "time", 2));
	
	yield WaitForSeconds(2);
	GameObject.Find("Blue Plane").transform.position.x = 100;
	GameObject.Find("Blue Halo").GetComponent(Animation).animation.Play("Halo_Animation_Reverse");
	yield WaitForSeconds(0.5);
	iTween.ScaleTo(selection_ring, iTween.Hash("scale", Vector3(1, 1, 1), "time", 0.25));
	
	yield WaitForSeconds(0.25);
	iTween.RotateTo(selection_ring, iTween.Hash("rotation", Vector3(0, 0, 180), "time", 1));

}