#pragma strict

private var ray : Ray;
private var hit : RaycastHit;

var tcp_ip_four_layer_model_title : GameObject;
var layer1 : GameObject;
var layer2 : GameObject;
var layer3 : GameObject;
var layer4 : GameObject;
var tcp_ip_text : GameObject;
var thank_you : GameObject;
var differences : GameObject;
var inner_half_ring : GameObject;
var peace : GameObject;

function Start () {
	
	tcp_ip_four_layer_model_title = GameObject.Find("TCP/IP Four-Layer Model Title");
	layer1 = GameObject.Find("Layer 1");
	layer2 = GameObject.Find("Layer 2");
	layer3 = GameObject.Find("Layer 3");
	layer4 = GameObject.Find("Layer 4");
	tcp_ip_text = GameObject.Find("TCP/IP Text");
	thank_you = GameObject.Find("Thank You");
	differences = GameObject.Find("Differences");
	inner_half_ring = GameObject.Find("Inner Half Ring Parent");
	peace = GameObject.Find("Peace");
	
}

function Update () {
	
	if(layer4.transform.localPosition.y == -8 && layer4.transform.localPosition.x == 0){
	
		if(Input.GetMouseButtonDown(0)){
	
			ray = Camera.main.ScreenPointToRay(Input.mousePosition);
			
			if(Physics.Raycast(ray, hit)){
			
				if((hit.transform.name == "Layer 1 Plane Front" || hit.transform.name == "Layer 1 Text") && GameObject.Find("Layer 1 Plane Parent").transform.localPosition.y == 0){
				
					Layer_Selection("Layer 1 Text", "Layer 1 Plane Parent", -5.9, -0.1, layer2, layer3, layer4, "Layer 1 Info Title", "Layer 1 Info", -1, -2.1);
				
				}
				
				if((hit.transform.name == "Layer 2 Plane Front" || hit.transform.name == "Layer 2 Text") && GameObject.Find("Layer 2 Plane Parent").transform.localPosition.y == 0){
				
					Layer_Selection("Layer 2 Text", "Layer 2 Plane Parent", -1.9, -0.1, layer1, layer3, layer4, "Layer 2 Info Title", "Layer 2 Info", 3.15, 2.2);
				
				}
				
				if((hit.transform.name == "Layer 3 Plane Front" || hit.transform.name == "Layer 3 Text") && GameObject.Find("Layer 3 Plane Parent").transform.localPosition.y == 0){
				
					Layer_Selection("Layer 3 Text", "Layer 3 Plane Parent", 2.1, -0.3, layer1, layer2, layer4, "Layer 3 Info Title", "Layer 3 Info", 7.35, 6.7);
				
				}
				
				if((hit.transform.name == "Layer 4 Plane Front" || hit.transform.name == "Layer 4 Text") && GameObject.Find("Layer 4 Plane Parent").transform.localPosition.y == 0){
				
					Layer_Selection("Layer 4 Text", "Layer 4 Plane Parent", 6.1, -0.3, layer1, layer2, layer3, "Layer 4 Info Title", "Layer 4 Info", 11, 10);
				
				}
			
			}
			
		}
		
		
	
		if(Input.GetKeyDown(KeyCode.RightArrow)){

			if(GameObject.Find("Layer 1 Plane Parent").transform.localPosition == Vector3(0, 0, -0.01)
			&& GameObject.Find("Layer 2 Plane Parent").transform.localPosition == Vector3(0, 0, -0.01)
			&& GameObject.Find("Layer 3 Plane Parent").transform.localPosition == Vector3(0, 0, -0.01)
			&& GameObject.Find("Layer 4 Plane Parent").transform.localPosition == Vector3(0, 0, -0.01)){

				Model_Exit();
			
			}
				
		}
		
		if(Input.GetKeyDown(KeyCode.LeftArrow)){
			
			if(GameObject.Find("Layer 1 Plane Parent").transform.localPosition == Vector3(0, 0, -0.01)
			&& GameObject.Find("Layer 2 Plane Parent").transform.localPosition == Vector3(0, 0, -0.01)
			&& GameObject.Find("Layer 3 Plane Parent").transform.localPosition == Vector3(0, 0, -0.01)
			&& GameObject.Find("Layer 4 Plane Parent").transform.localPosition == Vector3(0, 0, -0.01)){
			
				Back_To_Differences();
			
			}
			
			if(GameObject.Find("Layer 1 Plane Parent").transform.localPosition.y == -5.9 && GameObject.Find("Layer 1 Info Title").transform.localPosition.x == 0){
			
				Layer_Unselection("Layer 1 Text", "Layer 1 Plane Parent", layer2, layer3, layer4, "Layer 1 Info Title", "Layer 1 Info", -25, -1);
			
			}
			
			if(GameObject.Find("Layer 2 Plane Parent").transform.localPosition.y == -1.9 && GameObject.Find("Layer 2 Info Title").transform.localPosition.x == 0){
			
				Layer_Unselection("Layer 2 Text", "Layer 2 Plane Parent", layer1, layer3, layer4, "Layer 2 Info Title", "Layer 2 Info", 25, 3.15);
			
			}
			
			if(GameObject.Find("Layer 3 Plane Parent").transform.localPosition.y == 2.1 && GameObject.Find("Layer 3 Info Title").transform.localPosition.x == 0){
			
				Layer_Unselection("Layer 3 Text", "Layer 3 Plane Parent", layer1, layer2, layer4, "Layer 3 Info Title", "Layer 3 Info", -25, 7.35);
			
			}
			
			if(GameObject.Find("Layer 4 Plane Parent").transform.localPosition.y == 6.1 && GameObject.Find("Layer 4 Info Title").transform.localPosition.x == 0){
			
				Layer_Unselection("Layer 4 Text", "Layer 4 Plane Parent", layer1, layer2, layer3, "Layer 4 Info Title", "Layer 4 Info", 25, 11);
			
			}
				
		}
	
	}	
	
	GameObject.Find("Layer 1 Info").GetComponent(TextMesh).text = "• The Application layer is the scope within which applications create \n   user data and communicate this data to other applications on \n   another or the same host.\n\n"
																+ "• The applications, or processes, make use of the services provided \n   by the underlying, lower layers, especially the Transport Layer.\n\n"
																+ "• This is the layer in which all higher level protocols, such as SMTP, \n   FTP, SSH, HTTP, operate.";
	
	GameObject.Find("Layer 2 Info").GetComponent(TextMesh).text = "• The Transport Layer performs host-to-host communications on \n   either the same or different hosts and on either the local network \n   or remote networks separated by routers.\n\n"
																+ "• It provides a channel for the communication needs of applications.\n\n"
																+ "• UDP is the basic transport layer protocol, providing an unreliable \n   datagram service. The Transmission Control Protocol provides \n   flow-control, connection establishment, and reliable transmission \n   of data.";

	GameObject.Find("Layer 3 Info").GetComponent(TextMesh).text = "• The Internet layer has the task of exchanging datagrams across \n   network boundaries. It provides a uniform networking interface that \n   hides the actual topology of the underlying network connections.\n\n"
																+ "• This layer defines the addressing and routing structures used for \n   the TCP/IP protocol suite.\n\n"
																+ "• The primary protocol in this scope is the Internet Protocol, which \n   defines IP addresses. Its function in routing is to transport \n   datagrams to the next IP router that has the connectivity to a \n   network closer to the final data destination.";

	GameObject.Find("Layer 4 Info").GetComponent(TextMesh).text = "• The Link layer defines the networking methods within the scope of \n   the local network link on which hosts communicate without \n   intervening routers.\n\n"
																+ "• This layer includes the protocols used to describe the local network \n   topology and the interfaces needed to effect transmission of Internet \n   layer datagrams to next-neighbor hosts.\n\n"
																+ "• MAC, ARP, NDP and PPP are some of the protocols in this layer.";



	if(Input.GetKeyDown(KeyCode.LeftArrow)){
		
		if(GameObject.Find("End Plane").transform.position.x == 0){
		
			Thank_You_Animation_Reverse();
		
		}
		
	}



}

function Model_Animation_Reverse(){

	iTween.MoveTo(GameObject.Find("Layer 4"), iTween.Hash("position", Vector3(35, -8, 0), "isLocal", true, "time", 1));
	yield WaitForSeconds(0.25);
	
	iTween.MoveTo(GameObject.Find("Layer 3"), iTween.Hash("position", Vector3(-35, -4.05, 0), "isLocal", true, "time", 1));
	yield WaitForSeconds(0.25);
	
	iTween.MoveTo(GameObject.Find("Layer 2"), iTween.Hash("position", Vector3(35, -0.05, 0), "isLocal", true, "time", 1));
	yield WaitForSeconds(0.25);
	
	iTween.MoveTo(GameObject.Find("Layer 1"), iTween.Hash("position", Vector3(-35, 4, 0), "isLocal", true, "time", 1));
	yield WaitForSeconds(0.25);
	
	iTween.MoveTo(GameObject.Find("TCP/IP Four-Layer Model Title"), iTween.Hash("position", Vector3(0, -15, 0), "isLocal", true, "time", 1));
	
}

function Model_Exit(){

	Model_Animation_Reverse();
	
	yield WaitForSeconds(1.25);
	iTween.FadeTo(GameObject.Find("Transparent Plane"), iTween.Hash("alpha", 0, "time", 1));
	Differences_Rotate_Background_Reverse();
	
}

function Back_To_Differences(){

	Model_Animation_Reverse();
	differences.transform.position.x = -40;
	
	yield WaitForSeconds(1.5);
	iTween.RotateTo(differences, iTween.Hash("rotation", Vector3(0, 0, -720), "time", 2));
	iTween.MoveTo(differences, iTween.Hash("position", Vector3(0, 1, 9), "time", 2));
	
	yield WaitForSeconds(2);
	iTween.RotateTo(inner_half_ring, iTween.Hash("rotation", Vector3(0, 0, 3600), "time", 0.5));
	iTween.MoveTo(differences, iTween.Hash("position", Vector3(0, -4.8, 0.65), "time", 1));

}

function Differences_Rotate_Background_Reverse(){

	tcp_ip_text.transform.position = Vector3(0, 10, 0);
	tcp_ip_text.transform.rotation = Quaternion.Euler(0, 0, 0);
	tcp_ip_text.transform.localScale = Vector3(0.4, 0.4, 0.4);

	yield WaitForSeconds(0.5);
	iTween.RotateTo(GameObject.Find("Background"), iTween.Hash("rotation", Vector3(0, 0, 0), "time", 2));
	Thank_You_Animation();

}

function Thank_You_Animation(){

	thank_you.transform.position.x = 0;
	yield WaitForSeconds(1);
	iTween.ScaleTo(thank_you, iTween.Hash("scale", Vector3(0.275, 0.275, 0.275), "time", 1));
	
	yield WaitForSeconds(1.75);
	thank_you.GetComponent(Animation).animation.Play("Thank_You_Exit");
	
	yield WaitForSeconds(3.5);
	peace.transform.position.x = -0.5;
	iTween.MoveTo(peace, iTween.Hash("position", Vector3(0, 1, 0), "time", 1));
	iTween.ScaleTo(peace, iTween.Hash("scale", Vector3(0.54, 1, 1), "time", 1));
	
	thank_you.GetComponent(Animation).animation.Stop();
	thank_you.transform.position.z = 100;
	
	yield WaitForSeconds(1.25);
	GameObject.Find("End Plane").transform.position.x = 0;
	
	//yield WaitForSeconds(1);
	//Application.Quit();

}

function Thank_You_Animation_Reverse(){

	GameObject.Find("End Plane").transform.position.x = 100;
	yield WaitForSeconds(1);
	
	iTween.MoveTo(peace, iTween.Hash("position", Vector3(0, -5, 0), "time", 1));
	iTween.ScaleTo(peace, iTween.Hash("scale", Vector3(0.00054, 1, 0.001), "time", 1));
	
	yield WaitForSeconds(1);
	thank_you.GetComponent(Animation).animation.Play("Thank_You_Exit_Reverse");
	
	yield WaitForSeconds(4.5);
	iTween.ScaleTo(thank_you, iTween.Hash("scale", Vector3(0.001, 0.001, 0.001), "time", 1));
	
	yield WaitForSeconds(1);
	thank_you.transform.position.x = 100;
	iTween.RotateTo(GameObject.Find("Background"), iTween.Hash("rotation", Vector3(0, 180, 0), "time", 2));
	
	yield WaitForSeconds(1);
	iTween.FadeTo(GameObject.Find("Transparent Plane"), iTween.Hash("alpha", 0.7, "time", 1));
	
	iTween.MoveTo(GameObject.Find("TCP/IP Four-Layer Model Title"), iTween.Hash("position", Vector3(0, 8.25, 0), "isLocal", true, "time", 1));
	
	yield WaitForSeconds(0.5);
	iTween.MoveTo(GameObject.Find("Layer 1"), iTween.Hash("position", Vector3(0, 4, 0), "isLocal", true, "time", 1));
	
	yield WaitForSeconds(0.25);
	iTween.MoveTo(GameObject.Find("Layer 2"), iTween.Hash("position", Vector3(0, 0, 0), "isLocal", true, "time", 1));
	
	yield WaitForSeconds(0.25);
	iTween.MoveTo(GameObject.Find("Layer 3"), iTween.Hash("position", Vector3(0, -4, 0), "isLocal", true, "time", 1));
	
	yield WaitForSeconds(0.25);
	iTween.MoveTo(GameObject.Find("Layer 4"), iTween.Hash("position", Vector3(0, -8, 0), "isLocal", true, "time", 1));

}

function Layer_Selection(layer_text : String, layer_plane_parent : String, y_coordinate : float, z_coordinate : float, other_layer_1 : GameObject, other_layer_2 : GameObject, other_layer_3 : GameObject, layer_info_title : String, layer_info : String, title_y_coordinate : float, info_y_coordinate : float){

	GameObject.Find(layer_info_title).transform.localPosition.y = title_y_coordinate;

	iTween.MoveTo(other_layer_1, iTween.Hash("position", Vector3(0, other_layer_1.transform.localPosition.y, 3), "isLocal", true, "time", 1));
	iTween.MoveTo(other_layer_2, iTween.Hash("position", Vector3(0, other_layer_2.transform.localPosition.y, 3), "isLocal", true, "time", 1));
	iTween.MoveTo(other_layer_3, iTween.Hash("position", Vector3(0, other_layer_3.transform.localPosition.y, 3), "isLocal", true, "time", 1));

	iTween.RotateTo(GameObject.Find(layer_text), iTween.Hash("rotation", Vector3(-179.999, 0, 0), "isLocal", true, "time", 1));
	yield WaitForSeconds(0.25);

	iTween.RotateTo(GameObject.Find(layer_plane_parent), iTween.Hash("rotation", Vector3(900, 0, 0), "isLocal", true, "time", 1.5));
	iTween.MoveTo(GameObject.Find(layer_plane_parent), iTween.Hash("position", Vector3(0, y_coordinate, z_coordinate), "isLocal", true, "time", 1.5));
	iTween.ScaleTo(GameObject.Find(layer_plane_parent), iTween.Hash("scale", Vector3(1.25, 4.5, 1), "isLocal", true, "time", 1.5));
	
	yield WaitForSeconds(1);
	iTween.MoveTo(GameObject.Find(layer_info_title), iTween.Hash("position", Vector3(0, title_y_coordinate, -5), "isLocal", true, "time", 1));
	iTween.MoveTo(GameObject.Find(layer_info), iTween.Hash("position", Vector3(-11, info_y_coordinate, -5), "isLocal", true, "time", 1));

}

function Layer_Unselection(layer_text : String, layer_plane_parent : String, other_layer_1 : GameObject, other_layer_2 : GameObject, other_layer_3 : GameObject, layer_info_title : String, layer_info : String, title_x_coordinate : float, title_y_coordinate : float){
	
	iTween.MoveTo(GameObject.Find(layer_info_title), iTween.Hash("position", Vector3(title_x_coordinate, title_y_coordinate, -5), "isLocal", true, "time", 1));
	iTween.MoveTo(GameObject.Find(layer_info), iTween.Hash("position", Vector3(-11, -15, -5), "isLocal", true, "time", 1));
	yield WaitForSeconds(0.5);
	
	iTween.RotateTo(GameObject.Find(layer_plane_parent), iTween.Hash("rotation", Vector3(-900, 180, 180), "isLocal", true, "time", 1.5));
	iTween.MoveTo(GameObject.Find(layer_plane_parent), iTween.Hash("position", Vector3(0, 0, -0.01), "isLocal", true, "time", 1.5));
	iTween.ScaleTo(GameObject.Find(layer_plane_parent), iTween.Hash("scale", Vector3(1, 1, 1), "isLocal", true, "time", 1.5));

	yield WaitForSeconds(0.75);
	iTween.RotateTo(GameObject.Find(layer_text), iTween.Hash("rotation", Vector3(180, 180, 180), "isLocal", true, "time", 1));
	
	iTween.MoveTo(other_layer_1, iTween.Hash("position", Vector3(0, other_layer_1.transform.localPosition.y, 0), "isLocal", true, "time", 1));
	iTween.MoveTo(other_layer_2, iTween.Hash("position", Vector3(0, other_layer_2.transform.localPosition.y, 0), "isLocal", true, "time", 1));
	iTween.MoveTo(other_layer_3, iTween.Hash("position", Vector3(0, other_layer_3.transform.localPosition.y, 0), "isLocal", true, "time", 1));
	
	GameObject.Find(layer_info_title).transform.localPosition.y = 100;

}
