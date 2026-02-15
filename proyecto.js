//Valores de los recargos 
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%

var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%

var hijos_recargo = 0.2 // 20%
var propiedades_recargo = 0.35 // 35% por propiedad
var salario_recargo = 0.05 // 5% sobre salario

// Este bucle se va a repetir hasta que el usuario escriba "Salir"
while (true) {
  var nombre = prompt("Ingrese su nombre, por favor o escriba 'Salir' para finalizar el programa")
  if (nombre.toUpperCase() === "SALIR") {
    alert("Gracias por usar el programa.")
    break
  }

  // Preguntar el precio base en cada cotización
  var precio_base = prompt("Ingrese el precio base de la cotización en quetzales")
  precio_base = parseFloat(precio_base)

  // Reiniciar variables en cada iteración
  var recargo = 0
  var recargo_total = 0
  var precio_final = 0

  var edad = prompt("¿Cuántos años tiene? Ingrese solamente números ")
  var edad_numero = parseInt(edad)

  var casado = prompt("¿Está casado actualmente?", "si/no").toUpperCase()
  var edad_conyuge_numero = 0
  if (casado.toUpperCase === "SI") {
    var edad_conyuge = prompt("¿Qué edad tiene su esposo/a?", "solo números")
    edad_conyuge_numero = parseInt(edad_conyuge)
  }

  var hijos = prompt("¿Tiene hijos o hijas?", "si/no").toUpperCase()
  var cantidad_hijos_numero = 0
  if (hijos.toUpperCase() === "SI") {
    var cantidad_hijos = prompt("¿Cuántos hijos tiene?", "Número de hijos")
    cantidad_hijos_numero = parseInt(cantidad_hijos)
  }

  var propiedades = prompt("¿Cuántas propiedades posee?", "Número de propiedades")
  var propiedades_numero = parseInt(propiedades)

  var ingresos = prompt("¿Cuál es su ingreso mensual en quetzales?", "Ingrese un número")
  var ingresos_numero = parseFloat(ingresos)

  // Validaciones básicas
  if (edad_numero < 0 || isNaN(edad_numero)) {
    alert("Edad inválida. Por favor ingrese una edad válida.")
    continue
  }
  if (casado === "SI" && (edad_conyuge_numero < 0 || isNaN(edad_conyuge_numero))) {
    alert("Edad del cónyuge inválida. Por favor ingrese una edad válida.")
    continue
  }

  // Recargo por edad del asegurado
  if (edad_numero >= 18 && edad_numero < 25) {
    recargo_total += precio_base * edad_18
  } else if (edad_numero >= 25 && edad_numero < 50) {
    recargo_total += precio_base * edad_25
  } else if (edad_numero >= 50) {
    recargo_total += precio_base * edad_50
  }

  // Recargo por edad del cónyuge
  if (casado === "SI") {
    if (edad_conyuge_numero >= 18 && edad_conyuge_numero < 25) {
      recargo_total += precio_base * casado_18
    } else if (edad_conyuge_numero >= 25 && edad_conyuge_numero < 50) {
      recargo_total += precio_base * casado_25
    } else if (edad_conyuge_numero >= 50) {
      recargo_total += precio_base * casado_50
    }
  }

  // Recargo por hijos
  if (cantidad_hijos_numero > 0) {
    recargo_total += precio_base * hijos_recargo * cantidad_hijos_numero
  }

  // Recargo por propiedades
  if (propiedades_numero > 0) {
    recargo_total += precio_base * propiedades_recargo * propiedades_numero
  }

  // Recargo por ingresos
  if (ingresos_numero > 0) {
    recargo_total += ingresos_numero * salario_recargo
  }

  // Precio final
  precio_final = precio_base + recargo_total

  // Resultado
  alert(
    "Cotización para: " + nombre + "\n" +
    "Precio base: Q" + precio_base.toFixed(2) + "\n" +
    "Recargo total: Q" + recargo_total.toFixed(2) + "\n" +
    "Precio final: Q" + precio_final.toFixed(2)
  )
}
