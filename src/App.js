import Imagen from "./components/Imagen";
import Titulo from "./components/Titulo";
import Parrafo from "./components/Parrafo";
import Enlace from "./components/Enlace";
import Lista from "./components/Lista";
import Tabla from "./components/Tabla";
import Formulario from "./components/Formulario";
import Boton from "./components/Boton";
import Input from "./components/Input";
import { useState } from "react";
import InputText from "./components/InputText";
import InputPassword from "./components/InputPassword";

function App() {

  const tecnologias = [
    "Superior en Redes",
    "Superior en Logistica y Transporte",
    "Superior en Mecánica Automotriz",
    "Superior en Electromecánica",
    "Superior en Seguridad y Prevención de Riesgos Laborales",
    "Superior en Automatización e Instrumentos",
    "Superior en Mecánica Aeronáutica",
  ];

  // Encabezado de la tabla
  const encabezados = ["Materia", "NRC", "Docente"];

  // Filas de la tabla
  const filas = [
    ["Desarrollo Web", 23380, "David Galarza"],
    ["Inteligencia Artificial", 23388, "Mauricio Loachamin"],
    ["Modelo Avanzado de Base de Datos", 23393, "Cesar Guayasamin"],
    ["Programación Integral Componentes Web", 23407, "Vilmer Criollo"],
  ];

  const enviarFormulario = () => {
    alert("Formulario enviado con éxito");
  };

  const [nombre, setNombre] = useState("");

  const [clave, setClave] = useState("");

  return (
    <div className="container mt-5">
      <Titulo texto="Bienvenido a Componentes React" nivel={1} />

        <Imagen
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbGid74hA9Yh9es_e0tk-7G0B-koykVSDNBA&s" // URL de la imagen
          alt="ESPE" // Texto alternativo
          width="600" // Ancho de la imagen
          height="150" // Alto de la imagen
        />

      <Titulo texto="Willian Herrera" nivel={2} />
      <Titulo texto="NRC 23407" nivel={3} />
      <Titulo texto="Componentes React" nivel={4} />
      <Titulo texto="Representación de elementos HTML" nivel={5} />
      <Titulo texto="ESPE" nivel={6} />

      <Parrafo texto="Este es un párrafo creado desde un componente reutilizable" />
      <Parrafo texto="Se puede realizar cambios en el texto" />

      <Enlace href="https://www.espe.edu.ec/" texto="Visita la página de la ESPE" />

      <Titulo texto="Lista de Tecnologías" nivel={4} />
      <Lista elementos={tecnologias} />

      <Titulo texto="Tabla de Materias" nivel={4} />
      <Tabla cabecera={encabezados} datos={filas} />

      <Titulo texto="Formulario de Contacto" nivel={4} />
      <Formulario>
       <InputText
          placeholder="Escribe tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <InputPassword
          placeholder="Escribe tu contraseña"
          value={clave}
          onChange={(e) => setClave(e.target.value)}
        />
        <Boton texto="Enviar" onClick={() => alert("Nombre ingresado: " + nombre + ", Clave ingresada: " + clave)} />
      </Formulario>
    </div>
  );
}

export default App;
