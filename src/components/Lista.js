// Se crea un componente funcional llamado Lista
function Lista(props) {
  return (
    <ul className="list-group">
        {/* Recorremos el array */}
      {props.elementos.map((item, index) => (
        <li key={index} className="list-group-item"> {/* Usamos el índice como clave */}
          {item}
        </li>
      ))}
    </ul>
  );
}

export default Lista;
