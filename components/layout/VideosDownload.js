import classes from "./VideosDownload.module.css";

const VideosDownload = ({ img, desc, url, type }) => {
  return (
    <div className={classes.descarga}>
      <div className={classes.header}>
        <h3>Descarga Media</h3>
      </div>
      <div className={classes.body}>
        <p>{desc}</p>
        <img src={img} alt="Imagen para descargar" />
        {type !== "jpg" && (
          <a className="button" target="_blank" href={url}>
            Descargar
          </a>
        )}
      </div>
    </div>
  );
};

export default VideosDownload;
