#pragma strict

var half_ring : GameObject;
var inner_half_ring : GameObject;
var differences : GameObject;
var selection_ring : GameObject;
var tcp_ip_text : GameObject;
var thank_you : GameObject;
var current_difference : int;
var rings : GameObject;

function Start () {
	
	half_ring = GameObject.Find("Half Ring Parent");
	inner_half_ring = GameObject.Find("Inner Half Ring Parent");
	differences = GameObject.Find("Differences");
	selection_ring = GameObject.Find("Selection Ring Parent");
	tcp_ip_text = GameObject.Find("TCP/IP Text");
	thank_you = GameObject.Find("Thank You");
	rings = GameObject.Find("Rings");
	current_difference = 0;
	
}

function Update () {

	if(GameObject.Find("Differences").transform.position == Vector3(0, -4.8, 0.65) && Intro.Check_Rotation_Within_Ranges(half_ring, "z", 0)){

		if(Input.GetKeyDown(KeyCode.Alpha1) && current_difference != 1){
			
			Assign_Difference_Info("TCP is responsible", "for the data delivery", "of a packet.", "IP is responsible \nfor the logical \naddressing.");
			
			Rotate_Differences("1");
			
			current_difference = 1;
		
		}

		if(Input.GetKeyDown(KeyCode.Alpha2) && current_difference != 2){
	
			Assign_Difference_Info("TCP guarantees", "delivery of data to", "an address.", "IP obtains that \naddress.");
	
			Rotate_Differences("2");
		
			current_difference = 2;
		
		}
		
		if(Input.GetKeyDown(KeyCode.Alpha3) && current_difference != 3){
			
			Assign_Difference_Info("Routing protocol", "", "", "Routed protocol");
			
			Rotate_Differences("3");
			
			current_difference = 3;
		
		}
		
		if(Input.GetKeyDown(KeyCode.Alpha4) && current_difference != 4){
			
			Assign_Difference_Info("It runs on the", "Transport Layer.", "", "It runs on the \nNetwork Layer.");
			
			Rotate_Differences("4");
			
			current_difference = 4;
		
		}
		
		if(Input.GetKeyDown(KeyCode.Alpha5) && current_difference != 5){
			
			Assign_Difference_Info("It is a connection-", "oriented protocol.", "", "It is a \nconnectionless \nprotocol.");
			
			Rotate_Differences("5");
			
			current_difference = 5;
		
		}
		
		
		if(Input.GetKeyDown(KeyCode.RightArrow)){
		
			Empty_Differences_Info();
			
			iTween.RotateTo(inner_half_ring, iTween.Hash("rotation", Vector3(0, 0, -3600), "time", 0.5));
			iTween.MoveTo(differences, iTween.Hash("position", Vector3(0, 1, 9), "time", 1));
			Move_Differences();
			
			Model_Animation();
		
		}
		
		if(Input.GetKeyDown(KeyCode.LeftArrow)){
		
			Empty_Differences_Info();
			
			Differences_Zoom_Out();
		
		}
	
	}
	
	

}

function Rotate_Back_Half_Ring(){

	yield WaitForSeconds(0.375);
	iTween.RotateTo(half_ring, iTween.Hash("rotation", Vector3(0, 0, 0), "time", 0.75));

}

function Move_Differences(){
	
	yield WaitForSeconds(1);
	iTween.RotateTo(differences, iTween.Hash("rotation", Vector3(0, 0, 720), "time", 2));
	iTween.MoveTo(differences, iTween.Hash("position", Vector3(-40, 1, 9), "time", 2));

}

function Fix_Inner_Half_Ring_Rotation(z_angle : float){

	yield WaitForSeconds(1.1);
	
	inner_half_ring.transform.eulerAngles.z = z_angle;

}

function Rotate_Differences(serial_number : String){

	GameObject.Find("TCP Difference Title 1").GetComponent(TextMesh).text = "TCP";
	GameObject.Find("TCP Difference Title 2").GetComponent(TextMesh).text = "TCP";
	
	GameObject.Find("IP Difference Title 1").GetComponent(TextMesh).text = "IP";
	GameObject.Find("IP Difference Title 2").GetComponent(TextMesh).text = "IP";

	iTween.RotateTo(half_ring, iTween.Hash("rotation", Vector3(0, 0, 216), "time", 0.75));
	Rotate_Back_Half_Ring();
	
	if(Intro.Check_Rotation_Within_Ranges(inner_half_ring, "z", 0)){
	
		iTween.RotateTo(inner_half_ring, iTween.Hash("rotation", Vector3(0, 0, -179.999), "time", 1));
		Fix_Inner_Half_Ring_Rotation(180);
	
	}
	
	if(Intro.Check_Rotation_Within_Ranges(inner_half_ring, "z", 180)){
	
		iTween.RotateTo(inner_half_ring, iTween.Hash("rotation", Vector3(0, 0, 0.001), "time", 1));
		Fix_Inner_Half_Ring_Rotation(0);
	
	}
	
	yield WaitForSeconds(0.5);
	GameObject.Find("Differences Serial Number").GetComponent(TextMesh).text = serial_number;
	
}

function Assign_Difference_Info(tcp1 : String, tcp2 : String, tcp3 : String, ip : String){

	if(inner_half_ring.transform.eulerAngles.z >= -0.1 && inner_half_ring.transform.eulerAngles.z <= 0.1){
	
		GameObject.Find("TCP Difference Info 2 1").GetComponent(TextMesh).text = tcp1;
		GameObject.Find("TCP Difference Info 2 2").GetComponent(TextMesh).text = tcp2;
		GameObject.Find("TCP Difference Info 2 3").GetComponent(TextMesh).text = tcp3;
		
		GameObject.Find("IP Difference Info 2").GetComponent(TextMesh).text = ip;
	
	}
	
	if(inner_half_ring.transform.eulerAngles.z >= 179.9 && inner_half_ring.transform.eulerAngles.z <= 180.1){
	
		GameObject.Find("TCP Difference Info 1 1").GetComponent(TextMesh).text = tcp1;
		GameObject.Find("TCP Difference Info 1 2").GetComponent(TextMesh).text = tcp2;
		GameObject.Find("TCP Difference Info 1 3").GetComponent(TextMesh).text = tcp3;
		
		GameObject.Find("IP Difference Info 1").GetComponent(TextMesh).text = ip;
	
	}

}

function Differences_Zoom_Out(){

	iTween.MoveTo(differences, iTween.Hash("position", Vector3(0, 1, 9), "time", 1));
	
	yield WaitForSeconds(1);
	
	iTween.MoveTo(rings, iTween.Hash("position", Vector3(0, 1, 9), "time", 2));
	iTween.MoveTo(differences, iTween.Hash("position", Vector3(40, 1, 9), "time", 2));
	iTween.RotateTo(rings, iTween.Hash("rotation", Vector3(0, 0, -1080), "time", 2));
	iTween.RotateTo(differences, iTween.Hash("rotation", Vector3(0, 0, -1080), "time", 2));

}

function Empty_Differences_Info(){

	GameObject.Find("Differences Serial Number").GetComponent(TextMesh).text = "";
			
	GameObject.Find("TCP Difference Info 1 1").GetComponent(TextMesh).text = "";
	GameObject.Find("TCP Difference Info 1 2").GetComponent(TextMesh).text = "";
	GameObject.Find("TCP Difference Info 1 3").GetComponent(TextMesh).text = "";
	GameObject.Find("IP Difference Info 1").GetComponent(TextMesh).text = "";
	
	GameObject.Find("TCP Difference Info 2 1").GetComponent(TextMesh).text = "";
	GameObject.Find("TCP Difference Info 2 2").GetComponent(TextMesh).text = "";
	GameObject.Find("TCP Difference Info 2 3").GetComponent(TextMesh).text = "";
	GameObject.Find("IP Difference Info 2").GetComponent(TextMesh).text = "";

}

function Model_Animation(){

	yield WaitForSeconds(1.75);
	iTween.MoveTo(GameObject.Find("TCP/IP Four-Layer Model Title"), iTween.Hash("position", Vector3(0, 8.25, 0), "isLocal", true, "time", 1));
	
	yield WaitForSeconds(0.5);
	iTween.MoveTo(GameObject.Find("Layer 1"), iTween.Hash("position", Vector3(0, 4, 0), "isLocal", true, "time", 1));
	
	yield WaitForSeconds(0.25);
	iTween.MoveTo(GameObject.Find("Layer 2"), iTween.Hash("position", Vector3(0, -0.05, 0), "isLocal", true, "time", 1));
	
	yield WaitForSeconds(0.25);
	iTween.MoveTo(GameObject.Find("Layer 3"), iTween.Hash("position", Vector3(0, -4.05, 0), "isLocal", true, "time", 1));
	
	yield WaitForSeconds(0.25);
	iTween.MoveTo(GameObject.Find("Layer 4"), iTween.Hash("position", Vector3(0, -8, 0), "isLocal", true, "time", 1));

}
