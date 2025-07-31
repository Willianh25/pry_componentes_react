// Se crea un componente funcional llamado Formulario
function Formulario(props) {
    return (
        <form className="p-4 border rounded bg-light">
            {/* Si se pasan elementos hijos, se renderizan dentro del formulario */}
            {props.children}
        </form>
    );
}

// Se exporta el componente Formulario para que pueda ser utilizado en otros archivos
export default Formulario;