import { useEffect, useState } from "react";
import Video from "@/components/video";
import classes from "./Youtube.module.css";

const Youtube = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const transformData = (data) => {
    let videosData = [];
    for (const e of data.items) {
      videosData = [
        ...videosData,
        {
          id: e.id.videoId,
          videoUrl: "https://www.youtube.com/watch?v=" + e.id.videoId,
          title: e.snippet.title,
          imageUrl: e.snippet.thumbnails.high.url,
          description: e.snippet.description,
        },
      ];
    }
    return videosData;
  };

  useEffect(() => {
    const getVideos = async () => {
      const key = "AIzaSyAGyujwMrK9QZoy5G41wLAwoCCYrmwHoYY";
      const channelId = "UCO2EOwxk1GU_wJMQN1VH1dQ";
      const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=6&order=date&key=${key}`;

      try {
        setError(null);
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Fallo en solicitud: " + response.status);
        }
        const data = response.json();
        const videosData = transformData(await data);
        setVideos(videosData);
      } catch (error) {
        setError("Datos no disponibles. " + error.message);
      }
      setLoading(false);
    };
    getVideos();
  }, []);

  return (
    <section className={`${classes.section} container`}>
      <h2>Tutoriales de Photoshop</h2>
      <p className={classes.subtitle}>
        Disfruta los últimos videos tutoriales de Pixel40
      </p>
      {loading && <div className={classes.message}>Loading...</div>}
      {error && <div className={classes.message}>{error}</div>}
      <div className={classes.videos}>
        {videos.map((e, index) => {
          if (index <= 2) return <Video key={e.id} data={e} />;
          else return "";
        })}
      </div>

      {!showMore ? (
        <div className={classes["load-more"]}>
          <button onClick={() => setShowMore((pV) => !pV)}>Cargar más</button>
        </div>
      ) : (
        <div className={classes.videos}>
          {videos.map((e, index) => {
            if (index > 2) return <Video key={e.id} data={e} />;
            else return "";
          })}
        </div>
      )}
      <div className={classes.moreInfo}>
        <p>
          Suscribete a las lecciones completamente gratis de
          <b>Adobe Photoshop</b>, encontrarás tutoriales de retoque digital,
          composición ¡Y mucho más! Obtén acceso ilimitado a todos los videos en
          el canal de <b>YouTube de Pixel40</b>. Aquí podrás encontrar algunos
          ejemplos de los mismos.
        </p>
        <p>
          Al <b>Canal de Pixel40</b> subimos videos nuevos cada semana donde te
          ofrecemos <b>tips</b> para mejorar aún más tus habilidades de
          <b>Diseño</b>. Animate a ser parte de nuestra familia, queremos que
          aprendas de forma fácil y divertida... sin complicaciones absurdas.
          ¡Tu tienes lo que se necesita! Visitanos y comienza a diseñar.
        </p>
        <div className={classes.ytBtn}>
          <a href="https://www.youtube.com/@pixel40/" target="_blank">
            <button>Ir al Canal de YouTube &raquo;</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Youtube;
