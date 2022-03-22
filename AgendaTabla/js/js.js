function crearTablaAmigos(){

    var tablita = document.createElement("table");
    tablita.className = "tabla";

    var contenedor_ = document.getElementById("contenedor_amigos");

    contenedor_.appendChild(tablita);


    for(i=0; i<amigos.length; i++){

        var obj_tr = document.createElement("tr");

        var contenedor_tablita = document.getElementsByClassName("tabla")[0];
        contenedor_tablita.appendChild(obj_tr);

        var obj_td = document.createElement("td");
        var obj_td2 = document.createElement("td");
        obj_tr.appendChild(obj_td);
        obj_tr.appendChild(obj_td2);

        obj_td.innerHTML = amigos[i].nombre;
        obj_td2.innerHTML = amigos[i].apellido;

    }



}