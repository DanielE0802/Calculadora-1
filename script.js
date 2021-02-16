function añadirElemento (id){
    return document.getElementById(id)
}

// Numeros
let btnUno = añadirElemento("btnUno")
let btnDos = añadirElemento("btnDos")
let btnTres = añadirElemento("btnTres")
let btnCuatro = añadirElemento("btnCuatro")
let btnCinco = añadirElemento("btnCinco")
let btnSeis = añadirElemento("btnSeis")
let btnSiete = añadirElemento("btnSiete")
let btnOcho = añadirElemento("btnOcho")
let btnNueve = añadirElemento("btnNueve")
let btnCero = añadirElemento("btnCero")
let btnDecimal = añadirElemento("btnDecimal")


//Operadores
let btnSuma = añadirElemento("btnSuma")
let btnResta = añadirElemento("btnResta")
let btnMultiply = añadirElemento("btnMultiply")
let btnDiv = añadirElemento("btnDiv")
let btnPorcentaje = añadirElemento("btnPorcentaje")
let btnResultado = añadirElemento("btnResultado")
let btnElevar = añadirElemento("btnElevar")
let btnBorrar = añadirElemento("btnBorrar")
let btnAParentecis = añadirElemento("btnAParentecis")
let btnBParentecis = añadirElemento("btnBParentecis")

let resultado = añadirElemento("resultado")

let parte1Operacion;
let parte2Operacion;
let operacion;



btnPorcentaje.addEventListener ("click", msj => alert("Hola presionaste uno")  )


btnUno.addEventListener("click", function (e){
    resultado.textContent = resultado.textContent + "1"
}, false)

btnDos.addEventListener("click", function (e){
    resultado.textContent = resultado.textContent + "2"
}, false)

btnTres.addEventListener("click", function (e){
    resultado.textContent = resultado.textContent + "3"
}, false)

btnCuatro.addEventListener("click", function (e){
    resultado.textContent = resultado.textContent + "4"
}, false)

btnCinco.addEventListener("click", function (e){
    resultado.textContent = resultado.textContent + "5"
}, false)

btnSeis.addEventListener("click", function (e){
    resultado.textContent = resultado.textContent + "6"
}, false)

btnSiete.addEventListener("click", function (e){
    resultado.textContent = resultado.textContent + "7"
}, false)

btnOcho.addEventListener("click", function (e){
    resultado.textContent = resultado.textContent + "8"
}, false)

btnNueve.addEventListener("click", function (e){
    resultado.textContent = resultado.textContent + "9"
}, false)

btnCero.addEventListener("click", function (e){
    resultado.textContent = resultado.textContent + "0"
}, false)

btnDecimal.addEventListener("click", function (e){
    resultado.textContent = resultado.textContent + "."
}, false)


btnBorrar.addEventListener("click",  function(e){
    resetear();
},false)

btnSuma.addEventListener("click",  function(e){
    parte1Operacion = resultado.textContent;
    operacion = "+";
    limpiar();
},false)

btnResta.addEventListener("click",function(e){
    parte1Operacion = resultado.textContent;
    operacion = "-";
    limpiar();
},false )

btnMultiply.addEventListener("click",function(e){
    parte1Operacion = resultado.textContent;
    operacion = "*";
    limpiar();
} , false)


btnDiv.addEventListener("click",function(e){
    parte1Operacion = resultado.textContent;
    operacion = "/";
    limpiar();
} ,false)

btnResultado.addEventListener("click",function(e){
    parte2Operacion = resultado.textContent;
    resolver();
},false)


function resolver(){
    var res = 0;
    switch(operacion){
      case "+":
        res = parseFloat(parte1Operacion) + parseFloat(parte2Operacion);
        break;
      case "-":
          res = parseFloat(parte1Operacion) - parseFloat(parte2Operacion);
          break;
      case "*":
        res = parseFloat(parte1Operacion) * parseFloat(parte2Operacion);
        break;
      case "/":
        res = parseFloat(parte1Operacion) / parseFloat(parte2Operacion);
        break;
    }
    resetear();
    resultado.textContent = res;
  }

  function limpiar(){
    resultado.textContent = "";
  }
  function resetear(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
  }

  