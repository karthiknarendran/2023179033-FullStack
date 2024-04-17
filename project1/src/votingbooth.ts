type voter = {
    id:string,
    password:string
} 

let voters:voter[] = [
    {id:"2023179033",password:"33"},
    {id:"2023179034",password:"34"},
    {id:"2023179035",password:"35"},
    {id:"2023179036",password:"36"},
    {id:"2023179037",password:"37"}
]

let vid = document.getElementById("id");
let vpass = document.getElementById("pass");

function checkType(id:string,pass:string){
    if((id=="Admin" || id=="admin")&&pass=="admin"){
        return "admin"
    }
    else{
        return "voter"
    }
}

function showResult(){

}

function main_content(type:string){
    let content:HTMLElement|null = document.getElementById("main")!;
    if(type=="admin"){
        content = showResult();
    }
}
