function Enlace(props) {
  return (
    <a href={props.href} className="btn btn-link" target="_blank" rel="noopener noreferrer">
      {props.texto}
    </a>
  );
}

export default Enlace;
