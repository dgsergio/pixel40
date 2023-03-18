import classes from "./CursoDetails.module.css";

const CursoDetails = () => {
  return (
    <section className={`${classes.section} container`}>
      <div className={classes.row}>
        <h3>Edición a tu Alcance</h3>
        <div className={classes.info}>
          <div>
            <p>
              Photoshop se ha convertido en una de las plataformas más usadas
              por fotógrafos, diseñadores, publicistas, y profesionales del
              mundo audiovisual.
            </p>
            <p>
              Hace mucho que el retoque fotográfico y la edición de imágenes
              digitales dejó de ser un misterio y ahora todos tenemos la
              posibilidad de aprender.
            </p>
            <p>
              Nuestra forma de enseñar fácil y concisa, sin vueltas. Nuestro
              principal objetivo es que adquieras el conocimiento necesario para
              comenzar a editar y obtener resultados profesionales sin perder el
              tiempo en información innecesaria.
            </p>
          </div>
          <img src="img/curso/moto.jpg" alt="Una motocicleta con fondo desenfocado." />
        </div>
      </div>

      <div className={classes.row}>
        <div className={classes.info}>
          <div>
          <h3 className={classes.variant}>El Tiempo es Tuyo</h3>
            <p>
              Sabemos lo importante que es el tiempo en estos días que corren,
              no todas las personas son iguales así como tampoco sus
              necesidades.
            </p>
            <p>
              Este es un curso online que consiste en 28 capítulos en formato
              Videos Bajo Demanda. Tu manejas tus tiempos, puedes mirar una y
              otra vez cada capítulo las veces que sean necesarias. Incluso
              puedes acelerar o disminuir la velocidad de los videos para que se
              adapte a tu propio ritmo de estudio.
            </p>
            <p>
              El curso virtual te brinda más de 9 horas dividida en capítulos de
              aproximadamente 20 minutos cada uno para que te sea mucho más
              fácil de absorber el conocimiento.
            </p>
          </div>
          <img src="img/curso/cabello.jpg" className={classes.variant} alt="Mujer cabello largo con fondo eliminado." />
        </div>
      </div>
    </section>
  );
};

export default CursoDetails;
