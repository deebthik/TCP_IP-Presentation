#pragma strict

private var ray : Ray;
private var hit : RaycastHit;

var selection_ring : GameObject;
var inner_ring : GameObject;
var rings : GameObject;
var ips_title : GameObject;
var ips_info : GameObject;
var tcp_title : GameObject;
var tcp_info : GameObject;
var ip_title : GameObject;
var ip_info : GameObject;
var differences : GameObject;

function Start () {

	selection_ring = GameObject.Find("Selection Ring Parent");
	inner_ring = GameObject.Find("Inner Ring Parent");
	rings = GameObject.Find("Rings");
	ips_title = GameObject.Find("IPS Title");
	ips_info = GameObject.Find("IPS Info");
	tcp_title = GameObject.Find("TCP Title");
	tcp_info = GameObject.Find("TCP Info");
	ip_title = GameObject.Find("IP Title");
	ip_info = GameObject.Find("IP Info");
	differences = GameObject.Find("Differences");

}

function Update () {

	if(Input.GetMouseButtonDown(0)){
	
		ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		
		if(Physics.Raycast(ray, hit)){
		
			if(hit.transform.name == "Inner Ring"){
			
				if(selection_ring.transform.rotation == Quaternion.Euler(0, 0, 180)){
					
					iTween.RotateTo(selection_ring, iTween.Hash("rotation", Vector3(0, 0, 0), "time", 1.5));
					Scale_Down_IPS();
				
				}
			
			}
		
		}
		
	}
	

	if(GameObject.Find("Background").transform.rotation == Quaternion.Euler(0, 180, 0)){

		if(selection_ring.transform.localScale == Vector3(1, 1, 1) && rings.transform.position == Vector3(0, 1, 9)){
	
			if(Input.GetKeyDown(KeyCode.RightArrow)){

				iTween.MoveTo(rings, iTween.Hash("position", Vector3(-40, 1, 9), "time", 3));
				iTween.MoveTo(differences, iTween.Hash("position", Vector3(0, 1, 9), "time", 2));
				iTween.RotateTo(rings, iTween.Hash("rotation", Vector3(0, 0, 1080), "time", 3));
				iTween.RotateTo(differences, iTween.Hash("rotation", Vector3(0, 0, 1080), "time", 2));
				Differences_Zoom_In();
			
			}
			
			if(Input.GetKeyDown(KeyCode.UpArrow)){
			
				iTween.RotateTo(selection_ring, iTween.Hash("rotation", Vector3(0, 0, 90), "time", 0.75));
				Scale_Down_TCP();
			
			}
			
			if(Input.GetKeyDown(KeyCode.DownArrow)){
			
				iTween.RotateTo(selection_ring, iTween.Hash("rotation", Vector3(0, 0, 270), "time", 0.75));
				Scale_Down_IP();
			
			}
		
		}
	
	}
			
}



function Subtitle_Animation(){

	yield WaitForSeconds(2.5);
	iTween.MoveTo(GameObject.Find("Deebthik"), iTween.Hash("position", Vector3(-3, -2, 0), "time", 1));
	iTween.MoveTo(GameObject.Find("12 SC-F"), iTween.Hash("position", Vector3(3, -2, 0), "time", 1));
	
}

function Rotate_Background(){

	yield WaitForSeconds(0.5);
	iTween.RotateTo(GameObject.Find("Background"), iTween.Hash("rotation", Vector3(0, 180, 0), "time", 2));

}

function Scale_Down_IPS(){

	yield WaitForSeconds(1);
	iTween.ScaleTo(selection_ring, iTween.Hash("scale", Vector3(0.85, 0.85, 0.85), "time", 0.25));
	GameObject.Find("Green Halo").GetComponent(Animation).animation.Play("Halo_Animation");
	GameObject.Find("Green Plane").transform.position.x = 0;
	iTween.FadeTo(GameObject.Find("Green Plane"), iTween.Hash("alpha", 1, "time", 2));
	
	yield WaitForSeconds(2);
	iTween.MoveTo(ips_title, iTween.Hash("position", Vector3(0, 5.75, 1), "time", 1));
	iTween.MoveTo(ips_info, iTween.Hash("position", Vector3(-9.75, 4.5, 1), "time", 1));

}

function Scale_Down_TCP(){

	yield WaitForSeconds(0.375);
	iTween.ScaleTo(selection_ring, iTween.Hash("scale", Vector3(0.85, 0.85, 0.85), "time", 0.25));
	GameObject.Find("Orange Halo").GetComponent(Animation).animation.Play("Halo_Animation");
	GameObject.Find("Orange Plane").transform.position.x = 0;
	iTween.FadeTo(GameObject.Find("Orange Plane"), iTween.Hash("alpha", 1, "time", 2));
	
	yield WaitForSeconds(2);
	iTween.MoveTo(tcp_title, iTween.Hash("position", Vector3(0, 6, 1), "time", 1));
	iTween.MoveTo(tcp_info, iTween.Hash("position", Vector3(-9.75, 5, 1), "time", 1));

}

function Scale_Down_IP(){

	yield WaitForSeconds(0.375);
	iTween.ScaleTo(selection_ring, iTween.Hash("scale", Vector3(0.85, 0.85, 0.85), "time", 0.25));
	GameObject.Find("Blue Halo").GetComponent(Animation).animation.Play("Halo_Animation");
	GameObject.Find("Blue Plane").transform.position.x = 0;
	iTween.FadeTo(GameObject.Find("Blue Plane"), iTween.Hash("alpha", 1, "time", 2));
	
	yield WaitForSeconds(2);
	iTween.MoveTo(ip_title, iTween.Hash("position", Vector3(0, 5.75, 1), "time", 1));
	iTween.MoveTo(ip_info, iTween.Hash("position", Vector3(-9.75, 4.5, 1), "time", 1));

}

function Differences_Zoom_In(){

	yield WaitForSeconds(2);
	iTween.MoveTo(differences, iTween.Hash("position", Vector3(0, -4.8, 0.65), "time", 1));

}
