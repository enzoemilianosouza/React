const CardVideo = (props) => {
  return (
    <div className="box-pagina-principal" onClick={props.alertVideo}>
      <img src={props.link} alt="" />
      <h4>{props.titulo}</h4>
    </div>
  );
};

export default CardVideo;
