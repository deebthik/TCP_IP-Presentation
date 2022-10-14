#pragma strict

var tcp_ip_text : GameObject;
var selection_ring : GameObject;
var inner_ring : GameObject;
var rings : GameObject;

function Start () {

	tcp_ip_text = GameObject.Find("TCP/IP Text");
	selection_ring = GameObject.Find("Selection Ring Parent");
	inner_ring = GameObject.Find("Inner Ring Parent");
	rings = GameObject.Find("Rings");

}

function Update () {

	if(Input.GetKeyDown(KeyCode.RightArrow)){

		if(Check_Rotation_Within_Ranges(GameObject.Find("Background"), "y", 0) && GameObject.Find("End Plane").transform.position.x == 100){

			if(tcp_ip_text.transform.position.x == -6.95){

				tcp_ip_text.transform.position.z = 0;
				tcp_ip_text.GetComponent(Animation).animation.Play("Title_Animation");
				Subtitle_Animation();
			
			}
			
			if(tcp_ip_text.transform.position == Vector3(0, 1, 0)){
			
				iTween.MoveTo(GameObject.Find("TCP/IP Text"), iTween.Hash("position", Vector3(0, 10, 0), "time", 1));
				iTween.MoveTo(GameObject.Find("Deebthik"), iTween.Hash("position", Vector3(-3, -10, 0), "time", 1));
				iTween.MoveTo(GameObject.Find("12 SC-F"), iTween.Hash("position", Vector3(3, -10, 0), "time", 1));
				Rotate_Background();
			
			}
		
		}
		
	}
		
	if(Input.GetKeyDown(KeyCode.LeftArrow)){
	
		if(Check_Rotation_Within_Ranges(GameObject.Find("Background"), "y", 0)){
	
			if(tcp_ip_text.transform.position == Vector3(0, 1, 0)){
			
				tcp_ip_text.GetComponent(Animation).animation.Play("Title_Animation_Reverse");
				iTween.MoveTo(GameObject.Find("Deebthik"), iTween.Hash("position", Vector3(-15, -2, 0), "time", 1));
				iTween.MoveTo(GameObject.Find("12 SC-F"), iTween.Hash("position", Vector3(15, -2, 0), "time", 1));
				
				Move_TCP_IP_Title();
			
			}
		
		}
		
		if(GameObject.Find("Background").transform.rotation == Quaternion.Euler(0, 180, 0) && rings.transform.position == Vector3(0, 1, 9) && selection_ring.transform.localScale == Vector3(1, 1, 1)){
		
			Rotate_Background_Reverse();
		
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
	yield WaitForSeconds(1);
	iTween.FadeTo(GameObject.Find("Transparent Plane"), iTween.Hash("alpha", 0.7, "time", 1));
	iTween.MoveTo(GameObject.Find("Inner Ring Parent"), iTween.Hash("position", Vector3(0, 1, 9), "time", 1));
	yield WaitForSeconds(0.25);
	iTween.ScaleTo(selection_ring, iTween.Hash("scale", Vector3(1, 1, 1), "time", 1));

}

function Rotate_Background_Reverse(){

	tcp_ip_text.transform.position = Vector3(0, 10, 0);
	tcp_ip_text.transform.rotation = Quaternion.Euler(0, 0, 0);
	tcp_ip_text.transform.localScale = Vector3(0.4, 0.4, 0.4);
	
	iTween.ScaleTo(selection_ring, iTween.Hash("scale", Vector3(5, 5, 1), "time", 1));
	yield WaitForSeconds(0.25);
	iTween.MoveTo(GameObject.Find("Inner Ring Parent"), iTween.Hash("position", Vector3(0, 1, -24), "time", 1));
	iTween.FadeTo(GameObject.Find("Transparent Plane"), iTween.Hash("alpha", 0, "time", 1));
	yield WaitForSeconds(0.5);
	iTween.RotateTo(GameObject.Find("Background"), iTween.Hash("rotation", Vector3(0, 0, 0), "time", 2));
	Title_Animations_Reverse();

}

function Title_Animations_Reverse(){

	yield WaitForSeconds(1);
	iTween.MoveTo(GameObject.Find("TCP/IP Text"), iTween.Hash("position", Vector3(0, 1, 0), "time", 1));
	iTween.MoveTo(GameObject.Find("Deebthik"), iTween.Hash("position", Vector3(-3, -2, 0), "time", 1));
	iTween.MoveTo(GameObject.Find("12 SC-F"), iTween.Hash("position", Vector3(3, -2, 0), "time", 1));

}

public static function Check_Rotation_Within_Ranges(game_object : GameObject, axis : String, angle : float){

	var return_var : boolean;

	if(axis == "x"){
	
		if(game_object.transform.eulerAngles.x >= (angle-0.001) && game_object.transform.eulerAngles.x <= (angle+0.001)){
		
			return_var = true;
		
		}else{
		
			return_var = false;
		
		}
	
	}
	
	if(axis == "y"){
	
		if(game_object.transform.eulerAngles.y >= (angle-0.001) && game_object.transform.eulerAngles.y <= (angle+0.001)){
		
			return_var = true;
		
		}else{
		
			return_var = false;
		
		}
	
	}
	
	
	if(axis == "z"){
	
		if(game_object.transform.eulerAngles.z >= (angle-0.001) && game_object.transform.eulerAngles.z <= (angle+0.001)){
		
			return_var = true;
		
		}else{
		
			return_var = false;
		
		}
	
	}
	
	return return_var;

}

function Move_TCP_IP_Title(){

	yield WaitForSeconds(3.5);
	tcp_ip_text.GetComponent(Animation).animation.Stop();
	tcp_ip_text.transform.position.z = 100;

}