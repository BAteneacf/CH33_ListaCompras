// El código va aquí -> 
let txtNombre = document.getElementById("Name"); //nombre
let txtNumber = document.getElementById("Number"); //cantidad
let btnAgregar = document.getElementById("btnAgregar");
let alertValidaciones = document.getElementById("alertValidaciones");

function validarCantidad(){
    if(txtNumber.value.length==0){
        return false;
    }// if length
        return true;
}//validar Cantidad

btnAgregar.addEventListener("click", function(event){
    event.preventDefault(); //para que se cancele la funció por default
    if (txtNombre.value.length<3){
        alertValidaciones.innerHTML="El campo <strong>Nombre</strong> es requerido<br/>";
        alertValidaciones.style.display="block"; // Se usa block o inline
    }// txtNombre < 3
    if(! validarCantidad()){
        alertValidaciones.innerHTML+="El campo <strong>Nombre<strong> es requerido<br/>";
        alertValidaciones.style.display="block";
    }//if ! validarCantidad
});
