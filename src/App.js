import Imagen from "./components/Imagen";
import Titulo from "./components/Titulo";
import Parrafo from "./components/Parrafo";
import Enlace from "./components/Enlace";

function App() {
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
    </div>
  );
}

export default App;
