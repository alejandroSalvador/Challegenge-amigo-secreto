// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];
let contadorAmigos = 0;
let personaSeleccinada = "";

function agregarAmigo() {
  let amigoUsuario = document.getElementById("amigo").value;
  if (amigoUsuario == "") {
    alert("Ingrese un nombre válido!");
  } else {
    //agregar al listado
    listaDeAmigos.push(amigoUsuario);
    contadorAmigos++;

    mostrarListado();

    //limpiar campo
  }
}

function mostrarListado() {
  let listaAmigos = document.getElementById("listaAmigos");

  // Limpiar la lista actual
  listaAmigos.innerHTML = "";

  //recorrer on un ciclo for la matriz
  for (let i = 0; i < listaDeAmigos.length; i++) {
    asignarTexto("listaAmigos", listaDeAmigos[i]) + "\n";
  }
}

function asignarTexto(elemento, texto) {
  let elementoHTML = document.getElementById(elemento);
  elementoHTML.innerHTML = texto;
}

function sortearAmigo() {
  if (listaDeAmigos.length === 0) {
    alert("No hay amigos en la lista para sortear!");
    return;
  } else {
    personaSeleccinada = elegirAmigo();
    asignarTexto("resultado", personaSeleccinada);
  }
}

function elegirAmigo() {
  const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
  const amigoSeleccionado = listaDeAmigos[indiceAleatorio];
  return amigoSeleccionado;
}
