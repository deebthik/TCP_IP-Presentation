#pragma strict

var tcp_title : GameObject;
var tcp_info : GameObject;
var selection_ring : GameObject;
var inner_ring : GameObject;

function Start () {
	
	tcp_title = GameObject.Find("TCP Title");
	tcp_info = GameObject.Find("TCP Info");
	selection_ring = GameObject.Find("Selection Ring Parent");
	inner_ring = GameObject.Find("Inner Ring Parent");

}

function Update () {

	tcp_info.GetComponent(TextMesh).text = "• TCP is a core protocol of the Internet protocol suite. It \n   originated in the initial network implementation in which \n   it complemented the IP.\n\n"
											+ "• TCP provides reliable, ordered, and error checked delivery \n   of a stream of octets between applications running on hosts \n   communicating over an IP network.\n\n"
											+ "• TCP is the protocol that major Internet applications such as \n   the World Wide Web, email, remote administration and file \n   transfer rely on.";

	
	if(Input.GetKeyDown(KeyCode.LeftArrow)){
	
		if(tcp_title.transform.position.x == 0){
		
			Back_To_Menu();
		
		}
	
	}

}



function Back_To_Menu(){
	
	iTween.MoveTo(tcp_title, iTween.Hash("position", Vector3(20, 6, 1), "time", 1));
	iTween.MoveTo(tcp_info, iTween.Hash("position", Vector3(-34.5, 5, 1), "time", 1));
	iTween.FadeTo(GameObject.Find("Orange Plane"), iTween.Hash("alpha", 0, "time", 2));
	
	yield WaitForSeconds(2);
	GameObject.Find("Orange Plane").transform.position.x = 100;
	GameObject.Find("Orange Halo").GetComponent(Animation).animation.Play("Halo_Animation_Reverse");
	yield WaitForSeconds(0.5);
	iTween.ScaleTo(selection_ring, iTween.Hash("scale", Vector3(1, 1, 1), "time", 0.25));
	
	yield WaitForSeconds(0.25);
	iTween.RotateTo(selection_ring, iTween.Hash("rotation", Vector3(0, 0, 180), "time", 1));

}