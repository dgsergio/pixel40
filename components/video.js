import classes from "./video.module.css";

const Video = (props) => {
  const { imageUrl, title, description, videoUrl } = props.data;
  return (
    <div className={classes.card}>
        <a href={videoUrl} target="_blank">
      <div className={classes.video}>
          <img src={imageUrl} alt={title} />
          <div className={classes.playIcon}>
            <img src="img/youtube.png" />
          </div>
        
      </div>
      <div className={classes.body}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      </a>
    </div>
  );
};

export default Video;
