// Se crea un componente funcional llamado Tabla
// Este componente recibe dos props: cabecera y datos
function Tabla(props) {
  return (
    <div className="table-responsive">
    <table className="table table-bordered table-hover text-center align-middle">
      <thead className="table-dark">
        <tr>
          {/* Mostramos cada titulo de la cabecera en una celda de la tabla */}
          {props.cabecera.map((columna, index) => (
            <th key={index}>{columna}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* Recorremos los datos y mostramos cada fila en la tabla */}
        {props.datos.map((fila, filaIndex) => (
          <tr key={filaIndex}>
            {fila.map((celda, celdaIndex) => (
              <td key={celdaIndex}>{celda}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default Tabla;
