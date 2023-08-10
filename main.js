// Definir un array para almacenar los registros de préstamos
let prestamos = [];

// Función para capturar los datos del préstamo
function capturarPrestamo() {
  let monto = parseFloat(prompt("Ingrese el monto del préstamo:"));
  let plazo = parseInt(prompt("Ingrese el plazo en meses:"));
  let tasa = parseFloat(prompt("Ingrese la tasa de interés anual (%):"));

  let prestamo = {
    monto: monto,
    plazo: plazo,
    tasa: tasa
  };

  prestamos.push(prestamo);
  mostrarPrestamosRegistrados();
}

// Función para calcular la cuota mensual
function calcularCuota(monto, plazo, tasa) {
  let tasaMensual = tasa / 100 / 12;
  return (monto * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -plazo));
}

// Función para mostrar los detalles de un préstamo
function mostrarDetalles(prestamo) {
  let cuota = calcularCuota(prestamo.monto, prestamo.plazo, prestamo.tasa);
  return "Monto del préstamo: $" + prestamo.monto + "<br>Plazo en meses: " + prestamo.plazo +
    "<br>Tasa de interés anual: " + prestamo.tasa + "%" + "<br>Cuota mensual: $" + cuota.toFixed(2) + "<br>";
}

// Función para mostrar los préstamos registrados
function mostrarPrestamosRegistrados() {
  let listaPrestamos = document.getElementById('listaPrestamos');
  listaPrestamos.innerHTML = "";
  for (let i = 0; i < prestamos.length; i++) {
    let prestamoDetails = mostrarDetalles(prestamos[i]);
    listaPrestamos.innerHTML += "<div class='prestamo'>" + prestamoDetails + "</div>";
  }
}

// Función para buscar préstamos por monto
function buscarPrestamosPorMonto() {
  let montoBusqueda = parseFloat(prompt("Ingrese el monto para buscar préstamos:"));
  let resultadosBusqueda = prestamos.filter(prestamo => prestamo.monto === montoBusqueda);

  let resultadosDiv = document.getElementById('resultadosBusqueda');
  resultadosDiv.innerHTML = "";
  if (resultadosBusqueda.length > 0) {
    resultadosDiv.innerHTML = "<h3>Préstamos encontrados para el monto $" + montoBusqueda + ":</h3>";
    for (let i = 0; i < resultadosBusqueda.length; i++) {
      let prestamoDetails = mostrarDetalles(resultadosBusqueda[i]);
      resultadosDiv.innerHTML += "<div class='prestamo'>" + prestamoDetails + "</div>";
    }
  } else {
    resultadosDiv.innerHTML = "<p>No se encontraron préstamos para el monto $" + montoBusqueda + "</p>";
  }
}
