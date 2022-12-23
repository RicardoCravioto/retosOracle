var entrada;
var salida;
var salidaTexto = document.getElementById("salida");
var aux = document.createElement("input");
var copiaTexto;

function focus(params) {
  document.getElementById("entrada").focus();
}
focus();

const quitarAcentos = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

function encriptar() {
  //   document.getElementById("salida").style.display = "none";
  let entrada1 = document.getElementById("entrada").value.toLowerCase();
  entrada = quitarAcentos(entrada1);
  console.log("entrada");
  entrada = entrada.split("");

  if (entrada != "") {
    for (let i = 0; i < entrada.length; i++) {
      var letra = entrada[i];
      if (entrada[i] == "a") {
        entrada[i] = "ai";
      }
      if (entrada[i] == "e") {
        entrada[i] = "enter";
      }
      if (entrada[i] == "i") {
        entrada[i] = "imes";
      }
      if (entrada[i] == "o") {
        entrada[i] = "ober";
      }
      if (entrada[i] == "u") {
        entrada[i] = "ufat";
      }
      console.log(entrada);
    }
    salida = entrada.join("");
    console.log(salida);
    salidaTexto.innerText = salida;
    document.getElementById("copiar").disabled = false;
  } else {
    alert("Escribe un mensaje para encriptar");
  }
}

function desencriptar() {
  //   document.getElementById("salida").style.display = "none";
  let entrada1 = document.getElementById("entrada").value.toLowerCase();
  entrada = quitarAcentos(entrada1);
  let salida1 = entrada.replace(/ai/g, "a");
  let salida2 = salida1.replace(/enter/g, "e");
  let salida3 = salida2.replace(/imes/g, "i");
  let salida4 = salida3.replace(/ober/g, "o");
  let salida = salida4.replace(/ufat/g, "u");

  if (entrada != "") {
    // console.log(entrada);
    // console.log(salida);
    salidaTexto.innerText = salida;
    document.getElementById("copiar").disabled = false;
  } else {
    alert("Escribe un mensaje para desencriptar");
  }
}

function copiar(params) {
  aux.setAttribute("value", document.getElementById("salida").innerText);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
}
