function validation(){
    let name = document.getElementById("name").value;
    if(name==""){
        document.getElementById("error").inner="please enter the valid name";
        return false
    }
}