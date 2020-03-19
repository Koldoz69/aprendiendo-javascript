//=== nos ayuda a cambiar el css de una link web
const title = document.getElementById("title");
title.innerHTML ="Cursos";

const description = document.getElementById("description");
description.innerHTML = "Listado de cursos";

const items = document.getElementsByClassName("list-group-item");
for (var i=0; 1 < items.length; i++) {
    let element = items [i];
    console.log(element);
}


