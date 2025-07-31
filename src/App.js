import Imagen from "./components/Imagen";

function App() {
  return (
    <div className="container mt-5">
        <Imagen
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbGid74hA9Yh9es_e0tk-7G0B-koykVSDNBA&s" // URL de la imagen
          alt="ESPE" // Texto alternativo
          width="600" // Ancho de la imagen
          height="150" // Alto de la imagen
        />
    </div>
  );
}

export default App;
