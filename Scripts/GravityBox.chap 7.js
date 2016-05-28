#pragma strict
var position: Vector3;
var rotation: Quaternion;



function Start () {


}

function Update () {

if (Input.GetButtonDown("Gravity")){
Physics.gravity = Vector3(0, 1.6,0);


}
}